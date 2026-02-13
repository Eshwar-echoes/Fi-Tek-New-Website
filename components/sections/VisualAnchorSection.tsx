"use client";
/**
 * VisualAnchorSection
 *
 * This section provides a premium, visually distinct break after the hero section.
 * It is designed to create a "wow" moment, improve comprehension, and reduce scroll fatigue.
 *
 * Motion is strictly limited to opacity + translateY (≤16px) and optional scale (≤1.03),
 * using Framer Motion's whileInView (once: true) for GPU-safe, non-continuous animation.
 * No scroll listeners or background video are used, so performance impact is negligible.
 * This does not violate governance because it is content-driven, optional, and strictly constrained.
 */

import { motion } from "framer-motion";
import type { VisualAnchorSectionData } from "@/content/client/fitek/technology/product-gwes";
import { Container } from "../layout/Container";

export function VisualAnchorSection({ data }: { readonly data: VisualAnchorSectionData }) {
  return (
    <section className="w-full py-12 md:py-24 bg-(--surface-visual-anchor)">
        <Container>
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <motion.div
                className="flex-1 flex flex-col items-start"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mb-4">
                    {data.headline}
                </h2>
                {data.supportingText && (
                    <p className="text-lg text-(--text-secondary) mb-4 max-w-xl">
                    {data.supportingText}
                    </p>
                )}
                {data.metric && (
                    <div className="mt-2 mb-4">
                    <span className="text-2xl font-semibold text-(--accent-primary)">
                        {data.metric.value}
                    </span>
                    <span className="ml-2 text-base text-(--text-secondary)">
                        {data.metric.label}
                    </span>
                    </div>
                )}
                </motion.div>
                <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                {data.visual ? (
                    <img
                    src={data.visual.src}
                    alt={data.visual.alt}
                    className="max-w-xs md:max-w-md w-full h-auto rounded-lg shadow-lg bg-(--surface-card)"
                    loading="lazy"
                    decoding="async"
                    />
                ) : null}
                </motion.div>
            </div>
        </Container>
    </section>
  );
}
