export interface PerformingCapitalMetric {
  value: string;
  label: string;
}

export interface PerformingCapitalItem {
  id: string;
  title: string;
  description: string;
  icon?: string;   // image path or icon key
  metric: PerformingCapitalMetric;
  href?: string;
}

export interface PerformingCapitalContent {
  title: string;
  subtitle?: string;
  items: PerformingCapitalItem[];
}
