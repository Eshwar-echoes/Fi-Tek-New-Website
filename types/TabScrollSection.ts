export interface HeroTab {
  title: string;
  description: string;
}

export interface HeroCTA {
  label: string;
  link: string;
}

export interface TabScrollAnimationData {
  title: string;
  subtitle: string;
  image: string;
  tabs: HeroTab[];
  cta: HeroCTA;
}
