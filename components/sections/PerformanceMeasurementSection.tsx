"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import type { PerformanceMeasurementContent } from "@/types/performanceMeasurement";
import { CountUp } from "../ui/CountUp";

export function PerformanceMeasurementSection({
  data,
}: Readonly<{
  data: PerformanceMeasurementContent;
}>) {
  return (
    <section
      className="
        relative py-24
        bg-(--surface-alt)
        text-(--text-light)
      "
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT — CONTENT */}
          <div className="max-w-xl">
            {data.eyebrow && (
              <p className="mb-4 text-sm uppercase tracking-wide text-(--text-muted)">
                {data.eyebrow}
              </p>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold"
            >
              {data.title}
            </motion.h2>

            <div className="mt-6 space-y-4 text-(--text-light)">
              {data.description.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {data.benefits.map((benefit, i) => (
                <li key={benefit + i} className="flex items-center gap-4">
                 <span className="h-2 w-2 shrink-0 rounded-full bg-(--brand-primary)" />
                 <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — DASHBOARD VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              relative rounded-2xl overflow-hidden
              border border-(--border-strong)
              bg-(--surface-black)
              p-6
            "
          >
            {/* KPIs */}
            <div className="grid grid-cols-3 gap-6 mb-6 text-center">
              <div>
                <p className="text-xs text-(--text-muted)">TWR</p>
                <p className="text-2xl font-semibold text-(--text-light)">
                  <CountUp value={14} />%
                </p>
              </div>

              <div>
                <p className="text-xs text-(--text-muted)">YTD Return</p>
                <p className="text-2xl font-semibold text-(--text-light)">
                  <CountUp value={9} />%
                </p>
              </div>

              <div>
                <p className="text-xs text-(--text-muted)">Volatility</p>
                <p className="text-2xl font-semibold text-(--text-light)">
                  <CountUp value={6} />%
                </p>
              </div>
            </div>

            {/* Dashboard Image */}
            <motion.img
              src={data.dashboardImage}
              alt="Performance dashboard"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full rounded-xl object-cover"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
