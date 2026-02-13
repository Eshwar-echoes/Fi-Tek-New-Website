import type { IconName } from "@/types/icon";

export interface CardWithIcon {
  id: string;
  title: string;
  description: string;
  icon: IconName; // icon filename from /public/icons
  iconSize?: number; // optional size for the icon
}

export interface CardsWithIconsData {
  title: string;
  subtitle?: string;
  items: CardWithIcon[];
}
