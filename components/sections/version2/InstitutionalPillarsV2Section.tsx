"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { hoverElevation, inViewViewport } from "@/components/motion/landing.motion";
import type { V2PillarsData } from "@/types/homeInstitutionalV2";

interface InstitutionalPillarsV2SectionProps {
  data: V2PillarsData;
}

export function InstitutionalPillarsV2Section({ data }: Readonly<InstitutionalPillarsV2SectionProps>) {
  return (
    <section className="bg-[linear-gradient(180deg,#f7f9fc_0%,#eef3fa_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-(--text-primary) md:text-5xl">{data.heading}</h2>
          <p className="mt-4 max-w-3xl text-(--text-secondary)">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {data.pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ duration: 0.34, delay: index * 0.06, ease: "easeOut" }}
              whileHover={hoverElevation.card.whileHover}
              whileTap={hoverElevation.card.whileTap}
              className="rounded-sm border border-slate-200 bg-white p-7 shadow-[0_16px_34px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Core Pillar</p>
              <h3 className="mt-3 text-3xl leading-tight text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
