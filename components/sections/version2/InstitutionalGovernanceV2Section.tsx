"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { V2GovernanceData } from "@/types/homeInstitutionalV2";

interface InstitutionalGovernanceV2SectionProps {
  data: V2GovernanceData;
}

export function InstitutionalGovernanceV2Section({ data }: Readonly<InstitutionalGovernanceV2SectionProps>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data.items[activeIndex];

  return (
    <section className="bg-[linear-gradient(180deg,#f4f7fc_0%,#eaf0f9_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Institutional Control Layer
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-slate-900 md:text-5xl">{data.heading}</h2>
          <p className="mt-4 max-w-3xl text-slate-600">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={{ duration: 0.36, ease: "easeOut" }}
            className="rounded-sm border border-slate-200 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Selected Governance Pillar</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="mb-5 overflow-hidden rounded-sm border border-slate-200">
                  <Image
                    src={data.panelImageSrc}
                    alt="Governance and compliance operations"
                    width={720}
                    height={360}
                    className="h-36 w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-4xl leading-tight text-slate-900">{activeItem.title}</h3>
                <p className="mt-4 text-sm text-slate-600">{activeItem.description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 rounded-sm border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Control Outcome</p>
              <p className="mt-2 text-sm text-slate-700">
                Stronger audit posture, clearer supervisory oversight, and lower operational risk through unified governance execution.
              </p>
            </div>
          </motion.div>

          <div className="rounded-sm border border-slate-200 bg-white/80 p-4 shadow-[0_16px_34px_rgba(15,23,42,0.07)] backdrop-blur-sm">
            <div className="space-y-3">
              {data.items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={inViewViewport}
                    transition={{ duration: 0.28, delay: index * 0.04, ease: "easeOut" }}
                    className="relative w-full overflow-hidden rounded-sm border px-5 py-4 text-left transition-colors"
                    style={{
                      borderColor: isActive ? "rgba(15,23,42,0.35)" : "rgba(148,163,184,0.35)",
                      backgroundColor: isActive ? "rgba(15,23,42,0.06)" : "rgba(255,255,255,0.86)",
                    }}
                  >
                    <motion.span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-1"
                      animate={{
                        opacity: isActive ? 1 : 0.25,
                        backgroundColor: isActive ? "#0f172a" : "#94a3b8",
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />

                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: isActive ? "#0f172a" : "#e2e8f0",
                          color: isActive ? "#f8fafc" : "#334155",
                        }}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-base font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 line-clamp-2 text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
