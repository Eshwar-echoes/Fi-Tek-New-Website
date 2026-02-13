import type { AboutInfrastructureSectionData } from "@/types/about";

export const aboutInfrastructure: AboutInfrastructureSectionData = {
  intro: {
    heading: "About Fi-Tek",
    subheading: "Architecting institutional-grade financial infrastructure.",
    description:
      "Fi-Tek builds unified intelligence systems that support complex wealth and alternative operations across trading, accounting, and reporting.",
  },
  split: {
    heading: "Platform Operating Model",
    blocks: [
      {
        id: "operating-philosophy",
        title: "Operating Philosophy",
        description:
          "Every capability is designed around controlled workflows, explicit data lineage, and predictable handoffs across institutional teams.",
      },
      {
        id: "infrastructure-discipline",
        title: "Infrastructure Discipline",
        description:
          "Processing layers are built for deterministic execution, auditability, and operational continuity under high-volume market conditions.",
      },
      {
        id: "scalable-platform-architecture",
        title: "Scalable Platform Architecture",
        description:
          "A modular architecture supports expansion across products, entities, and jurisdictions without disrupting core operating controls.",
      },
    ],
    visual: {
      ariaLabel: "Abstract infrastructure grid",
    },
  },
  strengths: {
    heading: "Institutional Strength",
    items: [
      {
        id: "deterministic-processing",
        title: "Deterministic Processing",
        description:
          "Rule-governed workflows ensure repeatable outputs across the full investment lifecycle.",
      },
      {
        id: "embedded-compliance",
        title: "Embedded Compliance",
        description:
          "Control points are integrated directly into operating flows to support oversight and regulatory alignment.",
      },
      {
        id: "operational-resilience",
        title: "Operational Resilience",
        description:
          "System design prioritizes continuity, exception visibility, and reliable performance in complex environments.",
      },
    ],
  },
};
