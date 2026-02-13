/**
 * ProductPageHero Section (for SaaS-style product pages)
 *
 * Why this hero exists separately from the landing hero:
 * - Product pages require a focused, professional hero that orients users, builds trust, and drives conversion, without the marketing theatrics of a landing hero.
 * - This component is strictly content-driven and reusable for any product page, with no hardcoded copy or business logic.
 *
 * Motion (if used) is minimal and safe:
 * - Only a single entrance reveal (opacity + translateY ≤ 16px) is used, triggered whileInView, once: true.
 * - Dashboard image may fade in after text. Duration and easing are strictly governed, and prefers-reduced-motion is respected.
 * - No scroll listeners, no continuous or background animation, no hover effects.
 *
 * Reusability:
 * - All content is passed via props, so this section can be used for any product page by duplicating content only.
 *
 * Performance:
 * - No video, no parallax, no layout-thrashing, no global side effects.
 * - Image is optimized and SSR-safe (use next/image if available).
 * - All text and visuals are accessible and WCAG AA compliant.
 * - No third-party libraries beyond approved motion utilities.
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "../layout/Container";
import type { ProductHeroData } from "@/types/product-hero";

/**
 * ProductPageHero is strictly content-driven and governance-compliant.
 * - All content is passed via the ProductHeroData prop, which is defined in a shared types file.
 * - No business logic, no hardcoded strings, and no content duplication are allowed in this component.
 * - This ensures reusability, maintainability, and compliance with enterprise content governance.
 */
export function ProductPageHero({ data }: { readonly data: ProductHeroData }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const initial = prefersReducedMotion ? undefined : { opacity: 0, y: 16 };
  const whileInView = prefersReducedMotion ? undefined : { opacity: 1, y: 0 };
  return (
    <Container>
        <section
        className="relative flex flex-col md:flex-row items-center justify-between min-h-[60vh] max-h-[80vh] py-12 md:py-20 px-4 md:px-12 bg-(--surface-base) gap-10 md:gap-16"
        aria-label="Product hero section"
        >
        {/* Left: Text and CTAs */}
        <motion.div
            className="flex-1 flex flex-col items-start justify-center max-w-2xl"
            initial={initial}
            whileInView={whileInView}
            transition={{ duration: 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h1 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">
            {data.headline}
            </h1>
            {data.subtext && (
            <p className="text-lg md:text-xl text-(--text-secondary) mb-6 max-w-xl">
                {data.subtext}
            </p>
            )}
            <div className="flex flex-wrap gap-4 mb-4">
            <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-(--accent-primary) text-(--text-on-accent) shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-primary) focus-visible:ring-offset-2 transition-colors"
            >
                {data.primaryCta.label}
            </a>
            {data.secondaryCta && (
                <a
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-(--surface-muted) text-(--text-primary) shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-primary) focus-visible:ring-offset-2 transition-colors"
                >
                {data.secondaryCta.label}
                </a>
            )}
            </div>
        </motion.div>
                {/*
                    Product visual: static, full-bleed, object-cover image.
                    - Static image is used for clarity, trust, and performance (no video, no animation, no layout thrashing).
                    - Minimal, one-time motion (opacity + scale ≤ 1.03) is allowed for premium feel, respecting prefers-reduced-motion.
                    - This approach is governance-compliant: no continuous animation, no scroll listeners, no third-party effects, and all data/content is externalized.
                */}
                <motion.div
                    className="flex-1 flex items-center justify-center w-full max-w-xl"
                    initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.32, ease: "easeOut", delay: 0.08 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-(--surface-border) bg-(--surface-card)">
                        <Image
                            src={data.visual.src}
                            alt={data.visual.alt}
                            fill
                            className="object-cover w-full h-full"
                            priority
                            sizes="(max-width: 768px) 100vw, 640px"
                        />
                    </div>
                </motion.div>
        </section>
    </Container>
  );
}

