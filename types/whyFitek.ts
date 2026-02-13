import type { IconName } from "@/types/icon";

export interface WhyFiTekPillar {
  title: string;
  description: string;
  icon: IconName; // Icon URL or the icon class name
}

export interface WhyFiTekContent {
  heading: string;
  pillars: WhyFiTekPillar[];
}