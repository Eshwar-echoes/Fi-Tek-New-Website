"use client";

import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Icon } from "@/components/icons/Icon";
import type { FeatureCardSectionData } from "@/types/feature-card";

interface Props {
  data: FeatureCardSectionData;
}

export function FeatureCardsSection({ data }: Readonly<Props>) {
  return (
    <SectionReveal>
      <section className="py-24 bg-(--surface-base)">
        <Container>
          <div className="space-y-20">

            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--text-primary)">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-lg text-(--text-secondary)">
                  {data.subtitle}
                </p>
              )}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-16">
              {data.items.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-start gap-6"
                >
                  {/* Icon */}
                  <div className="shrink-0 text-(--brand-black)">
                    <Icon
                      name={item.icon}
                      size={56}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-(--text-primary)">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-(--text-secondary)">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>
    </SectionReveal>
  );
}
