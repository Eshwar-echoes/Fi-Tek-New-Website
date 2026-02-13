import type { CapabilitiesGridContent } from "@/types/capabilitiesGrid";

export const capabilitiesGridContent: CapabilitiesGridContent = {
  title: "Platform Capabilities",
  subtitle: [
    "Purpose-built infrastructure for modern wealth and investment platforms.",
    "Modular services that scale from startups to enterprise institutions.",
  ],
  items: [
    {
      id: "integration",
      title: "Integrations",
      description: "Connect with custodians, brokers, and APIs.",
      icon: "integration",
    },
    {
      id: "accuracy",
      title: "Accuracy",
      description: "Deterministic calculations with audit trails.",
      icon: "accuracy",
    },
    {
      id: "flexibility",
      title: "Flexibility",
      description: "Composable workflows and configurable rules.",
      icon: "flexibility",
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Real-time dashboards and reporting engine.",
      icon: "flexibility-animated",
    },
    {
      id: "security",
      title: "Security",
      description: "Role-based access and encryption by default.",
      icon: "flexibility-animated",
    },
    {
      id: "automation",
      title: "Automation",
      description: "Background jobs and event-driven triggers.",
      icon: "flexibility-animated",
    },
  ],
};
