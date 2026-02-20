"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { hoverElevation, inViewViewport } from "@/components/motion/landing.motion";
import type { CapabilitiesGridData } from "@/types/homeEnterprise";

interface CapabilitiesGridSectionProps {
  data: CapabilitiesGridData;
}

function CapabilityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-(--brand-primary)"
      aria-hidden
    >
      <path
        d="M12 3v18M3 12h18M5.5 5.5l13 13m0-13-13 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CapabilitiesGridSection({
  data,
}: Readonly<CapabilitiesGridSectionProps>) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--leroux-capabilities-start)_0%,var(--leroux-capabilities-end)_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-(--text-primary) md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-(--text-secondary)">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ duration: 0.32, delay: index * 0.04, ease: "easeOut" }}
              whileHover={hoverElevation.card.whileHover}
              whileTap={hoverElevation.card.whileTap}
              className="group flex h-full min-h-48 flex-col rounded-sm border border-[var(--leroux-card-border)] bg-[var(--leroux-card-bg)] p-6 shadow-[var(--leroux-card-shadow)]"
            >
              <CapabilityIcon />
              <h3 className="mt-4 border-b border-transparent pb-1 text-3xl leading-tight text-(--text-primary) transition-colors group-hover:text-(--brand-primary)">
                {item.title}
              </h3>
              <div className="mt-1 h-[1px] w-0 bg-(--brand-primary) transition-all duration-200 group-hover:w-10" />
              <p className="mt-3 text-sm text-(--text-secondary)">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
