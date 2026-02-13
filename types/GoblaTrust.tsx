export interface GlobalTrustMetric {
  value: string;
  label: string;
}

export interface GlobalTrustContent {
  heading: string;
  description: string;
  metrics: GlobalTrustMetric[];
}
