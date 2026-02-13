export interface HeroCTA {
  label: string;
  href: string;
}

export type HeroBackground =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    };

export interface HeroContent {
  title: string;
  subtitle: string;
  background: HeroBackground;
  cta: HeroCTA;
}
