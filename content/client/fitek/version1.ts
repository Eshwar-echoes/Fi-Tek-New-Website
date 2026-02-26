export interface HeroMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
}

export interface HeroData {
  eyebrow?: string;
  title: string[];
  description: string;
  actions: {
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
  microcopy?: string;
  media?: HeroMedia;
}

export const hero: HeroData = {
  eyebrow: undefined,
  title: ["Unified Wealth Operations.","Built for Institutional Scale."],
  description:
    "Trading, accounting, and reporting unified on a single, intelligence-ready architecture—designed to support complex wealth and alternatives operations.",
  actions: {
    primary: "Request a Demo",
    primaryHref: "/work",
    secondary: "Explore the Platform",
    secondaryHref: "/contact",
  },
  microcopy: undefined,
  media: {
    type: "video",
    src: "undefined",
    poster: "/media/hero/poster/hero-background.webp",
  },
};

export interface ProofMetric {
  prefix?: string;        // "$", ">", etc
  value: number;      
  suffix: string;         // "T+", "+", etc
  label: string;
  backgroundImage: string;
}


export interface ProofData {
  metrics: ProofMetric[];
}

export const proof: ProofData = {
  metrics: [
    {
      prefix: "$",
      value: 1,
      suffix: "Trillion+",
      label: "AUA Across all Technology Platforms",
      backgroundImage: "/media/kpi/aua.png",
    },
    {
      value: 1500,
      suffix: "+",
      label: "Alternative Assets, used by Hedge Funds, Banks, and PE Firms.",
      backgroundImage: "/media/kpi/alt-assets.png",
    },
   /* {
      value: 80,
      suffix: "+",
      label: "Markets",
      backgroundImage: "/media/kpi/clients.png",
    }, */
    {
      value: 400,
      suffix: "+",
      label: "Broker Connections",
      backgroundImage: "/media/kpi/clients.png",
    },
  ],
};


export type PlatformDomainId = 
  | "trading"
  | "accounting"
  | "settlement"
  | "reporting"
  | "integration"
  | "automation"
  | "familyoffice"
  | "data";

export interface PlatformDomain {
  id: PlatformDomainId;
  title: string;
  points: string[];
}

export interface PlatformCoverageData {
  title: string;
  intro: string;
  domains: PlatformDomain[];
}

export const platformCoverage: PlatformCoverageData = {
  title: "One Operating Core. Multiple Use Cases.",
  intro: "Fi-Tek supports the full operational lifecycle—from trade capture through reporting—within a unified, institutional-grade platform.",
  domains: [
    {
      id: "trading",
      title: "Trading & Order Lifecycle Management",
      points: [
        "Order capture and routing",
        "Execution workflows",
        "Pre-trade controls",
        "Lifecycle monitoring",
      ],
    },
    {
      id: "accounting",
      title: "Portfolio & Accounting Processing",
      points: [
        "Multi-asset accounting",
        "Tax-lot tracking",
        "Corporate actions",
        "Daily NAV and P&L",
      ],
    },
    {
      id: "settlement",
      title: "Global Settlement Workflows",
      points: [
        "Multi-currency support",
        "Custodian reconciliation",
        "Exception management",
      ],
    },
    {
      id: "reporting",
      title: "Reporting & Data Distribution",
      points: [
        "Client statements",
        "Operational reporting",
        "Regulatory outputs",
        "Secure exports",
      ],
    },
    {
      id: "integration",
      title: "External Ecosystem Integrations",
      points: [
        "Broker connectivity",
        "Custodian integrations",
        "Third-party systems",
        "Open APIs",
      ],
    },
    {
      id: "automation",
      title: "Intelligent Automation",
      points: [
        "Configurable exception workflows",
        "Deterministic reconciliation",
        "Human-governed automation",
      ],
    },
    {
      id: "familyoffice",
      title: "Family Office & Alternatives",
      points: [
        "Alternative asset servicing",
        "Partnership accounting",
        "Consolidated reporting",
      ],
    },
    {
    id: "data",
    title: "Data & Intelligence",
    points: [
      "Structured data foundations",
      "Deterministic processing",
      "Analytics and insights",
      "Intelligence-ready architecture",
    ],
  }
  ],
};

export interface Solution {
  id: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}

export interface SolutionsData {
  title: string;
  intro: string;
  solutions: Solution[];
}

export const solutions: SolutionsData = {
  title: "Our Solutions",
  intro: "Integrated business platforms built on our core technology stack. Each solution combines the platform capabilities you've seen with industry-specific workflows and compliance frameworks.",
  solutions: [
    {
      id: "wealth-management",
      title: "Wealth Management",
      description: "End-to-end portfolio management, advisory, and client engagement platform for wealth advisors and asset managers.",
      href: "/work#wealth-management",
      linkLabel: "Learn more",
    },
    {
      id: "investor-accounting",
      title: "Investor Accounting",
      description: "Global trust accounting, securities processing, and multi-custodian reconciliation for institutional operations.",
      href: "/work#investor-accounting",
      linkLabel: "Learn more",
    },
    {
      id: "family-office",
      title: "Global Family Office",
      description: "Consolidated wealth management and reporting platform for single and multi-family offices.",
      href: "/work#family-office",
      linkLabel: "Learn more",
    },
    {
      id: "opssourcing",
      title: "OpsSourcing",
      description: "Outsourced operations and business process services for wealth management and financial services firms.",
      href: "/work#opssourcing",
      linkLabel: "Learn more",
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: "Cloud-native infrastructure, hosting, and managed services for fintech and wealth management platforms.",
      href: "/work#cloud-services",
      linkLabel: "Learn more",
    },
  ],
};

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  metric?: {
    value: string;
    label: string;
  };
  cta?: {
    label: string;
    href: string;
  };
}

