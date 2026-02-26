export type GwesSegmentIconId =
  | "portfolio-management"
  | "account-administration"
  | "fiduciary-duties"
  | "operations"
  | "global-family-office"
  | "reporting-analytics"
  | "investment-planning"
  | "client-onboarding";

export interface GwesSegmentContent {
  id: GwesSegmentIconId;
  ariaLabel: string;
  rotation: number;
  position: {
    x: number;
    y: number;
  };
  labels: string[];
}

export interface GwesArchitectureSectionData {
  title: string;
  description: string;
  centerLabel: string;
  segments: GwesSegmentContent[];
}
