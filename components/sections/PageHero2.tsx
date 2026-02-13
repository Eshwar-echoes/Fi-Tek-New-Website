/**
 * PageHero Section (for internal pages)
 *
 * Why this exists separately from Landing Hero:
 * - Internal pages (Product, Team, About, etc.) require a distinct, calm, and premium hero that orients users without marketing theatrics.
 * - This component is strictly content-driven and reusable, with no business logic or hardcoded copy.
 * - It is not dependent on the Landing Hero and is safe for SSR and all enterprise governance requirements.
 *
 * Motion (if enabled) is minimal and safe:
 * - Only a single reveal animation (opacity + translateY ≤ 16px) is used, triggered whileInView, once: true.
 * - Duration and easing are strictly governed, and prefers-reduced-motion is respected.
 * - No scroll listeners, no continuous or background animation, no hover effects.
 *
 * Performance & Governance:
 * - No video, no parallax, no layout-thrashing, no global side effects.
 * - Only static images or gradients/illustrations as backgrounds.
 * - All text and backgrounds are accessible and WCAG AA compliant.
 * - No third-party libraries beyond approved motion (Framer Motion, sectionReveal).
 */


"use client";
import { motion, useReducedMotion } from "framer-motion";

export type PageHeroData = {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: {
    src: string;
    alt: string;
  };
};

export function PageHero({ data }: { readonly data: PageHeroData }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  // Only pass animation props if not reduced motion
  const initial = prefersReducedMotion ? undefined : { opacity: 0, y: 16 };
  const whileInView = prefersReducedMotion ? undefined : { opacity: 1, y: 0 };
  return (
    <section
      className="relative flex items-center min-h-[40vh] max-h-[60vh] py-16 md:py-24 bg-(--surface-base) overflow-hidden"
      aria-label="Page hero section"
    >
      {/* Background image or gradient */}
      {data.backgroundImage && (
        <img
          src={data.backgroundImage.src}
          alt={data.backgroundImage.alt || ""}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center" }}
          aria-hidden={!data.backgroundImage.alt}
        />
      )}
      {/* Overlay for contrast if background image present */}
      {data.backgroundImage && (
        <div className="absolute inset-0 bg-(--surface-black)/40 z-10" aria-hidden />
      )}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {data.eyebrow && (
            <span className="block text-sm font-semibold uppercase tracking-widest text-(--accent-primary) mb-2">
              {data.eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">
            {data.title}
          </h1>
          {data.description && (
            <p className="text-lg text-(--text-secondary) max-w-2xl">
              {data.description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

