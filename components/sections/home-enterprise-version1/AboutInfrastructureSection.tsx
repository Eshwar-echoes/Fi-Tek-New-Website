"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import type { AboutInfrastructureSectionData } from "@/types/about";
import {
  cardRevealPremium,
  cardRevealPremiumReduced,
  hoverElevation,
  inViewViewport,
  sectionReveal,
  sectionRevealReduced,
} from "@/components/motion/landing.motion";

interface AboutInfrastructureSectionProps {
  data: AboutInfrastructureSectionData;
}

export function AboutInfrastructureSection({
  data,
}: Readonly<AboutInfrastructureSectionProps>) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const cardHoverProps = shouldReduceMotion ? undefined : hoverElevation.card;
  const sectionVariants = shouldReduceMotion ? sectionRevealReduced : sectionReveal;

  return (
    <section className="bg-[linear-gradient(180deg,var(--leroux-workflow-start)_0%,var(--leroux-workflow-end)_100%)] py-16 sm:py-20 md:py-28">
      <Container>
        <div className="space-y-14 sm:space-y-16 md:space-y-24">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={inViewViewport}>
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-(--text-black) sm:text-4xl md:text-5xl">
                {data.intro.heading}
              </h2>
              <h3 className="text-2xl font-semibold leading-tight text-(--text-primary) sm:text-3xl md:text-3xl">
                {data.intro.subheading}
              </h3>
              <p className="max-w-3xl text-base leading-relaxed text-(--text-secondary) md:text-lg">
                {data.intro.description}
              </p>
            </div>
          </motion.div>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <div className="rounded-xl border border-(--border-subtle) bg-(--surface-base) p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-(--text-primary) sm:text-3xl">
                  {data.split.heading}
                </h3>

                <div className="mt-8 space-y-8">
                  {data.split.blocks.map((block) => (
                    <article
                      key={block.id}
                      className="border-t border-(--border-subtle) pt-6"
                    >
                      <h4 className="text-lg font-semibold text-(--text-primary)">
                        {block.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-(--text-secondary) md:text-base">
                        {block.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <div className="relative overflow-hidden rounded-xl border border-(--border-subtle) bg-linear-to-br from-(--surface-muted) to-(--surface-base) p-4 sm:p-6 md:p-8">
                <div className="h-[260px] sm:h-[320px] md:h-full md:min-h-[420px]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 640 480"
                    className="h-full w-full text-(--border-subtle)"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <pattern
                        id="about-infrastructure-grid"
                        width="32"
                        height="32"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 32 0 L 0 0 0 32"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="640" height="480" fill="url(#about-infrastructure-grid)" />
                    <rect
                      x="56"
                      y="64"
                      width="180"
                      height="120"
                      rx="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="272"
                      y="112"
                      width="312"
                      height="156"
                      rx="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="84"
                      y="232"
                      width="222"
                      height="172"
                      rx="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M236 124 H272 M306 318 H340 M306 170 H360"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <h3 className="text-2xl font-semibold tracking-tight text-(--text-primary) sm:text-3xl">
                {data.strengths.heading}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.strengths.items.map((item) => (
                <motion.article
                  key={item.id}
                  variants={shouldReduceMotion ? cardRevealPremiumReduced : cardRevealPremium}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewViewport}
                  whileHover={cardHoverProps?.whileHover}
                  whileTap={cardHoverProps?.whileTap}
                  className="rounded-xl border border-(--border-subtle) bg-linear-to-br from-(--surface-base) to-(--surface-muted) p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
                >
                  <h4 className="text-lg font-semibold text-(--text-primary)">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-(--text-secondary) md:text-base">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

