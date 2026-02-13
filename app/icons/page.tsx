import { IntegrationIcon } from "@/components/icons/IntegrationsIcon";
import { AccuracyIcon } from "@/components/icons/AccuracyIcon";
import { FlexibilityIcon } from "@/components/icons/FlexibilityIcon";
import { FlexibilityAnimatedIcon } from "@/components/icons/FlexibilityAnimatedIcon";
import { AdaptabilityAnimatedIcon } from "@/components/icons/AdaptabilityAnimatedIcon";
import { CustomerCareAnimatedIcon } from "@/components/icons/CustomerCareIcon";
import { MarketAnalysisAnimatedIcon } from "@/components/icons/MarketAnalysisIcon";
import { MissionAnimatedIcon } from "@/components/icons/MissionAnimatedIcon";
import { ArchitectureAnimatedIcon } from "@/components/icons/ArchitectureAnimatedIcon";
import { DataStudioAnimatedIcon } from "@/components/icons/DataStudioAnimatedIcon";
import { DashboardIllustration } from "@/components/illustrations/DashboardIllustration";
import { dashboardIllustrationContent } from "@/content/client/fitek/dashboardIllustration";
import { FeatureCardsSection } from "@/components/sections/FeatureCardsSection";
import { featureCardsContent } from "@/content/client/fitek/featureCards";

const ICONS = [
  { name: "IntegrationIcon", Component: IntegrationIcon },
  { name: "AccuracyIcon", Component: AccuracyIcon },
  { name: "FlexibilityIcon", Component: FlexibilityIcon },
  { name: "FlexibilityAnimatedIcon", Component: FlexibilityAnimatedIcon },
  { name: "ArchitectureAnimatedIcon", Component: ArchitectureAnimatedIcon },
  { name: "AdaptabilityAnimatedIcon", Component: AdaptabilityAnimatedIcon },
  { name: "CustomerCareAnimatedIcon", Component: CustomerCareAnimatedIcon },
  { name: "MarketAnalysisAnimatedIcon", Component: MarketAnalysisAnimatedIcon },
  { name: "MissionAnimatedIcon", Component: MissionAnimatedIcon },
  { name: "DataStudioAnimatedIcon", Component: DataStudioAnimatedIcon },
];

export default function IconsPreviewPage() {
  return (
    <main className="p-10 space-y-8">
      <h1 className="text-2xl font-semibold">Icon Preview</h1>

      <h2 className="text-xl font-semibold mt-10">All Icons Library</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4">
        {ICONS.map(({ name, Component }) => (
          <div key={name} className="flex flex-col items-center gap-2 p-4 border rounded bg-(--surface-base)">
            <Component className="w-12 h-12 text-(--surface-black)" />
            <span className="text-xs text-(--text-secondary) break-all text-center">{name}</span>
          </div>
        ))}
        <div>
          <span className="text-xs text-(--text-secondary) break-all text-center">DashboardIllustration</span>
          <DashboardIllustration data={dashboardIllustrationContent} />
          <FeatureCardsSection data={featureCardsContent} />
            
        </div>
      </div>
    </main>
  );
}
