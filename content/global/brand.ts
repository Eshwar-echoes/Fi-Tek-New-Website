// content/global/brand.ts

export type NavItem =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "mega";
      label: string;
      sections: {
        title: string;
        links: { label: string; href: string }[];
      }[];
    }
  | {
      type: "submenu";
      label: string;
      links: { label: string; href: string }[];
    };

export interface BrandGlobalContent {
  siteName: string;
  logo: {
    src: string;
    alt: string;
  };
  nav: NavItem[];
  meta: {
    title: string;
    description: string;
  };
}

export interface FooterContent {
  description: string;
  contact: {
    company: string;
    address: string;
    phone: string;
    fax: string;
  };
  copyright: string;
}

/* ===============================
   Brand (Header + Metadata)
   =============================== */

export const brand: BrandGlobalContent = {
  siteName: "Fi-Tek",
  logo: {
    src: "/media/brand/FiTek LG.png",
    alt: "Fi-Tek logo",
  },

  nav: [
    /* ===============================
       Technology (SUBMENU)
       =============================== */
    {
      type: "submenu",
      label: "Technology",
      links: [
        { label: "Global WealthES™", href: "/technology/global-wealthe" },
        { label: "Global WealthES™1", href: "/technology/global-wealthe1" },
        { label: "HedgeTek®", href: "/technology/hedgetek" },
        { label: "Rockit® Command", href: "/technology/rockit-command" },
      ],
    },

    /* ===============================
       Offerings (MEGA MENU)
       =============================== */
    {
      type: "mega",
      label: "Offerings",
      sections: [
        {
          title: "Services",
          links: [
            { label: "Services", href: "/offerings/services" },
            { label: "BPO Services", href: "/offerings/bpo-services" },
            { label: "Cloud Services", href: "/offerings/cloud-services" },
          ],
        },
        {
          title: "Wealth Management Tech",
          links: [
            { label: "Account Enrollment", href: "/offerings/account-enrollment" },
            { label: "Account Administration", href: "/offerings/account-administration" },
            { label: "Fiduciary Duties", href: "/offerings/fiduciary-duties" },
            { label: "Operations", href: "/offerings/operations" },
            { label: "Global Family Office", href: "/offerings/global-family-office" },
            { label: "Reporting and Analytics", href: "/offerings/reporting-analytics" },
          ],
        },
        {
          title: "Specialty Assets & Performance",
          links: [
            { label: "GWP+", href: "/offerings/gwp-plus" },
          ],
        },
        {
          title: "GWES APPs",
          links: [
            { label: "GlobalWealth Access", href: "/offerings/globalwealth-access" },
            { label: "GWES Advisor Dashboard", href: "/offerings/gwes-advisor-dashboard" },
            { label: "GWES Report Studio", href: "/offerings/gwes-report-studio" },
            { label: "Model Marketplace", href: "/offerings/model-marketplace" },
          ],
        },
      ],
    },

    /* ===============================
       Clients (SUBMENU)
       =============================== */
    {
      type: "submenu",
      label: "Clients",
      links: [
        { label: "Global Private Banks", href: "/clients/global-private-banks" },
        { label: "Trust Banks", href: "/clients/trust-banks" },
        { label: "Hedge Fund Administrators", href: "/clients/hedge-fund-administrators" },
        { label: "Wealth Management Firms", href: "/clients/wealth-management-firms" },
        { label: "Broker Dealers", href: "/clients/broker-dealers" },
        { label: "Global Family Office", href: "/clients/global-family-office" },
        { label: "Registered Investment Advisors", href: "/clients/registered-investment-advisors" },
      ],
    },

    /* ===============================
       About Us (SUBMENU)
       =============================== */
    {
      type: "submenu",
      label: "About Us",
      links: [
        { label: "Company Overview", href: "/about/company-overview" },
        { label: "Leadership Team", href: "/about/leadership-team" },
        { label: "News & Events", href: "/about/news-events" },
        { label: "Blog", href: "/about/blog" },
        { label: "Careers", href: "/about/careers" },
        { label: "Contact Us", href: "/about/contact-us" },
        { label: "Privacy Policy", href: "/about/privacy-policy" },
        { label: "Sitemap", href: "/about/sitemap" },
      ],
    },

    /* ===============================
       Primary CTA
       =============================== */
    {
      type: "link",
      label: "Request a Demo",
      href: "/request-a-demo",
    },
  ],

  meta: {
    title: "Fi-Tek",
    description:
      "Enterprise-grade wealth management technology and services for financial institutions.",
  },
};

/* ===============================
   Footer Content
   =============================== */

export const footer: FooterContent = {
  description:
    "Fi-Tek provides best-in-class Wealth Management Software encompassing the entire lifecycle of wealth management and industry-leading solutions for alternative investments.",

  contact: {
    company: "Fi-Tek, LLC",
    address: "333 Thornall Street, 2nd Floor, Edison, NJ 08837",
    phone: "(732) 767 5437",
    fax: "(732) 632 8191",
  },

  copyright: "© 2025 Fi-Tek, LLC. All Rights Reserved.",
};
