import { Container } from "../layout/Container";
import { Button } from "../ui/button";

interface PrimaryCTAData {
  title: string;
  intro: string[];
  actions: { primary: string; secondary: string };
  microcopy: string;
}

export function PrimaryCTASection({
  data,
}: Readonly<{ data: PrimaryCTAData }>) {
  return (
    <section className="py-32 bg-(--surface-alt) text-(--text-inverse)">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            {data.title}
          </h2>

          {data.intro.map((line: string) => (
            <p key={line} className="text-base text-(--text-light) leading-relaxed">
              {line}
            </p>
          ))}

          <div className="flex gap-4 pt-4">
            <Button intent="primary" context="inverse">
              {data.actions.primary}
            </Button>

            <Button intent="secondary" context="inverse">
              {data.actions.secondary}
            </Button>
          </div>
                   
          <p className="text-sm text-(--text-muted) pt-4">
            {data.microcopy}
          </p>
        </div>
      </Container>
    </section>
  );
}
