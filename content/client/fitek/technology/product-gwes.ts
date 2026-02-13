/**
 * Fi-Tek Product Page Content
 *
 * All content and types for the Fi-Tek product page.
 *
 * This file is the single source of truth for the product page content.
 * To create additional product pages, duplicate this file and update the content only.
 */

// --- Types ---
import type {
  ProofData,
  CompactShowcaseSectionData,
  SolutionsShowcaseData,
} from "@/content/client/fitek/home";

import type { ProductCTASectionData } from "@/components/sections/ProductCTASection";
import type { ProductHeroData } from "@/types/product-hero";
import type { ProductHeroSectionData } from "@/types/product-hero-section";

export const productHeroSection: ProductHeroSectionData = {
  eyebrow: "Enterprise Wealth Platform",
  headline: "All your financial data, one unified platform.",
  subtext: "Global WealthES™ brings together real-time analytics, compliance, and seamless trading in a single, secure dashboard for professional teams.",
  actions: {
    primary: {
      label: "Request a Demo",
      href: "/contact",
    },
    secondary: {
      label: "View Live Demo",
      href: "/demo",
    },
  },
  visual: {
    src: "/media/hero/gwes-dashboard-preview.png",
    alt: "Global WealthES dashboard interface preview",
  },
};

export interface ProductPageContent {
  hero: ProductHeroData;
  visualAnchor: VisualAnchorSectionData;
  proof: ProofData;
  compactShowcase: CompactShowcaseSectionData;
  features: SolutionsShowcaseData;
  cta: ProductCTASectionData;
}

// --- Content ---
export const productGlobalWealthES: ProductPageContent = {
  hero: {
    headline: "All your financial data, one unified platform.",
    subtext: "Global WealthES™ brings together real-time analytics, compliance, and seamless trading in a single, secure dashboard for professional teams.",
    primaryCta: {
      label: "Request a Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Live Demo",
      href: "/demo",
    },
    visual: {
      src: "/media/hero/gwes-dashboard-preview.png",
      alt: "Global WealthES dashboard interface preview"
    }
  },
  visualAnchor: {
    headline: "Seamless Solutions for Financial Institutions",
    supportingText: "For those seeking robust regulatory adherence and data-driven insights",
    metric: {
      value: "1 Trillion+",
      label: "AUA Across all Technology Platforms",
    },
    visual: {
      src: "/media/illustrations/wealth-management.png",
      alt: "Illustration of a modern wealth management dashboard"
    }
  },
  proof: {
    metrics: [
      {
        value: 1,
        suffix: "Trillion+",
        label: "AUA Across all Technology Platforms",
        backgroundImage: "/media/kpi/aua.png",
      },
      {
        value: 600,
        suffix: "+",
        label: "Clients Worldwide",
        backgroundImage: "/media/kpi/clients.png",
      },
      {
        value: 1500,
        suffix: "+",
        label: "Alternative Assets, used by Hedge Funds, Banks, and PE Firms.",
        backgroundImage: "/media/kpi/alt-assets.png",
      },
    ],
  },
  compactShowcase: {
    title: "Financial Planning & Account Enrollment",
    subtitle: "Simplify onboarding and optimize wealth strategies with a robust, integrated planning tool.",
    items: [
      {
        id: "account-enrollment",
        label: "Enrollment",
        title: "End-to-end account enrollment",
        description: "Effortlessly onboard clients with a seamless and efficient process.",
        media: {
          type: "image",
          src: "/media/5.jpg",
          alt: "Account Enrollment Icon",
        },
      },
      {
        id: "financial-planning",
        label: "Planning",
        title: "Dynamic financial planning capabilities",
        description: "Create personalized wealth strategies with real-time insights.",
        media: {
          type: "image",
          src: "/media/2.jpg",
          alt: "Financial Planning Icon",
        },
      },
      {
        id: "investment-portfolio",
        label: "Investment",
        title: "Investment & Portfolio Management",
        description: "Advanced investment strategies powered by AI-driven insights and real-time portfolio monitoring.",
        media: {
          type: "image",
          src: "/media/1.png",
          alt: "Investment & Portfolio Management Icon",
        },
      },
    ],
  },
  features: {
    title: "Features",
    subtitle: "Key capabilities for modern wealth management.",
    items: [
      {
        id: "global-trading",
        title: "Global & Domestic Trading",
        description: "✔️ Global & domestic trading with multi-currency support\n✔️ Direct FIX engine integration with 400+ brokers",
        image: {
          src: "/media/6.png",
          alt: "Trading Icon",
        },
        metric: {
          value: "400+",
          label: "Broker Integrations",
        },
        cta: {
          label: "Request a Demo",
          href: "/contact",
        },
      },
      {
        id: "compliance-bi",
        title: "Compliance & Business Intelligence",
        description: "✔️ Integrated reporting tools for internal and client use\n✔️ Mobile-friendly dashboards for instant insights",
        image: {
          src: "/media/3.jpeg",
          alt: "Compliance Icon",
        },
        metric: {
          value: "99%+",
          label: "Audit-Ready",
        },
        cta: {
          label: "Request a Demo",
          href: "/contact",
        },
      },
      {
        id: "risk-management",
        title: "Compliance & Risk Management",
        description: "Automated Account Reviews for regulatory compliance\nCustomizable risk analytics dashboards",
        image: {
          src: "/media/5.jpg",
          alt: "Risk Management Icon",
        },
        metric: {
          value: "24/7",
          label: "Real-Time Monitoring",
        },
        cta: {
          label: "Request a Demo",
          href: "/contact",
        },
      },
      {
        id: "bi-reporting",
        title: "Business Intelligence & Reporting",
        description: "✔️ Integrated reporting tools for internal and client use\n✔️ Mobile-friendly dashboards for instant insights",
        image: {
          src: "/media/4.jpeg",
          alt: "BI Reporting Icon",
        },
        metric: {
          value: "100%",
          label: "Mobile-Friendly",
        },
        cta: {
          label: "Request a Demo",
          href: "/contact",
        },
      },
      {
        id: "operations-integration",
        title: "Seamless Wealth Operations & Integration",
        description: "Securities Processing & Settlement\nGlobal securities processing with automated settlement in 80+ markets.\nCustodian & Investment Manager Integration\nAchieve 99%+ straight-through processing via seamless integrations.",
        image: {
          src: "/media/2.jpg",
          alt: "Integration Icon",
        },
        metric: {
          value: "80+",
          label: "Markets Supported",
        },
        cta: {
          label: "Request a Demo",
          href: "/contact",
        },
      },
    ],
  },
  cta: {
    headline: "Request a Demo",
    description: "Ready to see Global WealthES™ in action? Contact our team to schedule a personalized demo and discover how we can power your institution's growth.",
    cta: { label: "Request a Demo", href: "/contact" },
  },
};

