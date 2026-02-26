export interface V2HeroData {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImageSrc: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface V2Pillar {
  title: string;
  description: string;
}

export interface V2PillarsData {
  heading: string;
  intro: string;
  pillars: V2Pillar[];
}

export interface V2LifecycleStep {
  id: string;
  label: string;
  detail: string;
  imageSrc: string;
}

export interface V2LifecycleData {
  heading: string;
  intro: string;
  steps: V2LifecycleStep[];
  centerLabel: string;
}

export interface V2GovernanceItem {
  title: string;
  description: string;
}

export interface V2GovernanceData {
  heading: string;
  intro: string;
  panelImageSrc: string;
  items: V2GovernanceItem[];
}

export interface V2StabilityData {
  heading: string;
  intro: string;
  spotlightImageSrc: string;
  markers: string[];
  metrics: { value: string; label: string }[];
}

export interface V2FinalCtaData {
  heading: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface InstitutionalVersion2Data {
  hero: V2HeroData;
  pillars: V2PillarsData;
  lifecycle: V2LifecycleData;
  governance: V2GovernanceData;
  stability: V2StabilityData;
  finalCta: V2FinalCtaData;
}
