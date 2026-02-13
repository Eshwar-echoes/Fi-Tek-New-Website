/**
 * ProductHeroSection (Enterprise SaaS Product Hero)
 *
 * - Full-bleed background image (object-cover), dark overlay for text contrast.
 * - All content (eyebrow, headline, subtext, actions, visual) is passed via props and comes from the content folder only.
 * - No hardcoded copy, images, or links. No business logic.
 * - Static image is used for trust, clarity, and performance (no video, no animation, no layout thrashing).
 * - Minimal, one-time motion (opacity + translateY ≤ 16px) is allowed for the text block, respecting prefers-reduced-motion.
 * - No animation on the background image. No scroll listeners. No third-party libraries.
 * - This section is reusable for all product pages and does not violate performance or security governance.
 */

'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ProductHeroSectionData } from '@/types/product-hero-section';
import { Button } from '../ui/button';

export function ProductHeroSection({ data }: { readonly data: ProductHeroSectionData }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const initial = prefersReducedMotion ? undefined : { opacity: 0, y: 16 };
  const whileInView = prefersReducedMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section
      className="relative flex items-center min-h-[80vh] w-full overflow-hidden bg-black"
      aria-label="Product hero section"
    >
      {/* Full-bleed background image */}
      <img
        src={data.visual.src}
        alt={data.visual.alt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        aria-hidden="true"
        draggable="false"
      />
      {/* Dark overlay for text contrast */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 'var(--hero-overlay-opacity, 0.56)' }}
        aria-hidden="true"
      />
      {/* Content block (left-aligned) */}
      <motion.div
        className="relative z-10 flex flex-col items-start max-w-2xl px-6 py-16 md:px-16"
        initial={initial}
        whileInView={whileInView}
        transition={{ duration: 0.32, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {data.eyebrow && (
          <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-(--accent-primary)">
            {data.eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {data.headline}
        </h1>
        {data.subtext && (
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            {data.subtext}
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          <Button asChild intent="primary">
            <a href={data.actions.primary.href}>{data.actions.primary.label}</a>
          </Button>
          {data.actions.secondary && (
            <Button asChild intent="secondary">
              <a href={data.actions.secondary.href}>{data.actions.secondary.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}

