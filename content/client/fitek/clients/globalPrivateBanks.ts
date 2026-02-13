import type { HeroContent } from "@/types/SubHeroSection";
import type { FeatureCardSectionData } from "@/types/feature-card";
import type { IdeaHighlightContent } from "@/types/ideaHighlight";
import type { ProductCTASectionData } from "@/components/sections/ProductCTASection";
import type { CapabilitiesGridContent } from "@/types/capabilitiesGrid";
import type { PerformanceMeasurementContent } from "@/types/performanceMeasurement";
import type { GlobalTrustContent } from "@/types/GoblaTrust";
import type { WhyFiTekContent } from "@/types/whyFitek";


export interface ClientsGlobalPrivateBanks {
  hero: HeroContent;
  featureCards: FeatureCardSectionData;
  ideaHighlight: IdeaHighlightContent;
  cta: ProductCTASectionData;
  capabilitiesGrid: CapabilitiesGridContent;
  performanceMeasurement: PerformanceMeasurementContent;
  globalTrust: GlobalTrustContent;
  whyFiTek: WhyFiTekContent;
}

export const GlobalPrivateBanks: ClientsGlobalPrivateBanks = {
  hero: {
    title: "Solutions for Global Private Banks",
  subtitle:
    "Empowering private banks with an integrated wealth management platform designed to support complex investment operations, global clients, and evolving regulatory requirements.",
  background: {
    type: "image",
    src: "/media/1.png",
    alt: "Solutions for Global Private Banks",
  },
  cta: {
    label: "Request a Demo",
    href: "/contact",
  },
  },
  featureCards: {
    title: "The Modern Private Banking Landscape",
  subtitle:
    "Private banks operate in an increasingly complex environment shaped by regulation, client expectations, and global scale.",
  items: [
    {
      id: "regulatory-complexity",
      title: "Regulatory Complexity",
      description:
        "Navigate evolving regulatory frameworks while maintaining transparency, control, and compliance across jurisdictions.",
      icon: "integration",
    },
    {
      id: "fragmented-systems",
      title: "Fragmented Systems",
      description:
        "Disparate front, middle, and back office systems limit visibility, efficiency, and operational agility.",
      icon: "accuracy",
    },
    {
      id: "rising-client-expectations",
      title: "Rising Client Expectations",
      description:
        "High-net-worth clients demand accurate reporting, real-time insights, and personalized portfolio experiences.",
      icon: "flexibility-animated",
    },
  ],
  },
  ideaHighlight: {
    title: "Built for the Complexity of Private Banking",
    subtitle: [
      "Technology is a key differentiator in today’s wealth management landscape. Fi-Tek partners with leading financial institutions to deliver a comprehensive, web-based wealth management platform.",
      "Our solution is designed to handle the unique challenges of global private banks, providing seamless integration, enterprise accuracy, and flexible architecture to support complex investment operations at scale.",
    ],

    image: {
      src: "/media/1.png",
      alt: "Platform dashboard preview",
    },

    points: [
      {
        id: "trusted-institutions",
        title: "Institution-Grade Trust",
        description:
          "Used by global private banking leaders.",
      },
      {
        id: "total-visibility",
        title: "One Platform. Total Visibility.",
        description:
          "Unified tools across the entire wealth lifecycle.",
      },
      {
        id: "operational-efficiency",
        title: "Operational Efficiency at Scale",
        description:
          "Seamless integration across all banking functions.",
      },
      {
        id: "growth-complexity",
        title: "Built for Growth & Complexity",
        description:
          "Engineered for enterprise demands and global expansion.",
      },
    ],
  },
  performanceMeasurement: {
    eyebrow: "Deep Dive",
    title: "Performance Measurement",
    description: [
      "Fi-Tek enables private banks to calculate time-weighted rates of return across monthly, quarterly, semi-annual, and annual periods with accuracy and consistency.",
      "Performance insights are delivered through intuitive dashboards designed to support internal analysis, regulatory reporting, and client communication."
    ],
    benefits: [
      "Accurate, auditable calculations",
      "Transparent reporting for clients",
      "Consistent insights across portfolios"
    ],
    dashboardImage: "/media/2.jpg",
    },
  globalTrust: {
    heading: "Trusted by Financial Institutions Worldwide",
    description:
      "A wide spectrum of financial institutions across the globe relies on Fi-Tek to support complex wealth management operations and deliver measurable value to their clients.",
    metrics: [
      {
        value: "1T+",
        label: "Assets Supported",
      },
      {
        value: "Global",
        label: "Client Base",
      },
      {
        value: "Multi-Region",
        label: "Deployments",
      },
    ],
  },
  whyFiTek: {
    heading: "Why Private Banks Choose Fi-Tek",
    pillars: [
      {
        title: "Enterprise-Grade Architecture",
        description:
          "Designed to support large-scale, mission-critical wealth management operations with reliability and performance at its core.",
        icon: "mission", // Icon class or URL
      },
      {
        title: "Regulatory-Ready",
        description:
          "Built to meet global compliance, auditability, and transparency requirements across jurisdictions.",
        icon: "flexibility", // Icon class or URL
      },
      {
        title: "Scalable & Secure",
        description:
          "Supports growth across regions, asset classes, and client segments with robust security controls.",
        icon: "accuracy", // Icon class or URL
      },
      {
        title: "Deep Financial Expertise",
        description:
          "Backed by decades of domain knowledge in wealth, investment, and portfolio management.",
        icon: "flexibility-animated", // Icon class or URL
      },
    ],
  },
  capabilitiesGrid: {
    title: "Core Capabilities for Private Banks",
    subtitle: [
      "Purpose-built infrastructure for modern wealth and investment platforms.",
      "Modular services that scale from startups to enterprise institutions.",
    ],
    items: [
      {
        id: "wealth-planning",
        title: "Wealth Planning",
        description: "Support sophisticated planning strategies aligned with client objectives and long-term investment goals.",
        icon: "integration",
      },
      {
        id: "portfolio-management",
        title: "Portfolio Management & Rebalancing",
        description: "Manage complex portfolios with precision while maintaining alignment with defined strategies.",
        icon: "accuracy",
      },
      {
        id: "portfolio-accounting",
        title: "Portfolio Accounting",
        description: "Ensure accurate accounting, reconciliation, and reporting across asset classes and currencies.",
        icon: "flexibility",
      },
      {
        id: "customer-management",
        title: "Customer Management",
        description: "Maintain a centralized view of client relationships, accounts, and investment activity.",
        icon: "flexibility-animated",
      },
      {
        id: "business-operations-management",
        title: "Business Operations Management",
        description: "Streamline operational workflows while supporting regulatory and organizational requirements.",
        icon: "flexibility-animated",
      },
      {
        id: "performance-measurement",
        title: "Performance Measurement",
        description: "Deliver transparent, time-weighted performance analysis across reporting periods.",
        icon: "flexibility-animated",
      },
    ],
  },
  cta: {
    headline: "Partner with Fi-Tek to Modernize Private Banking",
    description: "Discover how Fi-Tek can support your institution’s wealth management operations with confidence and scale.",
    cta: { label: "Request a Demo", href: "/contact" },
  },
};

