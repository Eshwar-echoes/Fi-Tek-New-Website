"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { useInView, useReducedMotion } from "framer-motion";
import type { GlobalWealthContent } from "@/content/client/fitek/technology/technology";

/* --------------------------------
   Animated Counter
--------------------------------- */
function AnimatedStat({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [count, setCount] = useState(
    prefersReducedMotion ? value : 0
  );

  useEffect(() => {
    if (!start || prefersReducedMotion) return;

    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [start, value, prefersReducedMotion]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* --------------------------------
   Section
--------------------------------- */
export function GlobalWealthSection({
  data,
}: {
  data: GlobalWealthContent;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  return (
    <section className="bg-(--brand-primary) py-32 text-(--text-inverse)">
      <Container>
        <SectionReveal>
          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {data.heading}
          </h2>

          {/* Metrics */}
          <div
            ref={ref}
            className="mt-20 grid gap-16 md:grid-cols-3 text-center"
          >
            {data.metrics.map((metric) => (
              <div key={metric.label} className="space-y-4">
                <div className="text-6xl md:text-7xl font-bold tracking-tight">
                  <AnimatedStat
                    value={metric.value}
                    suffix={metric.suffix}
                    start={isInView}
                  />
                </div>

                <p className="text-sm md:text-base text-(--text-light)">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

