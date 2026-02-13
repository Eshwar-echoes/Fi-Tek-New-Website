export interface FinanceFeatureItem {
  id: number;
  title: string;
  description: string;
}

export interface FinanceFeatureSectionData {
  heading: string;
  image: string;
  features: FinanceFeatureItem[];
}
