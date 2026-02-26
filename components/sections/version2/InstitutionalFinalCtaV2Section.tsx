"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { V2FinalCtaData } from "@/types/homeInstitutionalV2";

interface InstitutionalFinalCtaV2SectionProps {
  data: V2FinalCtaData;
}

export function InstitutionalFinalCtaV2Section({ data }: Readonly<InstitutionalFinalCtaV2SectionProps>) {
  return (
    <section className="bg-[radial-gradient(120%_120%_at_50%_0%,#27395e_0%,#131c31_56%,#0a1122_100%)] py-20 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-sm border border-white/30 bg-white/8 p-8 md:p-10"
        >
          <h2 className="max-w-3xl text-4xl leading-tight text-white md:text-5xl">{data.heading}</h2>
          <p className="mt-4 max-w-3xl text-white/80">{data.description}</p>

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
