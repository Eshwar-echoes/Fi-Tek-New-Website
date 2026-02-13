"use client";

import { Container } from "../layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import type { AssetComparisonContent } from "@/content/client/fitek/technology/technology";

export function AssetComparisonSection({
  data,
}: {
  data: AssetComparisonContent;
}) {
  return (
    <section className="py-32 bg-(--surface-base)">
      <Container>
        <SectionReveal>
          {/* SECTION HEADING */}
          <h2 className="mb-16 max-w-3xl text-4xl md:text-5xl font-semibold leading-tight text-(--text-primary)">
            {data.heading}
          </h2>

          {/* TWO-COLUMN LAYOUT */}
          <div className="grid gap-12 lg:grid-cols-2 items-stretch">
            {/* LEFT IMAGE CARD */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={data.image}
                alt=""
                className="h-[400px] w-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT CARD */}
            <div className="flex h-[400px] flex-col justify-between rounded-2xl bg-(--surface-muted) border border-(--border-subtle) p-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-(--text-primary)">
                  {data.card.title}
                </h3>

                <p className="text-(--text-secondary)">
                  {data.card.description}
                </p>

                <ul className="space-y-3 pt-2">
                  {data.card.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-(--text-secondary)"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-(--brand-primary)" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
