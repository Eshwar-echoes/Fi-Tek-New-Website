"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { V2LifecycleData } from "@/types/homeInstitutionalV2";

interface InstitutionalWowLifecycleV2SectionProps {
  data: V2LifecycleData;
}

type DotPoint = { x: number; y: number };

const dotPoints: DotPoint[] = [
  { x: 160, y: 40 },
  { x: 260, y: 95 },
  { x: 260, y: 225 },
  { x: 160, y: 280 },
  { x: 60, y: 225 },
  { x: 60, y: 95 },
];

export function InstitutionalWowLifecycleV2Section({
  data,
}: Readonly<InstitutionalWowLifecycleV2SectionProps>) {
  const [activeStep, setActiveStep] = useState(0);
  const active = data.steps[activeStep];
  const activeDot = dotPoints[activeStep];

  return (
    <section className="bg-[radial-gradient(120%_120%_at_50%_0%,#1f304f_0%,#0d1528_54%,#090f1f_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-white md:text-5xl">{data.heading}</h2>
          <p className="mt-4 max-w-3xl text-white/80">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid items-start gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-sm border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
            <div className="mx-auto w-full max-w-[320px]">
              <svg viewBox="0 0 320 320" className="h-auto w-full" fill="none" aria-hidden>
                <circle cx="160" cy="160" r="120" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                <circle cx="160" cy="160" r="62" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.35)" />

                <motion.line
                  x1="160"
                  y1="160"
                  x2={activeDot.x}
                  y2={activeDot.y}
                  stroke="rgba(255,255,255,0.92)"
                  strokeWidth="2"
                  initial={false}
                  animate={{ x2: activeDot.x, y2: activeDot.y }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />

                {dotPoints.map((dot, index) => {
                  const isActive = index === activeStep;
                  return (
                    <g key={data.steps[index].id}>
                      <circle
                        cx={dot.x}
                        cy={dot.y}
                        r={isActive ? 15 : 11}
                        fill={isActive ? "rgba(248,250,252,0.96)" : "rgba(255,255,255,0.18)"}
                        stroke={isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)"}
                      />
                      <text
                        x={dot.x}
                        y={dot.y + 4}
                        textAnchor="middle"
                        className={isActive ? "fill-slate-900" : "fill-slate-100"}
                        style={{ fontSize: 11, fontWeight: 700 }}
                      >
                        {index + 1}
                      </text>
                    </g>
                  );
                })}

                <text x="160" y="148" textAnchor="middle" className="fill-slate-100" style={{ fontSize: 10, letterSpacing: "0.1em" }}>
                  PLATFORM CORE
                </text>
                <text x="160" y="168" textAnchor="middle" className="fill-slate-100" style={{ fontSize: 12, fontWeight: 600 }}>
                  Unified Data and
                </text>
                <text x="160" y="184" textAnchor="middle" className="fill-slate-100" style={{ fontSize: 12, fontWeight: 600 }}>
                  Control Core
                </text>
              </svg>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {data.steps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className="rounded-sm border px-3 py-2 text-left text-xs transition-colors"
                    style={{
                      borderColor: isActive ? "rgba(255,255,255,0.62)" : "rgba(255,255,255,0.25)",
                      backgroundColor: isActive ? "rgba(255,255,255,0.17)" : "rgba(255,255,255,0.06)",
                      color: "#e5e7eb",
                    }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold">
                        {index + 1}
                      </span>
                      <span>{step.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="xl:sticky xl:top-28">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="rounded-sm border border-white/22 bg-white/10 p-7 backdrop-blur-sm"
              >
                <div className="mb-5 overflow-hidden rounded-sm border border-white/14 bg-white/4 p-1">
                  <Image
                    src={active.imageSrc}
                    alt={active.label}
                    width={720}
                    height={360}
                    className="h-44 w-full rounded-[2px] object-cover"
                  />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  Active Function
                </p>
                <h3 className="mt-3 text-4xl leading-tight text-white">{active.label}</h3>
                <p className="mt-4 text-sm text-white/80">{active.detail}</p>

                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/15" aria-hidden>
                  <motion.div
                    className="h-full rounded-full bg-white"
                    animate={{ width: `${((activeStep + 1) / data.steps.length) * 100}%` }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
