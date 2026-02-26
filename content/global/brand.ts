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
      label: "HomePage",
      links: [
        { label: "Version 1", href: "/version1" },
        { label: "Version 2", href: "/" },
        { label: "Version 3", href: "/version3" },
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

  copyright: "© 2026 Fi-Tek, LLC. All Rights Reserved.",
};
