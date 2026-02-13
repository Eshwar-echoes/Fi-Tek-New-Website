// app/preview-sections/page.tsx
import { PerformingCapitalSection } from "@/components/sections/PerformingCapitalSection";
// ...import other sections as needed

// Demo/mock data imports (adjust as needed
import { LogoMarqueeSection } from "@/components/sections/LogoMarqueeSection";
import { logoMarqueeContent } from "@/content/global/logos";
import { performingCapitalContent } from "@/content/client/fitek/performingCapital";
import { TabScrollSection } from "@/components/sections/TabScrollSection";
import { tabScrollAnimationData } from "@/content/client/fitek/TabScrollSection";

export default function AllSectionsPreview() {
  return (
    <div className="space-y-24 py-12">
      {/* <SectionCategory title="SolutionsShowcase.tsx">
        <SolutionsShowcase data={productGlobalWealthES.features} />
      </SectionCategory> */}

      <SectionCategory title="LogoMarqueeSection.tsx">
        <LogoMarqueeSection data={logoMarqueeContent} />
      </SectionCategory>

      <SectionCategory title="PerformingCapitalSection.tsx">
        <PerformingCapitalSection data={performingCapitalContent} />
      </SectionCategory>

      <SectionCategory title="MarketInsightsSection.tsx">
        <TabScrollSection data={tabScrollAnimationData} />
      </SectionCategory>

      {/* Add more categories/sections as needed */}
    </div>
  );
}

function SectionCategory({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="p-0">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
