import * as fitektHome from "@/content/client/fitek/version1";
import { HeroSection } from "@/components/sections/home-enterprise-version1/HeroSection";
import { ProofSection } from "@/components/sections/home-enterprise-version1/ProofSection";
import { ContactHeroSection } from "@/components/sections/home-enterprise-version1/ContactHeroSection";
import { ServicesSliderSection } from "@/components/sections/home-enterprise-version1/ServicesSliderseSection";
import { FinanceFeatureSection } from "@/components/sections/home-enterprise-version1/FinanceFeatureSection";
import { AboutInfrastructureSection } from "@/components/sections/home-enterprise-version1/AboutInfrastructureSection";
import { GwesArchitectureSection } from "@/components/sections/home-enterprise-version1/GwesArchitectureSection";
import { CapabilitiesGridSection } from "@/components/sections/CapabilitiesGridSection";
 
export default function HomePage() {
  return (
    <div className="leroux-home">
      <HeroSection data={fitektHome.hero} />
      <ProofSection data={fitektHome.proof} />
      <GwesArchitectureSection />
      <ServicesSliderSection data={fitektHome.servicesSliderSectionData} />
      <CapabilitiesGridSection data={fitektHome.capabilitiesGridContent} />
      <FinanceFeatureSection data={fitektHome.financeFeatureSectionData} />
      <AboutInfrastructureSection data={fitektHome.aboutInfrastructure} />
      <ContactHeroSection data={fitektHome.contact} />
   </div>
  );
}