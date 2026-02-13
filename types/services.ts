// types/services.ts

export interface ServiceItem {
  id: string;
  title: string;
  description: string;

  icon?: React.ReactNode;   // emoji or SVG component
  image?: string;           // image path (optional)

  href?: string;
}

export interface ServicesSliderSectionData {
  heading: string;
  items: ServiceItem[];
  autoScrollSpeed?: number; // px per second
}
