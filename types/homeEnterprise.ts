export interface EnterpriseHeroData {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  backgroundMedia: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };
}

export interface SegmentPathway {
  id: "ria" | "institutional";
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SegmentSplitData {
  heading: string;
  intro: string;
  pathways: [SegmentPathway, SegmentPathway];
}

export interface WorkflowItem {
  id:
    | "trade-rebalance"
    | "account-management"
    | "alternatives"
    | "performance-tracking"
    | "reporting"
    | "client-engagement";
  title: string;
  description: string;
}

export interface WorkflowSectionData {
  heading: string;
  intro: string;
  items: WorkflowItem[];
}

export interface PlatformFlowStep {
  id: string;
  title: string;
  description: string;
}

export interface PlatformFlowData {
  heading: string;
  intro: string;
  steps: PlatformFlowStep[];
}

export interface PlatformTransformationData {
  heading: string;
  intro: string;
  fragmentedLabel: string;
  fragmentedIntro: string;
  fragmentedModules: string[];
  unifiedLabel: string;
  unifiedIntro: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
}

export interface CapabilitiesGridData {
  heading: string;
  intro: string;
  items: CapabilityItem[];
}

export interface ProofMetric {
  value: string;
  label: string;
}

export interface ProofSectionData {
  heading: string;
  intro: string;
  metrics: ProofMetric[];
}

export interface FinalCtaData {
  heading: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface EnterpriseHomepageData {
  hero: EnterpriseHeroData;
  segmentSplit: SegmentSplitData;
  workflow: WorkflowSectionData;
  platformFlow: PlatformFlowData;
  platformTransformation: PlatformTransformationData;
  capabilities: CapabilitiesGridData;
  proof: ProofSectionData;
  finalCta: FinalCtaData;
}
