import type { EnterpriseHomepageData } from "@/types/homeEnterprise";

export const homeEnterprise: EnterpriseHomepageData = {
  hero: {
    eyebrow: "Unified Advisor Operating System",
    title: "Replace Fragmented Advisor Systems with One Operating Core",
    description:
      "Fi-Tek runs trading, account operations, alternatives, performance, reporting, and client delivery inside one controlled system so teams reduce handoffs, close books faster, and operate with audit-ready consistency.",
    primaryCtaLabel: "Schedule an Operating Model Review",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "See Workflow Architecture",
    secondaryCtaHref: "/approach",
    backgroundMedia: {
      type: "image",
      src: "/media/hero/poster/hero-background.webp",
    },
  },
  segmentSplit: {
    heading: "Platform Pathways by Operating Model",
    intro:
      "Different firms require different control models. Fi-Tek provides a unified system configured for each operating context.",
    pathways: [
      {
        id: "ria",
        title: "Independent RIAs",
        subtitle: "RIA Operating Pathway",
        description:
          "Run advisor workflows from trading through client reporting in one operating system built for lean teams, multi-entity structures, and service consistency.",
        highlights: [
          "Fewer manual handoffs across advisor workflows",
          "Consistent household, account, and portfolio context",
          "Operational controls without enterprise overhead",
        ],
        ctaLabel: "Review RIA Blueprint",
        ctaHref: "/technology/global-wealthe",
      },
      {
        id: "institutional",
        title: "Institutional Platforms",
        subtitle: "Institutional Operating Pathway",
        description:
          "Support trust, broker-dealer, and institutional wealth servicing with deterministic processing, cross-team controls, and audit-ready operational governance.",
        highlights: [
          "Deterministic processing at institutional volume",
          "Cross-desk control points and exception governance",
          "Scalable servicing for complex legal structures",
        ],
        ctaLabel: "Review Institutional Blueprint",
        ctaHref: "/clients/global-private-banks",
      },
    ],
  },
  workflow: {
    heading: "Advisor Workflows, Unified in One System",
    intro:
      "Each workflow runs on a shared operating core, so teams move from activity to activity without reconciliation gaps or duplicated controls.",
    items: [
      {
        id: "trade-rebalance",
        title: "Trade and Rebalance",
        description:
          "Execute model and tactical rebalancing with governed order pathways and consistent downstream state.",
      },
      {
        id: "account-management",
        title: "Manage Accounts",
        description:
          "Manage account lifecycle, cash movement, and servicing changes with one source of operational truth.",
      },
      {
        id: "alternatives",
        title: "Handle Alternatives",
        description:
          "Administer alternative holdings within controlled workflows built for complex ownership and reporting structures.",
      },
      {
        id: "performance-tracking",
        title: "Performance Tracking",
        description:
          "Produce repeatable performance outputs from governed data lineage and consistent calculation logic.",
      },
      {
        id: "reporting",
        title: "Reporting",
        description:
          "Generate client, operational, and oversight reporting from a common data model with controlled release cadence.",
      },
      {
        id: "client-engagement",
        title: "Client Engagement",
        description:
          "Deliver advisor and client interactions from the same platform context that powers core operations.",
      },
    ],
  },
  platformFlow: {
    heading: "One System. No Breaks Between Advisor Workflows.",
    intro:
      "All workflows operate on one shared data and control core, eliminating reconciliation gaps and preserving operational continuity from action to client delivery.",
    steps: [
      {
        id: "trade-rebalance",
        title: "Trade & Rebalance",
        description: "Governed order activity and rebalance execution context.",
      },
      {
        id: "account-management",
        title: "Account Management",
        description: "Lifecycle and servicing controls with shared account state.",
      },
      {
        id: "performance",
        title: "Performance",
        description: "Traceable measurement outputs from governed calculations.",
      },
      {
        id: "reporting",
        title: "Reporting",
        description: "Operational and client reporting from the same data spine.",
      },
      {
        id: "alternatives",
        title: "Alternatives",
        description: "Alternative asset servicing under one control framework.",
      },
      {
        id: "client-portal",
        title: "Client Portal",
        description: "Client-facing delivery connected to live operational truth.",
      },
    ],
  },
  platformTransformation: {
    heading: "From Fragmented Operations to One Unified Advisor Operating System",
    intro:
      "Advisory workflows should execute inside one controlled system, not across disconnected tools and duplicated controls.",
    fragmentedLabel: "Fragmented Systems",
    fragmentedIntro:
      "Multiple disconnected systems force teams to reconcile data, controls, and workflow states across separate environments.",
    fragmentedModules: [
      "Reporting",
      "Accounts",
      "Alternatives",
      "Client Portal",
      "Performance",
      "Trading & Rebalancing",
    ],
    unifiedLabel: "Unified System",
    unifiedIntro:
      "The same system surface governs each workflow mode with shared data context, controls, and validation states.",
  },
  capabilities: {
    heading: "Tailored Capabilities Inside One Operating System",
    intro:
      "Configure workflows for your firm structure without creating a patchwork stack of disconnected tools.",
    items: [
      {
        id: "operating-controls",
        title: "Governed Operating Controls",
        description:
          "Apply approvals, checkpoints, and exception policy directly in workflow execution paths.",
      },
      {
        id: "data-lineage",
        title: "Audit-Ready Data Lineage",
        description:
          "Track operational and reporting outputs back to source actions with explicit lineage.",
      },
      {
        id: "integration-layer",
        title: "Controlled System Interoperability",
        description:
          "Connect custodians, brokers, and internal systems without surrendering process control.",
      },
      {
        id: "workflow-configuration",
        title: "Policy-Aligned Workflow Configuration",
        description:
          "Adapt operating pathways by team, entity, and service model in one cohesive platform.",
      },
      {
        id: "institutional-reporting",
        title: "Institutional Reporting Controls",
        description:
          "Issue consistent reports across clients, operations, and governance stakeholders.",
      },
      {
        id: "service-resilience",
        title: "Resilient Operational Continuity",
        description:
          "Sustain continuity with deterministic workflows and structured exception handling.",
      },
    ],
  },
  proof: {
    heading: "Operating at Institutional Scale",
    intro:
      "Fi-Tek supports advisory and institutional firms that require control, continuity, and scale in daily operations.",
    metrics: [
      {
        value: "$1.3T+",
        label: "Assets Supported",
      },
      {
        value: "450+",
        label: "Institutions and Advisory Organizations",
      },
      {
        value: "80+",
        label: "Markets Supported",
      },
    ],
  },
  finalCta: {
    heading: "Evaluate Fi-Tek Against Your Current Operating Stack",
    description:
      "Run a structured assessment of your current systems, controls, and workflow handoffs to define a unified operating model roadmap.",
    primaryCtaLabel: "Start Platform Assessment",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Download Operating Blueprint",
    secondaryCtaHref: "/approach",
  },
};