export interface SolutionsShowcaseData {
  title: string;
  subtitle?: string;
  items: SolutionItem[];
}

export const solutionsShowcase: SolutionsShowcaseData = {
  title: "Enterprise Platforms for Wealth Management",
  subtitle: "Integrated solutions that combine sophisticated operations with intuitive client interfaces.",
  items: [
    {
      id: "wealth-management",
      title: "Wealth Management",
      description:
        "Partnering with Fi-Tek, a leader in wealth management technology, enhances your success with tailore investment advisory solutions backed by top financial institutions.",
      image: {
        src: "/media/solutions/wealth-management.png",
        alt: "Wealth Management Platform Dashboard",
      },
      metric: {
        value: "60+",
        label: "Countries Supported",
      },
      cta: {
        label: "Learn More",
        href: "/work#wealth-management",
      },
    },
    {
      id: "Investor-accounting",
      title: "Investor Accounting",
      description:
        "HedgeTek® manages complex investor accounting, calculates diverse fees, and generates performance statements for partner and fund levels.",
      image: {
        src: "/media/solutions/Investor-accounting.png",
        alt: "Operations Platform Interface",
      },
      metric: {
        value: "50+",
        label: "Fund Structures Supported",
      },
      cta: {
        label: "Learn More",
        href: "/work#operations",
      },
    },
    {
      id: "Global-Family-Office",
      title: "Global Family Office (GFO)",
      description:
        "Fi-Tek, via its subsidiary Rockit® Solutions, offers integrated family office technology, becoming a leader in the $7 trillion global market.",
      image: {
        src: "/media/solutions/family-office.png",
        alt: "Family Office Dashboard",
      },
      metric: {
        value: "300+",
        label: "Family Offices & Advisors Served",
      },
      cta: {
        label: "Learn More",
        href: "/work#family-office",
      },
    },
    {
      id: "OpsSourcing",
      title: "OpsSourcing",
      description:
        "OpsSourcing combines Fi-Tek’s top-tier wealth management software with First State Trust Company’s services, giving you a competitive edge to focus on growth and client goals.",
      image: {
        src: "/media/solutions/OpsSourcing.jpg",
        alt: "OpsSourcing Interface",
      },
      metric: {
        value: "30%-50%",
        label: "Operating Expense Reduction",
      },
      cta: {
        label: "Learn More",
        href: "/work#family-office",
      },
    },
    {
      id: "cloud-services",
      title: "Fi-Tek Cloud Services",
      description:
        "Amid economic and regulatory challenges, Fi-Tek offers technology solutions that cut costs and drive growth while ensuring excellent client service.",
      image: {
        src: "/media/solutions/cloud-services.png",
        alt: "Cloud Services Dashboard",
      },
      metric: {
        value: "24/7",
        label: "Client Support & Access",
      },
      cta: {
        label: "Learn More",
        href: "/work#cloud-services",
      },
    },
  ],
};

