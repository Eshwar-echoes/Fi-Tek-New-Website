"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import type { PerformingCapitalContent } from "@/types/performingCapital";
import Link from "next/link";

const MotionLink = motion(Link);
interface Props {
  data: PerformingCapitalContent;
}


export function PerformingCapitalSection({ data }: Readonly<Props>) {
  return (
    <section className="py-28 bg-(--surface-base)">
      <Container>
        <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="space-y-16">

            {/* Header */}
            <div className="max-w-3xl space-y-4">
                <h2 className="text-4xl md:text-5xl font-semibold text-(--text-primary)">
                {data.title}
                </h2>
                {data.subtitle && (
                <p className="text-lg text-(--text-secondary)">
                    {data.subtitle}
                </p>
                )}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.items.map((item) => (
                <MotionLink
                    key={item.id}
                    href={item.href}
                    whileHover={{ y: -4, backgroundColor: "var(--surface-muted)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="
                        group
                        rounded-2xl
                        bg-white
                        border border-(--border-subtle)
                        p-6
                        flex flex-col justify-between
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-(--focus)
                    "
                    >

                    {/* Top */}
                    <div className="space-y-6">
                    <div className="flex items-start justify-between">
                        {item.icon && (
                        <img
                            src={item.icon}
                            alt={`${item.title} icon`}
                            className="h-10 w-10 rounded-md"
                        />
                        )}

                        {item.href && (
                        <span className="text-(--text-muted) transition group-hover:text-(--text-primary)">
                            ↗
                        </span>
                        )}
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-(--text-primary)">
                        {item.title}
                        </h3>
                        <p className="text-sm text-(--text-secondary) leading-relaxed">
                        {item.description}
                        </p>
                    </div>
                    </div>

                    {/* Metric */}
                    <div className="mt-8">
                    <div className="inline-flex items-end gap-2 rounded-xl bg-(--surface-muted) px-4 py-3">
                        <span className="text-2xl font-semibold text-(--text-primary)">
                        {item.metric.value}
                        </span>
                        <span className="text-sm text-(--text-muted)">
                        {item.metric.label}
                        </span>
                    </div>
                    </div>
                </MotionLink>
                ))}
            </div>

            </div>
        </motion.section>
      </Container>
    </section>
  );
}
