"use client";

import { Container } from "../layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import type { CardsWithIconsData } from "@/types/cardWithIcon";
import { Icon } from "@/components/icons/Icon";

interface Props {
  data: CardsWithIconsData;
}

export function CardsWithIconsSection({
  data,
}: Readonly<Props>) {
  return (
    <SectionReveal>
      <section className="py-24 bg-(--surface-muted)">
        <Container>
          <div className="space-y-16">
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-(--text-black)">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-lg text-(--text-secondary)">
                  {data.subtitle}
                </p>
              )}
            </div>

            {/* Icon Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.items.map((item) => (
                <div
                key={item.id}
                className="flex items-start gap-4"
                >
                {/* Icon */}
                <Icon
                    name={item.icon}
                    size={item.iconSize}
                    className="mt-1 shrink-0 text-(--text-black)"
                />

                {/* Text */}
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-(--text-black)">
                    {item.title}
                    </h3>
                    <p className="text-base text-(--text-secondary) leading-relaxed">
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
