"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { inViewViewport } from "@/components/motion/landing.motion";
import type { WorkflowItem, WorkflowSectionData } from "@/types/homeEnterprise";

interface AdvisorWorkflowSectionProps {
  data: WorkflowSectionData;
}

const iconPaths: Record<WorkflowItem["id"], string> = {
  "trade-rebalance":
    "M3 7h18M3 12h18M3 17h12M15 17l2.5 2.5L21 16M20 16v4h-4",
  "account-management":
    "M4 6h16v12H4zM8 10h8M8 14h5",
  alternatives:
    "M4 17l4-6 3 4 5-8 4 10M4 7h6M14 7h6",
  "performance-tracking":
    "M4 18h16M6 14l3-3 3 2 6-6",
  reporting:
    "M6 3h9l3 3v15H6zM15 3v3h3M9 12h6M9 16h6",
  "client-engagement":
    "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a5 5 0 0 1 8-4m10 4a5 5 0 0 0-8-4",
};

function WorkflowIcon({ id }: Readonly<{ id: WorkflowItem["id"] }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-(--brand-primary)"
      aria-hidden
    >
      <path
        d={iconPaths[id]}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AdvisorWorkflowSection({
  data,
}: Readonly<AdvisorWorkflowSectionProps>) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--leroux-workflow-start)_0%,var(--leroux-workflow-end)_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-(--text-primary) md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-(--text-secondary)">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ duration: 0.32, delay: index * 0.04, ease: "easeOut" }}
              className="rounded-sm border border-(--leroux-card-border) bg-(--leroux-card-bg) p-6 shadow-(--leroux-card-shadow)"
            >
              <WorkflowIcon id={item.id} />
              <h3 className="mt-4 text-3xl leading-tight text-(--text-primary)">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-(--text-secondary)">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
