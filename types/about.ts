export interface AboutInfrastructureIntro {
  heading: string;
  subheading: string;
  description: string;
}

export interface AboutInfrastructureBlock {
  id: string;
  title: string;
  description: string;
}

export interface AboutInfrastructureVisual {
  ariaLabel: string;
}

export interface AboutInfrastructureStrength {
  id: string;
  title: string;
  description: string;
}

export interface AboutInfrastructureSectionData {
  intro: AboutInfrastructureIntro;
  split: {
    heading: string;
    blocks: AboutInfrastructureBlock[];
    visual: AboutInfrastructureVisual;
  };
  strengths: {
    heading: string;
    items: AboutInfrastructureStrength[];
  };
}
