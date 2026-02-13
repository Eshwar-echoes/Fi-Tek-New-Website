"use client";

import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import type { FinancialSectionContent } from "@/content/client/fitek/technology/technology";

export function FinancialSection({
  data,
}: {
  data: FinancialSectionContent;
}) {
  return (
    <section className="py-24 bg-(--surface-base)">
      <Container>
        <SectionReveal>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-(--text-primary) mb-12">
            {data.heading}
          </h2>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {data.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-(--border-subtle) p-8 bg-(--surface-muted) flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-(--text-primary)">
                    {card.title}
                  </h3>

                  <p className="text-(--text-secondary) max-w-lg">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={card.ctaHref}
                    className="inline-flex items-center gap-2 text-(--brand-primary) font-medium hover:underline"
                  >
                    {card.ctaLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
