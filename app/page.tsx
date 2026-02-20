import { homeEnterprise } from "@/content/client/fitek/homeEnterprise";
import { EnterpriseHeroSection } from "@/components/sections/home-enterprise/EnterpriseHeroSection";
import { SegmentSplitSection } from "@/components/sections/home-enterprise/SegmentSplitSection";
import { AdvisorWorkflowSection } from "@/components/sections/home-enterprise/AdvisorWorkflowSection";
import { PlatformFlowSection } from "@/components/sections/home-enterprise/PlatformFlowSection";
import { CapabilitiesGridSection } from "@/components/sections/home-enterprise/CapabilitiesGridSection";
import { EnterpriseProofSection } from "@/components/sections/home-enterprise/EnterpriseProofSection";
import { EnterpriseFinalCtaSection } from "@/components/sections/home-enterprise/EnterpriseFinalCtaSection";

export default function HomePage() {
  return (
    <div className="leroux-home">
      <EnterpriseHeroSection data={homeEnterprise.hero} />
      <SegmentSplitSection data={homeEnterprise.segmentSplit} />
      <AdvisorWorkflowSection data={homeEnterprise.workflow} />
      <PlatformFlowSection data={homeEnterprise.platformFlow} />
      <CapabilitiesGridSection data={homeEnterprise.capabilities} />
      <EnterpriseProofSection data={homeEnterprise.proof} />
      <EnterpriseFinalCtaSection data={homeEnterprise.finalCta} />
    </div>
  );
}
