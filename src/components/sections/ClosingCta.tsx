import Image from "next/image";
import { ArrowRight, Button } from "@/components/ui/Button";
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
        <Reveal className="flex max-w-[44rem] flex-col items-start gap-7">
          <p className="eyebrow text-yellow">{closing.eyebrow}</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-medium tracking-[-0.01em] text-balance md:text-5xl lg:text-[3.5rem]">
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
      </Container>
    </section>
  );
}
