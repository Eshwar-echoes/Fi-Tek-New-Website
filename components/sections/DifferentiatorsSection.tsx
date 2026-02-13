"use client";

import { Container } from "../layout/Container";

// Define or import the type from a shared types file if available
export interface Differentiator {
  id: string;
  title: string;
  description: string;
}

export interface DifferentiatorsData {
  title: string;
  subtitle?: string;
  items: Differentiator[];
}
import { SectionReveal } from "@/components/motion/SectionReveal";

interface DifferentiatorsSectionProps {
  data: DifferentiatorsData;
}

export function DifferentiatorsSection({
  data,
}: Readonly<DifferentiatorsSectionProps>) {
  return (
    <SectionReveal>
      <section className="py-24 bg-(--surface-base)">
        <Container>
          <div className="space-y-16">
            {/* Section Header */}
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-(--text-black)">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-lg text-(--text-secondary) leading-relaxed">
                  {data.subtitle}
                </p>
              )}
            </div>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {data.items.map((item) => (
                <div key={item.id} className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-(--text-black)">
                    {item.title}
                  </h3>
                  <p className="text-base text-(--text-secondary) leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SectionReveal>
  );
}
