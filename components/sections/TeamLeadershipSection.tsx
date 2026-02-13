import { Container } from "../layout/Container";
import { SectionReveal } from "../motion/SectionReveal";

import type { TeamMember } from "@/content/client/fitek/about/team";

export function TeamLeadershipSection({ members }: Readonly<{ members: TeamMember[] }>) {
  if (!members.length) return null;
  const leader = members[0];
  const others = members.slice(1);
  return (
    <SectionReveal>
      <section className="py-24 bg-(--surface-base)">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Featured Leader */}
            <div className="shrink-0 w-full md:w-1/2 flex justify-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="rounded-2xl object-cover w-full max-w-xs md:max-w-md h-85 md:h-105 shadow-xl border-2 border-(--border-strong) bg-(--surface-base)"
              />
            </div>
            {/* Info */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mb-2">{leader.name}</h2>
              <p className="text-lg text-(--text-secondary) mb-6">{leader.title}</p>
              {/* Optionally add minimal copy here if desired */}
              {others.length > 0 && (
                <div className="mt-8 w-full">
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-2">Other Leadership</h3>
                  <ul className="space-y-2">
                    {others.map((m) => (
                      <li key={m.id} className="text-base text-(--text-secondary)">
                        <span className="font-medium text-(--text-primary)">{m.name}</span> — {m.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </SectionReveal>
  );
}
