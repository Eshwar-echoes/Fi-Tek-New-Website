"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { FinalCtaData } from "@/types/homeEnterprise";

interface EnterpriseFinalCtaSectionProps {
  data: FinalCtaData;
}

export function EnterpriseFinalCtaSection({
  data,
}: Readonly<EnterpriseFinalCtaSectionProps>) {
  return (
    <section className="bg-[radial-gradient(110%_120%_at_50%_0%,var(--leroux-cta-start)_0%,var(--leroux-cta-mid)_55%,var(--leroux-cta-end)_100%)] py-20 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-sm border border-[var(--leroux-dark-border-strong)] bg-[linear-gradient(135deg,var(--leroux-dark-glass-a)_0%,var(--leroux-dark-glass-b)_100%)] p-8 md:p-10"
        >
          <h2 className="max-w-3xl text-4xl leading-tight text-[var(--leroux-dark-text-strong)] md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-[var(--leroux-dark-text-muted)]">{data.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button intent="primary" className="rounded-sm" asChild>
              <Link href={data.primaryCtaHref}>{data.primaryCtaLabel}</Link>
            </Button>
            <Button intent="secondary" className="rounded-sm" asChild>
              <Link href={data.secondaryCtaHref}>{data.secondaryCtaLabel}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
