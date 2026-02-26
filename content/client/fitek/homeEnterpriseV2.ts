import type { EnterpriseHomepageData } from "@/types/homeEnterprise";

export const homeEnterpriseV2: EnterpriseHomepageData = {
  hero: {
    eyebrow: "Unified Institutional Wealth Operations Platform",
    title: "Purpose-Built for Trust Banks and Institutional Wealth Managers",
    description:
      "Fi-Tek unifies trading, trust accounting, alternatives administration, reconciliation, reporting, and client servicing inside one governed platform built for institutional scale, control, and regulatory rigor.",
    primaryCtaLabel: "Schedule an Institutional Platform Review",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore Institutional Architecture",
    secondaryCtaHref: "/approach",
    backgroundMedia: {
      type: "image",
      src: "/media/hero/poster/hero-background.webp",
    },
  },
  segmentSplit: {
    heading: "Institutional Platform Pathways",
    intro:
      "Fi-Tek is configured for complex trust and institutional operating models while maintaining a unified control and data framework across the platform.",
    pathways: [
      {
        id: "institutional",
        title: "Trust Banks and Institutional Wealth",
        subtitle: "Primary Institutional Pathway",
        description:
          "Support sophisticated trust accounting, multi-entity structures, and cross-desk operating controls with an enterprise platform designed for regulated institutional environments.",
        highlights: [
          "Complex trust and legal entity support",
          "Governed operations across trading, accounting, and reporting",
          "Audit-ready control points for institutional oversight",
        ],
        ctaLabel: "Review Institutional Blueprint",
        ctaHref: "/clients/global-private-banks",
      },
      {
        id: "ria",
        title: "Advisory Businesses",
        subtitle: "Secondary Advisory Pathway",
        description:
          "Extend the same core platform into advisor operating models while preserving governance, consistency, and service continuity.",
        highlights: [
          "Shared operational core across advisory teams",
          "Consistent controls and reporting discipline",
          "Scalable servicing without fragmented tooling",
        ],
        ctaLabel: "Review Advisory Blueprint",
        ctaHref: "/technology/global-wealthe",
      },
    ],
  },
  workflow: {
    heading: "Institutional Wealth Lifecycle in One Environment",
    intro:
      "Each function runs within a cohesive institutional platform to reduce vendor sprawl and eliminate operational friction between teams.",
    items: [
      {
        id: "trade-rebalance",
        title: "Trading and Order Lifecycle",
        description:
          "Coordinate order generation, routing, allocation, and downstream processing through governed institutional workflows.",
      },
      {
        id: "account-management",
        title: "Portfolio and Trust Accounting",
        description:
          "Maintain trust, portfolio, and account states with deterministic accounting logic across complex ownership structures.",
      },
      {
        id: "alternatives",
        title: "Alternatives Administration",
        description:
          "Administer alternative investments under controlled workflows designed for intricate structures and oversight requirements.",
      },
      {
        id: "performance-tracking",
        title: "Reconciliation and Settlement",
        description:
          "Strengthen operational integrity with repeatable reconciliation controls and settlement visibility across desks and entities.",
      },
      {
        id: "reporting",
        title: "Reporting and Regulatory Output",
        description:
          "Generate governed internal, client, and regulatory outputs from a consistent data lineage and control framework.",
      },
      {
        id: "client-engagement",
        title: "Client Engagement",
        description:
          "Deliver client servicing from the same platform context that powers institutional operations and oversight.",
      },
    ],
  },
  platformFlow: {
    heading: "One Institutional Platform Across the Operating Flow",
    intro:
      "Trading, accounting, reporting, and client servicing run in one controlled environment to reduce handoffs, minimize exceptions, and sustain governance at scale.",
    steps: [
      {
        id: "trading-order-lifecycle",
        title: "Trading & Order Lifecycle",
        description: "Governed order flow from instruction to allocation and execution controls.",
      },
      {
        id: "portfolio-trust-accounting",
        title: "Portfolio & Trust Accounting",
        description: "Deterministic accounting across entities, trusts, and complex ownership models.",
      },
      {
        id: "alternatives-administration",
        title: "Alternatives Administration",
        description: "Controlled administration and servicing for non-traditional assets.",
      },
      {
        id: "reconciliation-settlement",
        title: "Reconciliation & Settlement",
        description: "Operational checkpoints that reduce breaks and improve post-trade confidence.",
      },
      {
        id: "regulatory-output",
        title: "Reporting & Regulatory Output",
        description: "Consistent reporting generated from traceable data lineage and policy controls.",
      },
      {
        id: "client-servicing",
        title: "Client Engagement",
        description: "Institutional client servicing informed by live operational truth.",
      },
    ],
  },
  platformTransformation: {
    heading: "From Disconnected Systems to Institutional Platform Cohesion",
    intro:
      "Institutional operations require one governed environment, not a patchwork of disconnected vendor tools.",
    fragmentedLabel: "Fragmented Vendor Stack",
    fragmentedIntro:
      "Disconnected systems create duplicated controls, manual reconciliation, and inconsistent oversight across institutional workflows.",
    fragmentedModules: [
      "Trading",
      "Trust Accounting",
      "Alternatives",
      "Reconciliation",
      "Reporting",
      "Client Servicing",
    ],
    unifiedLabel: "Unified Institutional Platform",
    unifiedIntro:
      "Fi-Tek aligns trading, accounting, reporting, and servicing on one operational core with shared controls and governance.",
  },
  capabilities: {
    heading: "Enterprise Configuration for Institutional Structures",
    intro:
      "Adapt platform behavior to institutional legal structures, operating models, and regulatory frameworks without sacrificing control.",
    items: [
      {
        id: "institutional-governance",
        title: "Governance and Oversight Controls",
        description:
          "Embed approvals, escalation paths, and supervisory checkpoints directly in institutional workflows.",
      },
      {
        id: "auditability",
        title: "Auditability and Data Lineage",
        description:
          "Trace process actions and reporting outputs end-to-end for compliance, risk, and internal audit stakeholders.",
      },
      {
        id: "enterprise-configuration",
        title: "Enterprise Configuration at Scale",
        description:
          "Configure by entity, desk, service model, and jurisdiction while preserving a unified operating framework.",
      },
      {
        id: "compliance-alignment",
        title: "Compliance-Aligned Workflow Controls",
        description:
          "Operationalize policy requirements through enforceable workflow rules and structured exceptions.",
      },
      {
        id: "operational-resilience",
        title: "Operational Resilience",
        description:
          "Maintain continuity through deterministic processing, clear exception handling, and institutional-grade controls.",
      },
      {
        id: "platform-cohesion",
        title: "Platform Cohesion",
        description:
          "Reduce vendor sprawl by running institutional wealth operations inside one integrated environment.",
      },
    ],
  },
  proof: {
    heading: "Mature Platform. Institutional Longevity.",
    intro:
      "Fi-Tek reflects years of deployment across institutional wealth operations where governance, continuity, and control are non-negotiable.",
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
    heading: "Assess Institutional Readiness Across Your Current Platform Stack",
    description:
      "Run a structured review of governance, workflow continuity, reporting controls, and operational risk to define a unified institutional platform roadmap.",
    primaryCtaLabel: "Start Institutional Assessment",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Review Platform Approach",
    secondaryCtaHref: "/approach",
  },
};