export interface PrincipleItem {
  id: string;
  title: string;
  description: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
}

export interface TeamSection {
  heading: string;
  description: string;
  roles: string[];
}

export interface WhyChooseItem {
  id: string;
  text: string;
}

export interface AboutData {
  intro: {
    title: string;
    subtitle: string;
  };
  principles: PrincipleItem[];
  strengths: StrengthItem[];
  team: TeamSection;
  whyChoose: WhyChooseItem[];
}

export const about: AboutData = {
  intro: {
    title: "About Fi-Tek",
    subtitle: "Empowering Financial Institutions with Scalable & Smart Fintech",
  },
  principles: [
    {
      id: "navigate-complexity",
      title: "Navigate Complexity",
      description: "Simplify operations with intelligent, adaptive tools",
    },
    {
      id: "streamline-operations",
      title: "Streamline Operations",
      description: "Automate workflows and scale with ease",
    },
    {
      id: "deliver-value",
      title: "Deliver Value",
      description: "Enhance user experience and client outcomes",
    },
  ],
  strengths: [
    {
      id: "smart-innovation",
      title: "Smart Innovation",
      description: "AI, automation, and analytics at your fingertips",
    },
    {
      id: "secure-platforms",
      title: "Secure Platforms",
      description: "Robust, scalable, and compliant tech stack",
    },
    {
      id: "agile-delivery",
      title: "Agile Delivery",
      description: "Flexible systems that evolve with the market",
    },
  ],
  team: {
    heading: "Meet the Minds Behind Fi-Tek",
    description: "A global team of experts blending technology, finance, and strategy.",
    roles: ["Analysts", "Developers", "Technologists", "MBAs", "CPAs"],
  },
  whyChoose: [
    {
      id: "innovation-first",
      text: "Innovation-first mindset",
    },
    {
      id: "trusted-firms",
      text: "Trusted by top financial firms",
    },
    {
      id: "long-term-success",
      text: "Commitment to long-term success",
    },
  ],
};

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

export const differentiators: DifferentiatorsData = {
  title: "Built for Regulated Environments",
  /*subtitle: "Built for regulated, high-scale financial operations",*/
  items: [
    {
      id: "soc",
      title: "SOC-Aligned Controls",
      description:
        "Structured operational controls designed to meet institutional governance standards.",
    },
    {
      id: "audit",
      title: "Audit-Ready Reporting",
      description:
        "Clear data lineage and deterministic processing across the full lifecycle.",
    },
    {
      id: "certified",
      title: "Certified & Secure Operations",
      description:
        "ISO-aligned processes with proven adoption across regulated institutions.",
    },
  ],
};

// Contact page content contract
export interface ContactPageContent {
  heading: string;
  address: string;
  email: string;
  phone: string;
  backgroundImage: string;
  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
}
 
// Data for contact page
export const contact: ContactPageContent = {
  heading: "See how Fi-Tek fits your environment",
  address: "Old Westbury 256, New York 11201, United States",
  email: "leroux@example.com",
  phone: "+0 123 4567 8999",
  backgroundImage: "https://images.pexels.com/photos/7681081/pexels-photo-7681081.jpeg",
  form: {
    namePlaceholder: "Name",
    emailPlaceholder: "E-mail address",
    messagePlaceholder: "Message",
    submitLabel: "Send",
  },
};

// Dummy data for CompactShowcaseSection (for development/demo only)
export interface CompactShowcaseMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

