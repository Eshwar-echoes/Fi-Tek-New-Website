import type { PerformingCapitalContent } from "@/types/performingCapital";

export const performingCapitalContent: PerformingCapitalContent = {
  title: "Convert your BTC into performing capital",
  subtitle:
    "Explore curated, risk-managed strategies for institutional portfolios, while keeping BTC as BTC.",
  items: [
    {
      id: "spectra",
      title: "Spectra",
      description:
        "Permissionless yield protocol offering passive returns through fixed-rate pools and native BTC yield strategies.",
      icon: "/media/icons/spectra.png",
      metric: {
        value: "~6–10%",
        label: "APY",
      },
      href: "/",
    },
    {
      id: "river",
      title: "River",
        description:
        "Institutional-grade platform providing access to diversified BTC yield strategies with risk management and transparency.",
        icon: "/media/icons/river.png",
        metric: {
        value: "~5–8%",
        label: "APY",
      },
        href: "/",
    },
    {
      id: "amber",   
      title: "Amber",
      description:
          "Comprehensive BTC yield solutions for institutions, combining DeFi and CeFi strategies to optimize returns and manage risk.",
        icon: "/media/icons/amber.png",
        metric: {
        value: "~4–7%",
        label: "APY",
        },
        href: "/team",
    },
    { 
        id: "blockfi",
        title: "BlockFi",
        description:
        "Leading crypto lending platform offering competitive BTC interest accounts with institutional security and compliance.",
        icon: "/media/icons/blockfi.png",
        metric: { 
        value: "~3–6%",
        label: "APY",
        },
        href: "/",
    },   
    // ...
  ],
};
