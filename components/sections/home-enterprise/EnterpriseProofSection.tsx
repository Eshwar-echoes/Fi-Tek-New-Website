"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { ProofSectionData } from "@/types/homeEnterprise";

interface EnterpriseProofSectionProps {
  data: ProofSectionData;
}

export function EnterpriseProofSection({
  data,
}: Readonly<EnterpriseProofSectionProps>) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--leroux-proof-start)_0%,var(--leroux-proof-end)_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-(--text-primary) md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-(--text-secondary)">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ duration: 0.32, delay: index * 0.05, ease: "easeOut" }}
              className="rounded-sm border border-(--leroux-card-border) bg-(--leroux-card-bg) p-7 shadow-(--leroux-card-shadow)"
            >
              <p className="text-5xl leading-none text-(--text-primary)">{metric.value}</p>
              <p className="mt-2 text-sm text-(--text-secondary)">{metric.label}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