/**
 * VisualAnchorSectionData
 * 
 * This type defines the content structure for a single, optional "visual anchor" section per page.
 * - Intended for use as a premium, modern content anchor after the hero section.
 * - All content is generic and reusable across products and marketing.
 * - Section is optional and removable; no business logic or styling here.
 * - Designed to reduce scroll fatigue and improve comprehension.
 * - All fields are strictly typed and content-driven.
 */
export type VisualAnchorSectionData = {
  headline: string;
  supportingText?: string;
  metric?: {
    value: string;
    label: string;
  };
  visual?: {
    src: string; // image or illustration only, no video
    alt: string;
  };
};

// Sample content object (generic, not product-specific)
export const visualAnchorSample: VisualAnchorSectionData = {
  headline: "Seamless Solutions for Financial Institutions",
  supportingText: "Empowering teams with scalable, integrated platforms for the future of wealth management.",
  metric: {
    value: "1 Trillion+",
    label: "AUA Across all Technology Platforms",
  },
  visual: {
    src: "/media/illustrations/wealth-management1.png",
    alt: "Illustration of a modern wealth management dashboard",
  },
};

import type { CardsWithIconsData } from "@/types/cardWithIcon";

export const cardsWithIcon: CardsWithIconsData = {
  title: "Why Teams Choose Fi-Tek",
  subtitle:
    "Designed for scale, clarity, and enterprise-grade performance across workflows.",
  items: [
    {
      id: "work-organization",
      title: "Work organization",
      description:
        "Lorem ipsum dolor sit amet, quod ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      icon: "integration",
      iconSize: 52,
    },
    {
      id: "data-analytics",
      title: "Data analytics",
      description:
        "Lorem ipsum dolor sit amet, quo ectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      icon: "accuracy",
        iconSize: 52,
    },
    {
      id: "data-analytics1",
      title: "Data analytics1",
      description:
        "Lorem ipsum dolor sit amet, quo ectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      icon: "flexibility-animated",
        iconSize: 52,
    },
  ],
};

import type { HeroContent } from "@/types/SubHeroSection";

export const heroContent: HeroContent = {
  title: "GWES Report Studio",
  subtitle:
    "Empowering advisors to deliver beautifully designed, fully customized reports that exceed client expectations.",
  background: {
    type: "image",
    src: "/media/3.jpeg",
    alt: "Wealth reporting dashboard background",
  },
  cta: {
    label: "Request a Demo",
    href: "/contact",
  },
};




