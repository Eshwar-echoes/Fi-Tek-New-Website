import type { FeatureHeroSectionData } from "@/types/featureHero1";

interface FeatureHeroSectionProps {
  data: FeatureHeroSectionData;
}

export function FeatureHeroSection({ data }: FeatureHeroSectionProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* TOP BORDER */}
        <div className="mb-16 border-t-4 border-black" />

        {/* EYEBROW */}
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-600">
          {data.eyebrow}
        </p>

        {/* HEADLINE */}
        <h2 className="mx-auto mt-6 max-w-5xl text-center text-4xl font-extrabold leading-tight tracking-tight text-black md:text-6xl">
          {data.headline}
        </h2>

        {/* FIRST DIVIDER */}
        <div className="mt-20 border-t border-black/20" />

        {/* FIRST SUBHEADING */}
        <h3 className="mt-16 text-2xl font-semibold text-black md:text-3xl">
          {data.firstSectionTitle}
        </h3>

        {/* FIRST FEATURES */}
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {data.features.map((item) => (
            <div key={item.id}>
              <h4 className="text-lg font-semibold text-black">
                {item.title}
              </h4>

              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* SECOND DIVIDER */}
        <div className="mt-20 border-t border-black/20" />

        {/* SECOND SUBHEADING */}
        <h3 className="mt-16 text-2xl font-semibold text-black md:text-3xl">
          {data.secondSectionTitle}
        </h3>

        {/* SECOND FEATURES */}
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {data.secondFeatures.map((item) => (
            <div key={item.id}>
              <h4 className="text-lg font-semibold text-black">
                {item.title}
              </h4>

              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
