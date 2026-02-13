export interface AboutIntro {
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutCard {
  id: number;
  title: string;
  description: string;
  icon: string; // icon name key
}

export interface AboutSectionData {
  intro: AboutIntro;
  principles: AboutCard[];
  strengths: AboutCard[];
}
