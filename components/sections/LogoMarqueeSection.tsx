"use client";

import { Container } from "@/components/layout/Container";
import type { LogoMarqueeContent } from "@/types/logo";

interface Props {
  data: LogoMarqueeContent;
}
function LogoItem({ logo }: Readonly<{ logo: { src: string; name: string; href?: string } }>) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center"
    >
      <img
        src={logo.src}
        alt={logo.name}
        className="
          h-10 w-auto
          opacity-70 grayscale
          transition-all duration-300
          hover:opacity-100 hover:grayscale-0
        "
        loading="lazy"
      />
    </a>
  );
}


export function LogoMarqueeSection({ data }: Readonly<Props>) {
  return (
    <section className="py-20 bg-(--surface-base) overflow-hidden">
      <Container>
        {data.title && (
          <h3 className="mb-10 text-center text-sm font-medium uppercase tracking-wide text-(--text-muted)">
            {data.title}
          </h3>
        )}
      </Container>

      {/* Marquee */}
      <div className="relative overflow-hidden marquee-wrapper">
        <div className="marquee-track">
            <div className="marquee flex gap-16">
            {data.logos.map((logo) => (
                <LogoItem key={logo.id} logo={logo} />
            ))}
            </div>

            {/* duplicate */}
            <div className="marquee flex gap-16">
            {data.logos.map((logo) => (
                <LogoItem key={`${logo.id}-dup`} logo={logo} />
            ))}
            </div>
        </div>
        </div>



    </section>
  );
}
