import type { IconName } from "@/types/icon";

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface FeatureCardSectionData {
  title: string;
  subtitle?: string;
  items: FeatureCardItem[];
}
