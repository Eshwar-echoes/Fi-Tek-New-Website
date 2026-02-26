import { homeInstitutionalV2 } from "@/content/client/fitek/homeInstitutionalV2";
import { InstitutionalHeroV2Section } from "@/components/sections/version2/InstitutionalHeroV2Section";
import { InstitutionalPillarsV2Section } from "@/components/sections/version2/InstitutionalPillarsV2Section";
import { InstitutionalWowLifecycleV2Section } from "@/components/sections/version2/InstitutionalWowLifecycleV2Section";
import { InstitutionalWowLifecycleV2AltSection } from "@/components/sections/version2/InstitutionalWowLifecycleV2AltSection";
import { InstitutionalGovernanceV2Section } from "@/components/sections/version2/InstitutionalGovernanceV2Section";
import { InstitutionalStabilityV2Section } from "@/components/sections/version2/InstitutionalStabilityV2Section";
import { InstitutionalFinalCtaV2Section } from "@/components/sections/version2/InstitutionalFinalCtaV2Section";

export default function Version2Page() {
  return (
    <div className="leroux-home">
      <InstitutionalHeroV2Section data={homeInstitutionalV2.hero} />
      <InstitutionalPillarsV2Section data={homeInstitutionalV2.pillars} />
      <InstitutionalWowLifecycleV2Section data={homeInstitutionalV2.lifecycle} />
      <InstitutionalWowLifecycleV2AltSection data={homeInstitutionalV2.lifecycle} />
      <InstitutionalGovernanceV2Section data={homeInstitutionalV2.governance} />
      <InstitutionalStabilityV2Section data={homeInstitutionalV2.stability} />
      <InstitutionalFinalCtaV2Section data={homeInstitutionalV2.finalCta} />
    </div>
  );
}
