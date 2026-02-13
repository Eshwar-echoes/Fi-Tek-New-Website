export interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

export interface FeatureHeroSectionData {
  eyebrow: string;
  headline: string;
  firstSectionTitle: string;
  secondSectionTitle: string;
  features: FeatureItem[];
  secondFeatures: FeatureItem[];
}
