/**
 * ProductHeroSectionData
 *
 * Strongly typed content contract for the enterprise SaaS product hero section.
 * All fields are required except eyebrow and secondary action.
 *
 * - All content must be defined in the content folder, not in the component.
 * - This type is used to ensure content-driven, reusable product hero sections across all product pages.
 */

export interface ProductHeroSectionData {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  actions: {
    primary: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
  visual: {
    src: string; // image path, must be static asset
    alt: string;
  };
}
