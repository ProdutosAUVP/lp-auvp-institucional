import Image from "next/image";
import { HeroBackdrop, HeroForeground } from "@/components/motion/HeroScroll";
import { LineReveal } from "@/components/motion/LineReveal";
import { hero } from "@/content/hero";
import { links } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Dobra 01. Fotografia em tinta profunda, texto centralizado e um único CTA.
 * A hierarquia é a de uma página de reitoria: posicionamento, promessa, apoio.
 */
export function Hero() {
  return (
    <section
      id="principal"
      className="bg-ink text-paper relative isolate flex min-h-[92svh] items-center overflow-hidden pt-32 pb-24"
    >
      <HeroBackdrop>
        <Image
          src={hero.photo.src}
          alt={hero.photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] opacity-55"
        />
      </HeroBackdrop>
      {/* Véus sobrepostos: garantem contraste do texto sobre qualquer recorte. */}
      <div
        aria-hidden
        className="from-ink/80 via-ink/65 to-ink absolute inset-0 -z-0 bg-gradient-to-b"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(12,26,42,0.72)_78%)]"
      />

      <HeroForeground>
        <Container>
          <div className="mx-auto flex max-w-[52rem] flex-col items-center gap-8 text-center">
            <p className="eyebrow text-gold-light flex items-center gap-4">
              <span aria-hidden className="bg-gold-light/50 h-px w-10" />
              {hero.positioning}
              <span aria-hidden className="bg-gold-light/50 h-px w-10" />
            </p>

            <LineReveal
              as="h1"
              lines={hero.headline}
              className="font-[family-name:var(--font-display)] text-[2.75rem] leading-[1.04] font-medium tracking-[-0.015em] text-balance sm:text-6xl lg:text-[4.5rem]"
            />

            <p className="text-mist text-balance-pretty max-w-[42rem] text-base leading-relaxed md:text-lg">
              {hero.support}
            </p>

            <Button
              href={links.profileAnalysis}
              variant="outline-light"
              size="lg"
              className="mt-2"
            >
              {hero.ctaLabel}
            </Button>
          </div>
        </Container>
      </HeroForeground>
    </section>
  );
}