export interface CompactShowcaseMetric {
  value: string;
  label: string;
}

export interface CompactShowcaseCTA {
  label: string;
  href: string;
}

export interface CompactShowcaseItem {
  id: string;
  label: string;
  title: string;
  description: string;
  media: CompactShowcaseMedia;
  metric?: CompactShowcaseMetric;
  cta?: CompactShowcaseCTA;
}
export interface CompactShowcaseSectionData {
  title: string;
  subtitle?: string;
  items: CompactShowcaseItem[];
}

export const compactShowcaseSectionDemo: CompactShowcaseSectionData = {
  title: "Solutions Aligned to Institutional Needs",
  subtitle:
    "Purpose-built applications layered on the Fi-Tek platform—configured for specific operating models and regulatory environments.",
  items: [
    {
      id: "wealthes",
      label: "Global WealthES",
      title: "Global WealthES",
      description:
        "Wealth processing and portfolio operations across global markets.",
      media: {
        type: "video" as const,
        src: "/media/solutions/wealth-preview.mp4",
        alt: "Wealth Management Platform Dashboard",
      },
      metric: {
        value: "60+",
        label: "Countries Supported",
      },
      cta: {
        label: "Learn More",
        href: "/technology/global-wealthe",
      },
    },
    {
      id: "hedgetek",
      label: "HedgeTek",
      title: "HedgeTek",
      description:
        "Investor accounting and allocations for hedge funds and alternative structures.",
      media: {
        type: "image" as const,
        src: "/media/solutions/Investor-accounting.png",
        alt: "Investor Accounting Dashboard",
      },
      metric: {
        value: "50+",
        label: "Fund Structures Supported",
      },
      cta: {
        label: "Learn More",
        href: "/technology/hedgetek",
      },
    },
    {
      id: "Fi-tek-Wealth-solutions",
      label: "Fi-tek Wealth solutions",
      title: "Fi-tek Wealth solutions",
      description:
        "Technology tailored for family offices and advisory use cases.",
      media: {
        type: "image" as const,
        src: "/media/solutions/family-office.png",
        alt: "Family Office Dashboard",
      },
      metric: {
        value: "300+",
        label: "Family Offices & Advisors Served",
      },
      cta: {
        label: "Learn More",
        href: "/technology/rockit",
      },
    },
  ],
};

import type { GwesArchitectureSectionData } from "@/types/gwesArchitecture";

export const gwesArchitectureSectionData: GwesArchitectureSectionData = {
  title: "Global WealthES(R) - Wheel of Wealth",
  description:
    "An interactive, 8-segment architecture wheel showcasing the core modules of the GWES platform.",
  centerLabel: "GWES",
  segments: [
    {
      id: "portfolio-management",
      ariaLabel: "Portfolio Management Module",
      rotation: 0,
      position: { x: 630, y: 400 },
      labels: ["Portfolio", "Management"],
    },
    {
      id: "account-administration",
      ariaLabel: "Account Administration Module",
      rotation: 45,
      position: { x: 562, y: 562 },
      labels: ["Account", "Administration"],
    },
    {
      id: "fiduciary-duties",
      ariaLabel: "Fiduciary Duties Module",
      rotation: 90,
      position: { x: 400, y: 630 },
      labels: ["Fiduciary", "Duties"],
    },
    {
      id: "operations",
      ariaLabel: "Operations Module",
      rotation: 135,
      position: { x: 238, y: 562 },
      labels: ["Operations"],
    },
    {
      id: "global-family-office",
      ariaLabel: "Global Family Office Module",
      rotation: 180,
      position: { x: 170, y: 400 },
      labels: ["Global Family", "Office"],
    },
    {
      id: "reporting-analytics",
      ariaLabel: "Reporting and Analytics Module",
      rotation: 225,
      position: { x: 238, y: 238 },
      labels: ["Reporting", "And Analytics"],
    },
    {
      id: "investment-planning",
      ariaLabel: "Investment Planning and Proposal Module",
      rotation: 270,
      position: { x: 400, y: 170 },
      labels: ["Investment Planning", "& Proposal"],
    },
    {
      id: "client-onboarding",
      ariaLabel: "Client Onboarding Module",
      rotation: 315,
      position: { x: 562, y: 238 },
      labels: ["Client", "Onboarding"],
    },
  ],
};

