import Image from "next/image";
import { ArrowRight, Button } from "@/components/ui/Button";
import { ClassCountdown } from "@/components/sections/ClassCountdown";
import { Container } from "@/components/ui/Container";
import { BackdropReserve } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { closing } from "@/content/closing";
import { links, site } from "@/content/site";
import { asset } from "@/lib/asset";

/**
 * Encerramento. Não consta do roteiro original, mas uma página institucional
 * longa precisa devolver o leitor a uma ação depois do FAQ. Sem ele, a
 * jornada termina no rodapé.
 */
export function ClosingCta() {
  return (
    <section className="bg-ink text-paper relative isolate overflow-hidden">
      {closing.photo.src ? (
        <Image
          src={asset(closing.photo.src)}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
      ) : (
        <BackdropReserve brief={closing.photo.brief} />
      )}
      <div
        aria-hidden
        className="from-ink via-ink/92 to-ink/70 absolute inset-0 bg-gradient-to-r"
      />

      <Container className="relative py-24 md:py-32">
        {/*
          Duas colunas a partir de `lg`: o prazo de um lado, o convite do outro.
          O contador estava empilhado abaixo do texto e ali competia com o botão
          pelo mesmo lugar na leitura. Numa coluna própria ele vira o dado que
          justifica o clique, e não mais um bloco na fila.

          A ordem do DOM é a ordem visual nos dois casos, sem `order` para
          inverter coluna: empilhado, o contador abre a dobra; em duas colunas,
          ele é o da esquerda. Trocar com `order` deixaria quem navega por
          teclado ou leitor de tela numa sequência diferente da que vê.
        */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <Reveal>
            <ClassCountdown />
          </Reveal>

          <Reveal delay={90} className="flex flex-col items-start gap-7">
            <p className="eyebrow text-yellow">{closing.eyebrow}</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-medium tracking-[-0.01em] text-balance md:text-5xl">
              {closing.title}
            </h2>
            <p className="text-mist max-w-[52ch] text-base leading-relaxed md:text-lg">
              {site.shortName} avalia o perfil de cada candidato antes da
              matrícula. Leva poucos minutos e não custa nada.
            </p>

            <Button
              href={links.profileAnalysis}
              variant="yellow"
              size="lg"
              className="mt-2"
            >
              {closing.ctaLabel}
              <ArrowRight />
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
