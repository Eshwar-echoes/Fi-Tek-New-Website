"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hoverElevation, inViewViewport } from "@/components/motion/landing.motion";
import type { SegmentSplitData } from "@/types/homeEnterprise";

interface SegmentSplitSectionProps {
  data: SegmentSplitData;
}

export function SegmentSplitSection({
  data,
}: Readonly<SegmentSplitSectionProps>) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--leroux-split-start)_0%,var(--leroux-split-end)_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-(--text-primary) md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-(--text-secondary)">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {data.pathways.map((pathway, index) => (
            <motion.article
              key={pathway.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              whileHover={hoverElevation.card.whileHover}
              whileTap={hoverElevation.card.whileTap}
              className="flex h-full flex-col rounded-sm border border-[var(--leroux-card-border)] bg-[var(--leroux-card-bg)] p-7 shadow-[var(--leroux-card-shadow)]"
            >
              <Badge>{pathway.subtitle}</Badge>
              <h3 className="mt-3 text-3xl leading-tight text-(--text-primary)">
                {pathway.title}
              </h3>
              <p className="mt-3 text-(--text-secondary)">{pathway.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-(--text-secondary)">
                {pathway.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-[0.4rem] inline-block h-1.5 w-1.5 rounded-full bg-(--brand-primary)" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button intent="primary" context="inverse" className="rounded-sm" asChild>
                  <Link href={pathway.ctaHref}>{pathway.ctaLabel}</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
