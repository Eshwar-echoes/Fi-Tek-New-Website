"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import type { FinanceFeatureSectionData } from "@/types/financeFeature";
import {
  accentLineReveal,
  accentLineRevealReduced,
  cardRevealPremium,
  cardRevealPremiumReduced,
  inViewViewport,
  sectionReveal,
  sectionRevealReduced,
  staggerContainer,
  staggerContainerReduced,
} from "@/components/motion/landing.motion";

interface FinanceFeatureSectionProps {
  data: FinanceFeatureSectionData;
}

export function FinanceFeatureSection({ data }: FinanceFeatureSectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section className="bg-(--surface-footer) py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            variants={shouldReduceMotion ? sectionRevealReduced : sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="order-1 text-(--text-inverse) md:order-2"
          >
            <h2 className="max-w-xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              {data.heading}
            </h2>

            <motion.div
              variants={shouldReduceMotion ? staggerContainerReduced : staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              className="mt-10 space-y-10"
            >
              {data.features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={shouldReduceMotion ? cardRevealPremiumReduced : cardRevealPremium}
                >
                  {index !== 0 && (
                    <motion.div
                      variants={shouldReduceMotion ? accentLineRevealReduced : accentLineReveal}
                      className="mb-8 h-px w-full bg-white/20"
                    />
                  )}

                  <h3 className="text-xl font-semibold md:text-2xl">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? sectionRevealReduced : sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="order-2 flex justify-center md:order-1 md:justify-start"
          >
            <Image
              src={data.image}
              alt=""
              width={420}
              height={800}
              priority
              className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

