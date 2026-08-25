import { ArrowRight, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ShieldIcon } from "@/components/ui/ModuleIcon";
import { Reveal } from "@/components/ui/Reveal";
import { guarantee } from "@/content/guarantee";
import { links } from "@/content/site";

/** Dobra 07. Faixa horizontal única: ícone, promessa e CTA. */
export function Guarantee() {
  return (
    <section className="border-paper-line bg-paper border-y">
      <Container className="py-14 md:py-16">
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-14">
          <ShieldIcon className="text-gold h-11 w-11 shrink-0" />

          <div className="flex flex-col gap-2.5 lg:flex-1">
            <h2 className="text-ink font-[family-name:var(--font-display)] text-2xl leading-tight font-medium md:text-3xl">
              {guarantee.title}
            </h2>
            <p className="text-graphite max-w-[62ch] text-base leading-relaxed">
              {guarantee.description}
            </p>
          </div>

          <Button
            href={links.profileAnalysis}
            variant="outline"
            size="lg"
            className="shrink-0"
          >
            {guarantee.ctaLabel}
            <ArrowRight />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
