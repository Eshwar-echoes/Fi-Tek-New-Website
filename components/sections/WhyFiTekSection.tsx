"use client";

import { Container } from "@/components/layout/Container";
import type { WhyFiTekContent } from "@/types/whyFitek";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Icon } from "../icons/Icon";

export function WhyFiTekSection({
  data,
}: Readonly<{
  data: WhyFiTekContent;
}>) {
  return (
    <section className="py-28 bg-(--surface-muted)">
      <Container>
        <SectionReveal>
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-(--text-primary)">
            {data.heading}
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="
                group
                relative
                flex flex-col items-center text-center
                rounded-xl
                border border-(--border-subtle)
                bg-(--surface-base)
                p-8
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Icon Wrapper */}
              <div
                className="
                  mb-6
                  flex items-center justify-center
                  h-16 w-16
                  rounded-full
                  bg-(--surface-muted)
                  transition-all duration-300 ease-out
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Icon
                  name={pillar.icon}
                  size={32}
                  className="text-(--text-primary)"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-(--text-primary)">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-(--text-secondary)">
                {pillar.description}
              </p>

              {/* Subtle hover glow */}
              <span
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-xl
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                  bg-linear-to-br
                  from-transparent
                  via-transparent
                  to-(--accent-muted)
                "
              />
            </div>
          ))}
        </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
