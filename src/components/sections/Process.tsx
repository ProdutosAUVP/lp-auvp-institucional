import { ArrowRight, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { admission, learning, practice, process } from "@/content/process";
import type { ProcessCard } from "@/content/process";
import { links } from "@/content/site";

/**
 * Dobra 05. Três etapas empilhadas: admissão em quadro de largura total,
 * aprendizagem e prática em grades de cards.
 */
export function Process() {
  return (
    <Section id="processo" tone="ink" rule>
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
          align="center"
          tone="dark"
        />

        <div className="mt-16 flex flex-col gap-14 lg:gap-16">
          <Reveal>
            <div className="border-ink-line flex flex-col gap-8 border p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
              <div className="flex flex-col gap-4">
                <StepLabel step={admission.step} label={admission.label} />
                <h3 className="text-paper max-w-[20ch] font-[family-name:var(--font-display)] text-3xl leading-tight font-medium md:text-4xl">
                  {admission.title}
                </h3>
                <p className="text-mist max-w-[52ch] text-base leading-relaxed">
                  {admission.description}
                </p>
              </div>
              <Button
                href={links.profileAnalysis}
                variant="outline-light"
                size="lg"
                className="shrink-0 self-start lg:self-auto"
              >
                {admission.ctaLabel}
                <ArrowRight />
              </Button>
            </div>
          </Reveal>

          <Stage
            step={learning.step}
            label={learning.label}
            cards={learning.cards}
            columns="lg:grid-cols-3"
          />

          <Stage
            step={practice.step}
            label={practice.label}
            cards={practice.cards}
            columns="sm:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </Container>
    </Section>
  );
}

function StepLabel({ step, label }: { step: string; label: string }) {
  return (
    <p className="text-gold-light flex items-baseline gap-4">
      <span className="font-[family-name:var(--font-display)] text-3xl leading-none font-medium tracking-tight">
        {step}
      </span>
      <span aria-hidden className="bg-gold-light/50 h-px w-8 self-center" />
      <span className="eyebrow">{label}</span>
    </p>
  );
}

function Stage({
  step,
  label,
  cards,
  columns,
}: {
  step: string;
  label: string;
  cards: readonly ProcessCard[];
  columns: string;
}) {
  return (
    <Reveal className="flex flex-col gap-7">
      <StepLabel step={step} label={label} />
      <ul className={`bg-ink-line grid gap-px ${columns}`}>
        {cards.map((card) => (
          <li
            key={card.title}
            className="bg-ink hover:bg-ink-soft flex flex-col gap-2.5 p-7 transition-colors duration-500"
          >
            <h3 className="text-paper font-[family-name:var(--font-display)] text-xl leading-snug font-medium">
              {card.title}
            </h3>
            <p className="text-mist text-sm leading-relaxed">
              {card.description}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
