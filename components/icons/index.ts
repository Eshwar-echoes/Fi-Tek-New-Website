import { IntegrationIcon } from "./IntegrationsIcon";
import { AccuracyIcon } from "./AccuracyIcon";
import { FlexibilityIcon } from "./FlexibilityIcon";

export const ICONS = {
  integration: IntegrationIcon,
  accuracy: AccuracyIcon,
  flexibility: FlexibilityIcon,
} as const;

export type IconName = keyof typeof ICONS;