import type { ServicesSliderSectionData } from "@/types/services";

export const servicesSliderSectionData: ServicesSliderSectionData = {
  heading: "Core Platform Capabilities Across the Investment Lifecycle",

  items: [
    {
      id: "trading",
      title: "Trading & Order Lifecycle Management",
      description:
        "Institutional-grade order capture, routing, and execution workflows with embedded pre-trade controls and real-time lifecycle monitoring.",
      image: "/media/download.webp",
    },
    {
      id: "accounting",
      title: "Portfolio & Multi-Asset Accounting",
      description:
        "Comprehensive portfolio accounting with tax-lot precision, corporate action processing, and daily NAV and P&L calculations across asset classes.",
      image: "/media/1.png",
    },
    {
      id: "settlement",
      title: "Global Settlement & Reconciliation",
      description:
        "Multi-currency settlement orchestration, custodian reconciliation, and deterministic exception management within a controlled operational framework.",
      image: "/media/download.webp",
    },
    {
      id: "reporting",
      title: "Reporting & Regulatory Output",
      description:
        "Client reporting, operational dashboards, and regulatory outputs delivered through secure, structured, and audit-ready data pipelines.",
      image: "/media/download.webp",
    },
    {
      id: "integration",
      title: "Ecosystem & Open Integrations",
      description:
        "Broker connectivity, custodian integrations, and open APIs enabling structured interoperability across the investment technology ecosystem.",
      image: "/media/download.webp",
    },
    {
      id: "automation",
      title: "Intelligent Operational Automation",
      description:
        "Configurable exception workflows and human-governed automation designed to reduce operational risk while preserving deterministic control.",
      image: "/media/download.webp",
    },
    {
      id: "alternatives",
      title: "Alternatives & Family Office Servicing",
      description:
        "Specialized support for alternative assets, partnership accounting, and consolidated multi-entity reporting within complex structures.",
      image: "/media/download.webp",
    },
    {
      id: "data",
      title: "Data & Intelligence Foundations",
      description:
        "Structured data architecture, analytics pipelines, and intelligence-ready processing designed for scalable institutional decision-making.",
      image: "/media/download.webp",
    },
  ],
};

import { FinanceFeatureSectionData } from "@/types/financeFeature";

export const financeFeatureSectionData: FinanceFeatureSectionData = {
  heading:
    "Fi-Tek's Key Differentiators",
 
  image: "/media/download.webp", // replace with your phone image
 
  features: [
    {
      id: 1,
      title: "Integrations",
      description:
        "Real-time solution integrated on a single platform catering to over 100 financial institutions globally.",
    },
    {
      id: 2,
      title: "Accuracy",
      description:
        "Our multi-dimensional accuracy testing methodology ensures the quality of data reported.",
    },
     {
      id: 3,
      title: "Flexibility",
      description:
        "Innovative solution offerings tailored to each firm’s requirements.",
    },
  ],
};

 import type { CapabilitiesGridContent } from "@/types/capabilitiesGrid";
 
 export const capabilitiesGridContent: CapabilitiesGridContent = {
   title: "Solutions Aligned to Institutional Needs",
   subtitle: [
     "Purpose-built applications layered on the Fi-Tek platform—configured for specific operating models and regulatory environments.",
   ],
   items: [
     {
       id: "wealthe",
       title: "Global WealthES",
       description: "Wealth processing and portfolio operations across global markets.",
       icon: "integration",
     },
     {
       id: "hedgetek",
       title: "HedgeTek",
       description: "Investor accounting and allocations for hedge funds and alternative structures.",
       icon: "accuracy",
     },
     {
       id: "fi-tek-wealth-solutions",
       title: "Fi-Tek Wealth Solutions",
       description: "Technology tailored for family offices and advisory use cases.",
       icon: "flexibility",
     },
   ],
 };
 
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
 
