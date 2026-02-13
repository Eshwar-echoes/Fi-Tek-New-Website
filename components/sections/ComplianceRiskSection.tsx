"use client";

import { Container } from "../layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import type {
  ComplianceRiskContent,
} from "@/content/client/fitek/technology/technology";

export function ComplianceRiskSection({
  data,
}: {
  data: ComplianceRiskContent;
}) {
  return (
    <section className="py-24 bg-(--surface-base)">
      <Container>
        <SectionReveal>
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-(--text-primary)">
              {data.heading}
            </h2>

            <p className="text-lg text-(--text-secondary)">
              {data.subheading}
            </p>
          </div>

          {/* Cards (2 only, centered) */}
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
            {data.cards.map((card) => (
              <div
                key={card.title}
                className="relative rounded-2xl bg-(--surface-muted) border border-(--border-subtle) p-10 text-center"
              >
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-(--overlay-blue) text-white text-2xl">
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-(--text-primary) mb-3">
                  {card.title}
                </h3>

                <p className="text-(--text-secondary) leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
