import type { InstitutionalVersion2Data } from "@/types/homeInstitutionalV2";

export const homeInstitutionalV2: InstitutionalVersion2Data = {
  hero: {
    eyebrow: "Institutional Platform Authority",
    title: "Unified Wealth Operations for Trust Banks and Institutional Managers",
    description:
      "Fi-Tek is a mature institutional platform that brings trading, trust accounting, alternatives administration, reconciliation, regulatory reporting, and client servicing into one controlled operating environment.",
    backgroundImageSrc: "/media/hero/poster/hero-background.webp",
    primaryCtaLabel: "Schedule Institutional Review",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "View Platform Approach",
    secondaryCtaHref: "/approach",
  },
  pillars: {
    heading: "Built Around Core Trust Accounting Strength",
    intro:
      "The platform is anchored in sophisticated trust accounting and complex legal structures, then extended across the full institutional wealth lifecycle.",
    pillars: [
      {
        title: "Advanced Trust Accounting",
        description:
          "Support complex entity and fiduciary structures with deterministic accounting logic and cross-entity integrity.",
      },
      {
        title: "Institutional Lifecycle Coverage",
        description:
          "Operate trading, accounting, alternatives, settlement, reporting, and servicing from one cohesive platform surface.",
      },
      {
        title: "Enterprise Configuration",
        description:
          "Configure workflows for institutional structures, jurisdictional demands, and policy frameworks at scale.",
      },
      {
        title: "Governance by Design",
        description:
          "Embed auditability, operational oversight, and risk controls directly into workflow execution and exception handling.",
      },
    ],
  },
  lifecycle: {
    heading: "Operational Flow Across One Institutional Environment",
    intro:
      "Explore how each operating function connects through a single control and data layer. This reduces vendor sprawl, handoff friction, and reporting inconsistency.",
    centerLabel: "Unified Data and Control Core",
    steps: [
      {
        id: "trading",
        label: "Trading & Order Lifecycle",
        detail: "Governed order orchestration from instruction through allocation and execution control.",
        imageSrc: "/media/solutions/wealth-management.png",
      },
      {
        id: "accounting",
        label: "Portfolio & Trust Accounting",
        detail: "Deterministic trust and portfolio accounting across multi-entity institutional structures.",
        imageSrc: "/media/solutions/Investor-accounting.png",
      },
      {
        id: "alternatives",
        label: "Alternatives Administration",
        detail: "Controlled administration for alternative assets with structure-aware servicing paths.",
        imageSrc: "/media/kpi/alt-assets.webp",
      },
      {
        id: "reconciliation",
        label: "Reconciliation & Settlement",
        detail: "Repeatable control checkpoints that improve break resolution and post-trade confidence.",
        imageSrc: "/media/solutions/OpsSourcing.jpg",
      },
      {
        id: "regulatory",
        label: "Reporting & Regulatory Output",
        detail: "Consistent client, internal, and regulatory output from traceable data lineage.",
        imageSrc: "/media/illustrations/wealth-management1.png",
      },
      {
        id: "client",
        label: "Client Engagement",
        detail: "Client servicing connected to live operational truth instead of disconnected systems.",
        imageSrc: "/media/solutions/family-office.png",
      },
    ],
  },
  governance: {
    heading: "Governance, Compliance, and Operational Control",
    intro:
      "Institutional teams need control at scale. Fi-Tek aligns execution, oversight, and risk management within one operational fabric.",
    panelImageSrc: "/media/solutions/cloud-services.png",
    items: [
      {
        title: "Auditability and Traceability",
        description: "Track actions, approvals, and output lineage from source event to final report artifacts.",
      },
      {
        title: "Policy-Aligned Workflow Controls",
        description: "Apply supervisory checkpoints, approval paths, and structured exceptions across teams.",
      },
      {
        title: "Risk Mitigation Through Cohesion",
        description: "Reduce operational risk introduced by fragmented vendor stacks and duplicate controls.",
      },
      {
        title: "Institutional Oversight Visibility",
        description: "Provide leadership and control functions with transparent process and servicing visibility.",
      },
      {
        title: "Scale Without Control Drift",
        description: "Expand entities, teams, and service models while preserving governance consistency.",
      },
      {
        title: "Resilient Operating Continuity",
        description: "Maintain stability through deterministic processing and exception-aware operating design.",
      },
    ],
  },
  stability: {
    heading: "Mature Platform, Proven Institutional Longevity",
    intro:
      "This is not a new fintech entrant. Fi-Tek has matured through years of institutional deployment across regulated wealth operations.",
    spotlightImageSrc: "/media/hero/poster/hero-background1.png",
    markers: [
      "Long-standing trust bank deployments",
      "Institutional-grade operating model maturity",
      "Regulatory rigor across reporting and oversight",
      "Unified architecture that minimizes operational friction",
    ],
    metrics: [
      { value: "$1.3T+", label: "Assets Supported" },
      { value: "450+", label: "Institutions and Advisory Organizations" },
      { value: "80+", label: "Markets Supported" },
    ],
  },
  finalCta: {
    heading: "Evaluate Your Institutional Platform Readiness",
    description:
      "Run a structured assessment of your current stack across governance, workflow cohesion, reporting controls, and operational risk.",
    primaryCtaLabel: "Start Institutional Assessment",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Review Institutional Blueprint",
    secondaryCtaHref: "/clients/global-private-banks",
  },
};
