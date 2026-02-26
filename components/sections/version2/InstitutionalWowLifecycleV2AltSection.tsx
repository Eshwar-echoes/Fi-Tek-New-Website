"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { V2LifecycleData } from "@/types/homeInstitutionalV2";

interface InstitutionalWowLifecycleV2AltSectionProps {
  data: V2LifecycleData;
}

export function InstitutionalWowLifecycleV2AltSection({
  data,
}: Readonly<InstitutionalWowLifecycleV2AltSectionProps>) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[linear-gradient(180deg,#0a1224_0%,#0f1a33_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            Alternate View
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-white md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-white/80">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.article
            key={data.steps[activeStep].id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-sm border border-white/25 bg-white/10 p-6 backdrop-blur-sm lg:sticky lg:top-24"
          >
            <div className="overflow-hidden rounded-sm border border-white/20">
              <Image
                src={data.steps[activeStep].imageSrc}
                alt={data.steps[activeStep].label}
                width={900}
                height={520}
                className="h-56 w-full object-cover"
              />
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-xs font-semibold text-slate-900">
                {activeStep + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                {data.centerLabel}
              </p>
            </div>
            <h3 className="mt-3 text-4xl leading-tight text-white">
              {data.steps[activeStep].label}
            </h3>
            <p className="mt-3 text-sm text-white/82">
              {data.steps[activeStep].detail}
            </p>
          </motion.article>

          <div className="rounded-sm border border-white/20 bg-white/5 p-4">
            <div className="relative pl-6">
              <span className="absolute left-[0.65rem] top-2 h-[calc(100%-0.5rem)] w-px bg-white/25" />
              <div className="space-y-3">
                {data.steps.map((step, index) => {
                  const isActive = index === activeStep;
                  return (
                    <motion.button
                      key={step.id}
                      type="button"
                      onMouseEnter={() => setActiveStep(index)}
                      onFocus={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={inViewViewport}
                      transition={{
                        duration: 0.28,
                        delay: index * 0.04,
                        ease: "easeOut",
                      }}
                      className="relative block w-full rounded-sm border px-4 py-4 text-left transition-colors"
                      style={{
                        borderColor: isActive
                          ? "rgba(255,255,255,0.56)"
                          : "rgba(255,255,255,0.25)",
                        backgroundColor: isActive
                          ? "rgba(255,255,255,0.18)"
                          : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="absolute -left-[1.55rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full"
                        style={{
                          backgroundColor: isActive
                            ? "rgba(255,255,255,0.95)"
                            : "rgba(148,163,184,0.7)",
                        }}
                      />
                      <p className="text-base font-semibold text-white">{step.label}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-white/75">
                        {step.detail}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

