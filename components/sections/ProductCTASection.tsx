// ProductCTASection: Smooth animated CTA
import { Container } from "../layout/Container";
import { Button } from "../ui/button";

export interface ProductCTASectionData {
  headline: string;
  description: string;
  cta: { label: string; href: string };
}

export function ProductCTASection({
  data,
}: {
  readonly data: ProductCTASectionData;
}) {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 bg-(--brand-primary)">
      {/* Subtle animated gradient overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-linear-to-br
          from-white/10
          via-transparent
          to-black/10
          opacity-0
          transition-opacity duration-700
          group-hover:opacity-100
        "
      />

      <Container>
        <div
          className="
            group
            mx-auto
            flex max-w-3xl flex-col items-center
            text-center gap-6
            transition-all duration-500 ease-out
            hover:-translate-y-1
          "
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-inverse)">
            {data.headline}
          </h2>

          {/* Description */}
          <p className="text-lg text-(--text-light)">
            {data.description}
          </p>

          {/* CTA */}
          <div
            className="
              mt-4
              transition-all duration-300 ease-out
              group-hover:-translate-y-0.5
            "
          >
            <Button
              asChild
              intent="secondary"
              context="default"
              className="
                transition-all duration-300 ease-out
                hover:shadow-xl
                hover:scale-[1.03]
                active:scale-[0.98]
              "
            >
              <a href={data.cta.href}>{data.cta.label}</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
