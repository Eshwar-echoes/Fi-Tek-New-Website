import { Container } from "../layout/Container";
import { SectionReveal } from "../motion/SectionReveal";

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: Readonly<PageHeroProps>) {
  return (
    <SectionReveal>
      <section
        className="relative flex items-center justify-center min-h-[60vh] max-h-[80vh] bg-(--surface-base) overflow-hidden"
        aria-label={title}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.9,
            }}
            aria-hidden
          />
        )}
        <Container>
          <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-(--text-inverse) mb-4">{title}</h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-(--text-light) max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        </Container>
      </section>
    </SectionReveal>
  );
}
