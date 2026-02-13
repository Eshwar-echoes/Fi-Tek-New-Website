"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HeroData } from "@/content/client/fitek/home";
import { Container } from "../layout/Container";
import { Button } from "../ui/button";
import {
  heroStagger,
  heroStaggerReduced,
  hoverElevation,
  inViewViewport,
} from "@/components/motion/landing.motion";

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const heroMotion = shouldReduceMotion ? heroStaggerReduced : heroStagger;
  const buttonHoverProps = shouldReduceMotion ? undefined : hoverElevation.button;

  return (
    <section className="relative isolate min-h-[80vh] md:h-[80vh]" aria-label="Hero section">
      {data.media && (
        <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {data.media.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={data.media.poster}
              className="h-full w-full object-cover"
            >
              <source src={data.media.src} type="video/mp4" />
            </video>
          ) : (
            <img src={data.media.src} alt="" className="h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-(--surface-black)/40" />
        </div>
      )}

      <div className="relative z-10 flex min-h-[80vh] items-center md:h-full">
        <Container>
          <motion.div
            variants={heroMotion.container}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="max-w-8xl space-y-6 md:space-y-6"
          >
            {data.eyebrow && (
              <motion.span
                variants={heroMotion.heading}
                className="block text-xs uppercase tracking-widest text-(--text-light)"
              >
                {data.eyebrow}
              </motion.span>
            )}

            {data.title.map((line) => (
              <motion.h1
                key={line}
                variants={heroMotion.heading}
                className="text-4xl font-bold leading-tight text-(--text-inverse) sm:text-5xl md:text-6xl lg:text-6xl mb-0"
              >
                {line}
              </motion.h1>
            ))}

            <motion.p
              variants={heroMotion.subheading}
              className="text-lg md:text-xl text-(--text-light) leading-relaxed mt-2"
            >
              {data.description}
            </motion.p>

            <motion.div variants={heroMotion.cta} className="flex flex-wrap gap-4 pt-4">
              <motion.div
                whileHover={buttonHoverProps?.whileHover}
                whileTap={buttonHoverProps?.whileTap}
                transition={buttonHoverProps?.transition}
              >
                <Button asChild intent="primary" context="default">
                  <a href={data.actions.primaryHref}>{data.actions.primary}</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={buttonHoverProps?.whileHover}
                whileTap={buttonHoverProps?.whileTap}
                transition={buttonHoverProps?.transition}
              >
                <Button asChild intent="secondary" context="default">
                  <a href={data.actions.secondaryHref}>{data.actions.secondary}</a>
                </Button>
              </motion.div>
            </motion.div>

            {data.microcopy && (
              <motion.p variants={heroMotion.microcopy} className="pt-4 text-sm text-(--text-light)">
                {data.microcopy}
              </motion.p>
            )}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}

