import { Container } from "../layout/Container";
import { SectionReveal } from "../motion/SectionReveal";

import type { TeamMember } from "@/content/client/fitek/about/team";

export function TeamManagementSection({ members }: Readonly<{ members: TeamMember[] }>) {
  return (
    <SectionReveal>
      <section className="py-24 bg-(--surface-muted)">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) mb-10 text-center">Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex flex-col rounded-lg bg-(--surface-base) border border-(--border-subtle) shadow-sm overflow-hidden h-full min-h-85"
              >
                <div className="relative w-full aspect-4/3 bg-(--surface-muted)">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
                  <h3 className="text-lg font-semibold text-(--text-primary) mb-1">{member.name}</h3>
                  <p className="text-sm text-(--text-secondary)">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SectionReveal>
  );
}
