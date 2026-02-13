import type { FeatureCardSectionData } from "@/types/feature-card";

export const featureCardsContent: FeatureCardSectionData = {
  title: "Seamless Solutions for Financial Intelligence",
  subtitle:
    "Designed for advisors, operations teams, and enterprises that demand precision and flexibility.",
  items: [
    {
      id: "integration",
      title: "Work organization",
      description:
        "Structure complex workflows, teams, and data streams into a single operational view.",
      icon: "integration",
    },
    {
      id: "analytics",
      title: "Data analytics",
      description:
        "Analyze portfolios, performance, and trends with institutional-grade clarity.",
      icon: "accuracy",
    },
    {
      id: "flexibility",
      title: "Flexible architecture",
      description:
        "Adapt to evolving business models, asset classes, and reporting requirements.",
      icon: "flexibility",
    },
  ],
};
