"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import type { GlobalTrustContent } from "@/types/GoblaTrust";

export function GlobalTrustSection({
  data,
}: Readonly<{
  data: GlobalTrustContent;
}>) {
  return (
    <section className="py-28 bg-(--surface-base)">
      <Container>
        <div className="max-w-6xl mx-auto text-center space-y-14">

          {/* Heading */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold text-(--text-primary)"
            >
              {data.heading}
            </motion.h2>

            <p className="max-w-3xl mx-auto text-lg text-(--text-secondary)">
              {data.description}
            </p>
          </div>

          {/* ================= WORLD MAP ================= */}
          <div className="relative h-90 rounded-2xl bg-(--surface-muted) border border-(--border-subtle) overflow-hidden">

            {/* Map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-sm text-(--text-muted)">
              Global Coverage Map
            </div>

            {/* Global dots */}
            {[
              { top: "38%", left: "22%" }, // North America
              { top: "44%", left: "48%" }, // Europe
              { top: "56%", left: "52%" }, // Africa
              { top: "42%", left: "70%" }, // Asia
              { top: "68%", left: "78%" }, // Australia
            ].map((dot, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="absolute h-2.5 w-2.5 rounded-full bg-(--brand-primary)"
                style={{ top: dot.top, left: dot.left }}
              />
            ))}
          </div>

          {/* ================= METRICS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
            {data.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-(--border-subtle) bg-(--surface-base) py-10"
              >
                <div className="text-4xl md:text-5xl font-semibold text-(--text-primary)">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-(--text-muted)">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
