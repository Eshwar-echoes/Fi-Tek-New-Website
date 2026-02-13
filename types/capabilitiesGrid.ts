import type { IconName } from "@/types/icon";

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  href?: string;
}

export interface CapabilitiesGridContent {
  title: string;
  subtitle?: string[];
  items: CapabilityItem[];
}
