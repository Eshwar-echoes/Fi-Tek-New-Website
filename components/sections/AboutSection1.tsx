import type { AboutSectionData } from "@/types/about1";

interface AboutSectionProps {
  data: AboutSectionData;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="bg-white">

      {/* ================= INTRO ================= */}
      <div className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {data.intro.title}
          </h2>

          <p className="mt-4 text-lg font-medium text-indigo-600">
            {data.intro.subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-600">
            {data.intro.description}
          </p>
        </div>
      </div>

      {/* ================= PRINCIPLES ================= */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h3 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              Our Operating Principles
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {data.principles.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= STRENGTHS ================= */}
      <div className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h3 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              Our Core Strengths
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {data.strengths.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

/* ================= REUSABLE CARD ================= */

interface AboutCardItem {
  title: string;
  description: string;
  icon: string;
}

function Card({ item }: { item: AboutCardItem }) {
  return (
    <div className="group rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
        {renderIcon(item.icon)}
      </div>

      <h4 className="mb-3 text-xl font-semibold text-gray-900">
        {item.title}
      </h4>

      <p className="leading-relaxed text-gray-600">
        {item.description}
      </p>
    </div>
  );
}

/* ================= ICON SWITCH ================= */

function renderIcon(type: string) {
  const base = "h-6 w-6";

  switch (type) {
    case "navigate":
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l7 19-7-4-7 4 7-19z" />
        </svg>
      );

    case "streamline":
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h10M4 18h7" />
        </svg>
      );

    case "value":
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M8 10h8" />
        </svg>
      );

    case "innovation":
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );

    case "secure":
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        </svg>
      );

    case "agile":
      return (
        <svg className={base} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 12h16M12 4v16" />
        </svg>
      );

    default:
      return null;
  }
}
