export interface GlobalHeroContent {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
}

export const globalHero: GlobalHeroContent = {
  title: "Powering the Futer of Wealth Management",
  subtitle:
    "Where technology meets trusted financial expertise",
  cta: {
    label: "Request a Demo",
    href: "/contact",
  },
};



export interface FinancialCard {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FinancialSectionContent {
  heading: string;
  cards: FinancialCard[];
}

export const financialSection: FinancialSectionContent = {
  heading: "Seamless Solutions for Financial Institutions",
  cards: [
    {
      title: "Wealth Management & Global Trading",
      description:
        "For those seeking a seamless, scalable, and fully integrated platform to manage global investment operations.",
      ctaLabel: "Explore Wealth Platform",
      ctaHref: "/contact",
    },
    {
      title: "Compliance & Business Intelligence",
      description:
        "For firms that require robust regulatory adherence paired with deep, data-driven operational insights.",
      ctaLabel: "View Compliance Solutions",
      ctaHref: "/contact",
    },
  ],
};


export interface GlobalWealthMetric {
  value: number;
  suffix: string;
  label: string;
}

export interface GlobalWealthContent {
  heading: string;
  metrics: GlobalWealthMetric[];
}

export const globalWealth: GlobalWealthContent = {
  heading:
    "Global WealthES™",

  metrics: [
    {
      value: 1 ,
      suffix: "Trillion+",
      label: "AUA Across all Technology Platforms ",
    },
    {
      value: 600,
      suffix: "+",
      label: "Clients Worldwide",
    },
    {
      value: 1500,
      suffix: "+",
      label: "Alternative Assets, used by Hedge Funds, Banks, and PE Firms. ",
    },
  ],
};



export interface AssetComparisonContent {
  heading: string;
  image: string;
  card: {
    title: string;
    description: string;
    points: string[];
  };
}

export const assetComparison: AssetComparisonContent = {
  heading: "Investment & Portfolio Management",
  image: "/media/kpi/aua.png",
  card: {
    title: "",
    description:
      "Advanced investment strategies powered by AI-driven insights and real-time portfolio monitoring.",
    points: [
      "Global & domestic trading with multi-currency support",
      "Direct FIX engine integration with 400+ brokers",
    ],
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
  title: "Strategic Financial Intelligence & Portfolio Analytics",
  subtitle:
    "Integrating data-driven business insights with investment and portfolio management to support smarter decisions, optimize performance, and drive sustainable growth.",
  items: [
    {
      id: "wealth-management",
      label: "Investment & Portfolio Management",
      title: "Investment & Portfolio Management",
      description:
        "Advanced investment strategies powered by AI-driven insights and real-time portfolio monitoring. key Features : Global & domestic trading with multi-currency support  & Direct FIX engine integration with 400+ brokers.",
      media: {
        type: "image" as const,
        src: "/media/1.png",
        alt: "Wealth Management Platform Dashboard",
      },
      metric: {
        value: "60+",
        label: "Countries Supported",
      },
      cta: {
        label: "Request a Demo",
        href: "/work#wealth-management",
      },
    },
    {
      id: "investor-accounting",
      label: "Business Intelligence & Reporting",
      title: "Business Intelligence & Reporting",
      description:
        "A built-in BI platform providing real-time insights and customizable reports for strategic decision-making.Key Features Integrated reporting tools for internal and client use & Mobile-friendly dashboards for instant insights.",
      media: {
        type: "image" as const,
        src: "/media/6.png",
        alt: "Investor Accounting Dashboard",
      },
      metric: {
        value: "50+",
        label: "Fund Structures Supported",
      },
      cta: {
        label: "Request a Demo",
        href: "/work#operations",
      },
    },
   /* {
      id: "global-family-office",
      label: "GFO",
      title: "Global Family Office (GFO)",
      description:
        "Fi-Tek, via its subsidiary Rockit® Solutions, offers integrated family office technology, becoming a leader in the $7 trillion global market.",
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
        label: "Read More",
        href: "/work#family-office",
      },
    },
    {
      id: "opssourcing",
      label: "OpsSourcing",
      title: "OpsSourcing",
      description:
        "OpsSourcing combines Fi-Tek’s top-tier wealth management software with First State Trust Company’s services, giving you a competitive edge to focus on growth and client goals.",
      media: {
        type: "image" as const,
        src: "/media/solutions/OpsSourcing.jpg",
        alt: "OpsSourcing Interface",
      },
      metric: {
        value: "30%-50%",
        label: "Operating Expense Reduction",
      },
      cta: {
        label: "Read More",
        href: "/work#family-office",
      },
    },
    {
      id: "cloud-services",
      label: "Cloud",
      title: "Fi-Tek Cloud Services",
      description:
        "Amid economic and regulatory challenges, Fi-Tek offers technology solutions that cut costs and drive growth while ensuring excellent client service.",
      media: {
        type: "image" as const,
        src: "/media/solutions/cloud-services.png",
        alt: "Cloud Services Dashboard",
      },
      metric: {
        value: "24/7",
        label: "Client Support & Access",
      },
      cta: {
        label: "Read More",
        href: "/work#cloud-services",
      },
    },*/
  ],
};

export interface ComplianceRiskCard {
  title: string;
  description: string;
  icon: string;
}

export interface ComplianceRiskContent {
  heading: string;
  subheading: string;
  cards: ComplianceRiskCard[];
}

export const complianceRisk: ComplianceRiskContent = {
  heading: "Financial Planning & Account Enrollment",
  subheading:
    "Simplify onboarding and optimize wealth strategies with a robust, integrated planning tool.",
  cards: [
    {
      title: "End-to-end account enrollment",
      description:
        "Effortlessly onboard clients with a seamless and efficient process.",
      icon: "✓",
    },
    {
      title: "Dynamic financial planning capabilities",
      description:
        "Create personalized wealth strategies with real-time insights.",
      icon: "📊",
    },
  ],
};

export interface ComplianceRiskCard {
  title: string;
  description: string;
  icon: string;
}

export interface ComplianceRiskContent {
  heading: string;
  subheading: string;
  cards: ComplianceRiskCard[];
}

export const compliance: ComplianceRiskContent = {
  heading: "Compliance & Risk Management",
  subheading:
    "Stay audit-ready with automated risk assessment and real-time compliance monitoring..",
  cards: [
    {
      title: "Automated Account Reviews for regulatory compliance",
      description:
        "Ensure seamless adherence to regulations with intelligent automation.",
      icon: "✓",
    },
    {
      title: "Customizable risk analytics dashboards",
      description:
        "Gain deep insights with tailored risk monitoring and analysis tools.",
      icon: "📊",
    },
  ],
};

export interface FinancialCard {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FinancialSectionContent {
  heading: string;
  cards: FinancialCard[];
}

export const financial: FinancialSectionContent = {
  heading: "Seamless Wealth Operations & Integration",
  cards: [
    {
      title: "Securities Processing & Settlement",
      description:
        "Global securities processing with automated settlement in 80+ markets.",
      ctaLabel: "Request a Demo",
      ctaHref: "/contact",
    },
    {
      title: "Custodian & Investment Manager Integration",
      description:
        "Achieve 99%+ straight-through processing via seamless integrations.",
      ctaLabel: "Request a Demo",
      ctaHref: "/contact",
    },
  ],
};