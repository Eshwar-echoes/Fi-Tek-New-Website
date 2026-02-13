"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import type { IdeaHighlightContent } from "@/types/ideaHighlight";

interface Props {
  data: IdeaHighlightContent;
}

/*
  IdeaHighlightSection

  - Left: sticky visual
  - Right: scrolling content
  - Fully responsive
  - Minimal motion only (opacity + translateY)
  - Content driven (no hardcoded text)
*/

export function IdeaHighlightSection({ data }: Readonly<Props>) {
  return (
    <section className="py-28 bg-(--surface-muted)">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT (Sticky Image) ================= */}
          <div className="lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden border border-(--border-subtle)">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ================= RIGHT (Content) ================= */}
          <div className="space-y-14">

            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-(--text-primary)">
                {data.title}
              </h2>

              {data.subtitle && (
                <div className="space-y-4 max-w-xl">
                  {data.subtitle.map((para, i) => (
                    <p
                      key={i}
                      className="text-lg text-(--text-secondary)"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Points */}
            <ul className="space-y-12">
              {data.points.map((point, i) => (
                <motion.li
                  key={point.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-semibold text-(--text-primary)">
                    {point.title}
                  </h3>

                  {point.description && (
                    <p className="text-(--text-secondary) leading-relaxed">
                      {point.description}
                    </p>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
