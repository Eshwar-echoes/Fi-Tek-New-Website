// To create additional Clients pages, duplicate only the content file and update imports.

import { FeatureCardsSection } from "@/components/sections/FeatureCardsSection";
import { IdeaHighlightSection } from "@/components/sections/IdeaHighlightSection";
import { ProductCTASection } from "@/components/sections/ProductCTASection";
import { SubHeroSection } from "@/components/sections/SubHeroSection";
import { GlobalPrivateBanks } from "@/content/client/fitek/clients/globalPrivateBanks";
import { CapabilitiesGridSection } from "@/components/sections/CapabilitiesGridSection";
import { PerformanceMeasurementSection } from "@/components/sections/PerformanceMeasurementSection";
import { GlobalTrustSection } from "@/components/sections/GlobalTrustSection";
import { WhyFiTekSection } from "@/components/sections/WhyFiTekSection";

export default function ProductPage() {
  return (
    <main>
      <SubHeroSection data={GlobalPrivateBanks.hero} />
      <FeatureCardsSection data={GlobalPrivateBanks.featureCards} />
      <IdeaHighlightSection data={GlobalPrivateBanks.ideaHighlight} />
      <CapabilitiesGridSection data={GlobalPrivateBanks.capabilitiesGrid} />
      <PerformanceMeasurementSection data={GlobalPrivateBanks.performanceMeasurement} />
      <GlobalTrustSection data={GlobalPrivateBanks.globalTrust} />
      <WhyFiTekSection data={GlobalPrivateBanks.whyFiTek} />
      <ProductCTASection data={GlobalPrivateBanks.cta} />
    </main>
  );
}
