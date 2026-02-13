import * as fitektechnology from "@/content/client/fitek/technology/technology";
import { GlobalHero } from "@/components/sections/GlobalHeroSection";
import { GlobalWealthSection } from "@/components/sections/GlobalWealthSection";
import { ComplianceRiskSection } from "@/components/sections/ComplianceRiskSection";
import { FinancialSection } from "@/components/sections/FinancialSection";
import { CompactShowcaseSection } from "@/components/sections/CompactShowcaseSection";
export default function HomePage() {
  return (
    <>
      <GlobalHero data={fitektechnology.globalHero}/>
      <FinancialSection data={fitektechnology.financialSection}/>
      <GlobalWealthSection data={fitektechnology.globalWealth}/>
      <ComplianceRiskSection data={fitektechnology.complianceRisk}/>
      <CompactShowcaseSection data={fitektechnology.compactShowcaseSectionDemo}/>
      {/*<AssetComparisonSection data={fitektechnology.assetComparison}/>*/}
      <ComplianceRiskSection data={fitektechnology.compliance}/>
      <FinancialSection data={fitektechnology.financial}/>
 
 
    </>
  );
}