"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons/Icon";
import { SectionReveal } from "@/components/motion/SectionReveal";
import type { CapabilitiesGridContent } from "@/types/capabilitiesGrid";

interface Props {
  data: CapabilitiesGridContent;
}

export function CapabilitiesGridSection({ data }: Readonly<Props>) {
  return (
    <section
      className="
        py-28
        bg-linear-to-b
        from-(--surface-base)
        to-(--surface-muted)/40
      "
    >
      <Container>
        <SectionReveal>
          <div className="space-y-16">
            {/* Header */}
            <div className="max-w-3xl space-y-5">
              <h2 className="text-4xl md:text-5xl font-semibold text-(--text-primary)">
                {data.title}
              </h2>

              {data.subtitle && (
                <div className="space-y-3">
                  {data.subtitle.map((p, i) => (
                    <p key={i} className="text-lg text-(--text-secondary)">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="
                    group
                    relative
                    rounded-xl
                    border border-(--border-subtle)
                    bg-(--surface-base)
                    p-6
                    flex flex-col justify-between
                    min-h-35
                    transition-shadow duration-300
                    hover:shadow-lg
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      flex h-10 w-10 items-center justify-center
                      rounded-md
                      bg-(--surface-muted)
                      transition-all duration-300 ease-out
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon
                      name={item.icon}
                      size={20}
                      className="text-(--text-primary)"
                    />
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-(--text-primary)">
                      {item.title}
                    </h3>

                    <p className="text-sm text-(--text-secondary)">
                      {item.description}
                    </p>
                  </div>

                  {/* Accent underline */}
                  <span
                    className="
                      absolute bottom-0 left-0
                      h-0.5
                      w-0
                      bg-(--brand-primary)
                      transition-all duration-300 ease-out
                      group-hover:w-full
                    "
                  />

                  {/* Subtle glow overlay */}
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
                      to-(--brand-primary)/10
                    "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
