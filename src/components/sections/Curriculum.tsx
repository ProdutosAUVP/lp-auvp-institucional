import { ArrowRight, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ModuleIcon } from "@/components/ui/ModuleIcon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { curriculum, modules } from "@/content/curriculum";
import { links } from "@/content/site";

/**
 * Dobra 04. Grade de oito módulos em duas fileiras de quatro.
 *
 * A descrição aparece no hover (desktop) e permanece sempre visível no toque:
 * `group-hover` some em telas sem ponteiro fino, por isso a descrição é
 * revelada por `@media (hover: hover)` em vez de depender só do JS.
 */
export function Curriculum() {
  return (
    <Section id="conteudo" tone="paper" rule>
      <Container>
        <SectionHeading
          eyebrow={curriculum.eyebrow}
          title={curriculum.title}
          subtitle={curriculum.subtitle}
          align="center"
          className="mx-auto"
        />

        <ul className="border-paper-line bg-paper-line mt-16 grid gap-px border sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <Reveal
              key={module.number}
              as="li"
              delay={(index % 4) * 80}
              className="group bg-paper hover:bg-paper-soft relative flex min-h-[11.5rem] flex-col justify-between gap-8 p-7 transition-colors duration-500"
            >
              <div className="flex items-start justify-between gap-4">
                <ModuleIcon
                  name={module.icon}
                  className="text-ink/45 group-hover:text-ink h-9 w-9 transition-colors duration-500"
                />
                <span className="eyebrow text-graphite/50">
                  {module.number === "Bônus"
                    ? "Bônus"
                    : `Módulo ${module.number}`}
                </span>
              </div>

              <div className="flex flex-col">
                <h3 className="text-ink font-[family-name:var(--font-display)] text-2xl leading-tight font-medium">
                  {module.title}
                </h3>
                {/* A descrição colapsa para altura zero, de modo que os títulos
                    da fileira alinhem pela base mesmo com nomes de tamanhos
                    diferentes. No toque ela já vem aberta. */}
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                  <p className="text-graphite overflow-hidden text-sm leading-relaxed">
                    <span className="block pt-3">{module.description}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <Button href={links.training} variant="outline" size="lg">
            {curriculum.ctaLabel}
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
