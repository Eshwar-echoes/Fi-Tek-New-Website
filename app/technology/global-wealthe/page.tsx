// Fi-Tek Product Page (Template)
//
// This page is content-driven and uses only reusable, governed sections.
// All content is imported from the content/client/fitek/product-fitek.ts file.
// To create additional product pages, duplicate only the content file and update imports.


import { productGlobalWealthES, cardsWithIcon,heroContent } from "@/content/client/fitek/technology/product-gwes";
import { VisualAnchorSection } from "@/components/sections/VisualAnchorSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { CompactShowcaseSection } from "@/components/sections/CompactShowcaseSection";
import { SolutionsShowcase } from "@/components/sections/SolutionsShowcase";
import { ProductCTASection } from "@/components/sections/ProductCTASection";
import { CardsWithIconsSection } from "@/components/sections/CardWithIconsSection";
import { SubHeroSection } from "@/components/sections/SubHeroSection";

export default function ProductPage() {
  return (
    <main>
      <SubHeroSection data={heroContent} />
      <VisualAnchorSection data={productGlobalWealthES.visualAnchor} />
      <ProofSection data={productGlobalWealthES.proof} />
      <CompactShowcaseSection data={productGlobalWealthES.compactShowcase} />
      <CardsWithIconsSection data={cardsWithIcon} />
      <SolutionsShowcase data={productGlobalWealthES.features} />
      <ProductCTASection data={productGlobalWealthES.cta} />
    </main>
  );
}
