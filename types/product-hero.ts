/**
 * ProductHeroData
 *
 * Shared data contract for all product hero sections.
 * This type is used to ensure content-driven, reusable product hero sections across all product pages.
 * Do not define or duplicate this type inside components.
 */

export interface ProductHeroData {
  headline: string;
  subtext?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  visual: {
    src: string; // image or SVG only
    alt: string;
  };
  backgroundImage?: {
    src: string;
    alt: string;
  };
}
