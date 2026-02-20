import * as fitektHome from "@/content/client/fitek/home";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ContactHeroSection } from "@/components/sections/ContactHeroSection";
import { CompactShowcaseSection } from "@/components/sections/CompactShowcaseSection";
import { ServicesSliderSection } from "@/components/sections/ServicesSliderSection";
import { FinanceFeatureSection } from "@/components/sections/FinanceFeatureSection";
import { AboutInfrastructureSection } from "@/components/sections/AboutInfrastructureSection";
import { aboutInfrastructure } from "@/content/client/fitek/aboutInfrastructure";

export default function HomePage() {
  return (
    <>
      <HeroSection data={fitektHome.hero} />
      <ProofSection data={fitektHome.proof} />
      <ServicesSliderSection data={fitektHome.servicesSliderSectionData} />
      <CompactShowcaseSection data={fitektHome.compactShowcaseSectionDemo} />
      <FinanceFeatureSection data={fitektHome.financeFeatureSectionData} />
      <AboutInfrastructureSection data={aboutInfrastructure} />
      {/* <DifferentiatorsSection data={fitektHome.differentiators} /> */}
      {/* <ContactSection data={fitektHome.contact} /> */}
      <ContactHeroSection data={fitektHome.contact} />
    </>
  );
}

