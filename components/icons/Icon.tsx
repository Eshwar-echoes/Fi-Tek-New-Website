import type { IconName } from "@/types/icon";
import { IntegrationIcon } from "./IntegrationsIcon";
import { AccuracyIcon } from "./AccuracyIcon";
import { FlexibilityIcon } from "./FlexibilityIcon";
import { FlexibilityAnimatedIcon } from "./FlexibilityAnimatedIcon";
import { CustomerCareAnimatedIcon } from "./CustomerCareIcon";
import { MarketAnalysisAnimatedIcon } from "./MarketAnalysisIcon";
import { AdaptabilityAnimatedIcon } from "./AdaptabilityAnimatedIcon";
import { MissionAnimatedIcon } from "./MissionAnimatedIcon";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({
  name,
  size,
  className,
}: Readonly<IconProps>) {
  switch (name) {
    case "integration":
      return <IntegrationIcon size={size} className={className} />;

    case "accuracy":
      return <AccuracyIcon size={size} className={className} />;

    case "flexibility":
      return <FlexibilityIcon size={size} className={className} />;

    case "flexibility-animated":
        return <FlexibilityAnimatedIcon size={size} className={className} />;

    case "customer-care":
      return <CustomerCareAnimatedIcon size={size} className={className} />;

    case "market-analysis":
        return <MarketAnalysisAnimatedIcon size={size} className={className} />;

    case "adaptability":
        return <AdaptabilityAnimatedIcon size={size} className={className} />;

    case "mission":
        return <MissionAnimatedIcon size={size} className={className} />;
        
    default:
      return null;
  }
}
