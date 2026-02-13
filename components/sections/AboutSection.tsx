"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/Container";
import type { AboutData } from "@/content/client/fitek/home";
import {
  cardRevealPremium,
  cardRevealPremiumReduced,
  hoverElevation,
  inViewViewport,
  sectionReveal,
  sectionRevealReduced,
  staggerContainer,
  staggerContainerReduced,
} from "@/components/motion/landing.motion";

export function AboutSection({ data }: Readonly<{ data: AboutData }>) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const sectionVariants = shouldReduceMotion ? sectionRevealReduced : sectionReveal;
  const gridVariants = shouldReduceMotion ? staggerContainerReduced : staggerContainer;
  const itemVariants = shouldReduceMotion ? cardRevealPremiumReduced : cardRevealPremium;
  const cardHoverProps = shouldReduceMotion ? undefined : hoverElevation.card;

  return (
    <section className="bg-(--surface-muted) py-24">
      <Container>
        <div className="space-y-24">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="max-w-3xl space-y-4"
          >
            <h2 className="text-5xl font-bold tracking-tight text-(--text-black) md:text-5xl">
              {data.intro.title}
            </h2>
            <p className="max-w-2xl text-xl leading-relaxed text-(--text-secondary)">
              {data.intro.subtitle}
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={inViewViewport} className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight text-(--text-black)">Operating Principles</h3>
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              className="grid grid-cols-1 gap-12 md:grid-cols-3"
            >
              {data.principles.map((principle) => (
                <motion.article
                  key={principle.id}
                  variants={itemVariants}
                  whileHover={cardHoverProps?.whileHover}
                  whileTap={cardHoverProps?.whileTap}
                  className="space-y-3"
                >
                  <h4 className="text-lg font-bold tracking-tight text-(--text-black)">{principle.title}</h4>
                  <p className="text-base leading-relaxed text-(--text-secondary)">{principle.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={inViewViewport} className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight text-(--text-black)">Core Strengths</h3>
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              className="grid grid-cols-1 gap-12 md:grid-cols-3"
            >
              {data.strengths.map((strength) => (
                <motion.article
                  key={strength.id}
                  variants={itemVariants}
                  whileHover={cardHoverProps?.whileHover}
                  whileTap={cardHoverProps?.whileTap}
                  className="space-y-3"
                >
                  <h4 className="text-lg font-bold tracking-tight text-(--text-black)">{strength.title}</h4>
                  <p className="text-base leading-relaxed text-(--text-secondary)">{strength.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="rounded-lg border border-(--border-subtle) bg-linear-to-br from-(--surface-muted) to-(--surface-base) p-8"
          >
            <h3 className="text-2xl font-bold tracking-tight text-(--text-black)">{data.team.heading}</h3>
            <p className="max-w-2xl text-base leading-relaxed text-(--text-secondary)">{data.team.description}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              {data.team.roles.map((role) => (
                <span
                  key={role}
                  className="inline-block rounded border border-(--border-subtle) bg-(--surface-base) px-3 py-2 text-sm font-medium text-(--text-black)"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={inViewViewport} className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight text-(--text-black)">Why Choose Fi-Tek</h3>
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              className="space-y-4"
            >
              {data.whyChoose.map((item) => (
                <motion.div key={item.id} variants={itemVariants} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-(--surface-black)" />
                  <p className="text-base leading-relaxed text-(--text-secondary)">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

