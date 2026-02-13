export interface LogoItem {
  id: string;
  name: string;
  src: string;
  href?: string;
}

export interface LogoMarqueeContent {
  title?: string;
  logos: LogoItem[];
}
