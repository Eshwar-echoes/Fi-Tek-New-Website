"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { V2StabilityData } from "@/types/homeInstitutionalV2";

interface InstitutionalStabilityV2SectionProps {
  data: V2StabilityData;
}

export function InstitutionalStabilityV2Section({ data }: Readonly<InstitutionalStabilityV2SectionProps>) {
  return (
    <section className="bg-[linear-gradient(180deg,#f8f4eb_0%,#f1ebe0_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-slate-900 md:text-5xl">{data.heading}</h2>
          <p className="mt-4 max-w-3xl text-slate-600">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden rounded-sm border border-amber-900/20 bg-white"
            >
              <Image
                src={data.spotlightImageSrc}
                alt="Institutional platform operations"
                width={1200}
                height={420}
                className="h-52 w-full object-cover"
              />
            </motion.div>
            {data.markers.map((marker, index) => (
              <motion.div
                key={marker}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={inViewViewport}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-sm border border-amber-900/15 bg-white/70 p-5"
              >
                <p className="text-sm font-medium text-slate-700">{marker}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {data.metrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewViewport}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_10px_22px_rgba(15,23,42,0.08)]"
              >
                <p className="text-5xl leading-none text-slate-900">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
