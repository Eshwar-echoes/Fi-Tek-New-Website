"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ProofData } from "@/content/client/fitek/home";
import { Container } from "../layout/Container";
import { CountUp } from "../ui/CountUp";
import {
  cardRevealPremium,
  cardRevealPremiumReduced,
  hoverElevation,
  inViewViewport,
  staggerContainer,
  staggerContainerReduced,
} from "@/components/motion/landing.motion";

interface ProofSectionProps {
  data: ProofData;
}

function ProofCard({
  metric,
  reduceMotion,
}: Readonly<{
  metric: ProofData["metrics"][number];
  reduceMotion: boolean;
}>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const cardHoverProps = reduceMotion ? undefined : hoverElevation.card;

  return (
    <motion.div
      ref={ref}
      variants={reduceMotion ? cardRevealPremiumReduced : cardRevealPremium}
      whileHover={cardHoverProps?.whileHover}
      whileTap={cardHoverProps?.whileTap}
      className="relative h-65 overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${metric.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-(--surface-black)/5" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="text-4xl font-semibold tracking-tight text-(--text-inverse) md:text-5xl">
          {isInView && (
            <>
              {metric.prefix}
              <CountUp value={metric.value} decimals={1} />
              {metric.suffix}
            </>
          )}
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-(--text-light) md:text-base">
          {metric.label}
        </p>
      </div>
    </motion.div>
  );
}

export function ProofSection({ data }: Readonly<ProofSectionProps>) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="py-24 pt-8">
      <Container>
        <motion.div
          className="grid gap-8 md:grid-cols-4"
          variants={shouldReduceMotion ? staggerContainerReduced : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
        >
          {data.metrics.map((metric) => (
            <ProofCard key={metric.label} metric={metric} reduceMotion={shouldReduceMotion} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

