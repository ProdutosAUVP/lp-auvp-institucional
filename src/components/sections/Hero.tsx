import Image from "next/image";
import { HeroBackdrop, HeroForeground } from "@/components/motion/HeroScroll";
import {
  CLASSE_ANCORA_HERO,
  ID_ANCORA_HERO,
} from "@/components/layout/heroHandoff";
import { AuvpLettering } from "@/components/ui/AuvpLettering";
import { BackdropReserve } from "@/components/ui/Figure";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/hero";
import { links, site } from "@/content/site";
import { asset } from "@/lib/asset";

/**
 * Dobra 01.
 *
 * A abertura é uma capa, não um bloco de texto centralizado: fotografia em
 * sangria total, a assinatura da marca em corpo arquitetônico no alto e o
 * título partido nas duas pontas da linha de base. A referência aprovada é a
 * abertura da Lionheart, e o recurso é o mesmo que Yale e Oxford usam em
 * página de reitoria: o nome da instituição ocupa o quadro e a fotografia
 * responde por todo o resto.
 *
 * **Esta dobra não usa o `Container`.** É a única da página que não usa, e é de
 * propósito: aqui as réguas são a moldura da capa, e moldura que para a 152px
 * da borda não é moldura, é caixa. Elas correm de ponta a ponta com uma margem
 * curta. Da segunda dobra em diante a grade volta a valer, sem exceção.
 *
 * O título fica embaixo por um motivo prático: é onde a fotografia costuma ser
 * mais escura e onde o véu inferior garante contraste, seja qual for a foto
 * que entrar no lugar desta.
 */
export function Hero() {
  return (
    <section
      id="principal"
      className="bg-ink text-paper relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <HeroBackdrop>
        {hero.photo.src ? (
          <Image
            src={asset(hero.photo.src)}
            alt={hero.photo.alt}
            fill
            priority
            sizes="100vw"
            /*
              Em retrato o quadro escala pela altura e sobra corte lateral: o
              centro cai no vão entre as duas poltronas, que é justamente onde
              não há ninguém. Puxar para 70% mantém o convidado e a poltrona
              amarela dentro da tela estreita.
            */
            className="object-cover object-[70%_center] md:object-center"
          />
        ) : (
          <BackdropReserve brief={hero.photo.brief} />
        )}
      </HeroBackdrop>

      {/*
        Três véus sobrepostos. O primeiro escurece topo e base, que é onde há
        texto; o segundo puxa a esquerda, onde o título começa; o terceiro
        fecha o encontro com a dobra seguinte. Juntos garantem o contraste do
        texto sobre qualquer recorte que venha a substituir a fotografia.
      */}
      <div
        aria-hidden
        className="from-ink/70 via-ink/30 to-ink/95 absolute inset-0 bg-gradient-to-b"
      />
      <div
        aria-hidden
        className="from-ink/60 absolute inset-0 bg-gradient-to-r to-transparent"
      />
      <div
        aria-hidden
        className="to-ink absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent"
      />

      <HeroForeground className="relative z-10 flex min-h-[100svh] flex-col pt-20 pb-10 md:pt-24 md:pb-16">
        <div className="flex flex-1 flex-col px-6 md:px-10 lg:px-14">
          {/* Assinatura. São os contornos do arquivo da marca, não a palavra
              "AUVP" composta numa fonte: o A da AUVP é um V invertido.
              Fica parada: seguir o ponteiro dava à marca um comportamento de
              enfeite, e a assinatura da instituição não é enfeite. */}
          <AuvpLettering className="text-paper w-full max-w-[15rem] sm:max-w-[19rem] lg:max-w-[24rem]" />

          <div className="mt-6 md:mt-7">
            {/* A barra fixa pousa aqui enquanto o hero está em tela, com os
                itens do menu apoiados na régua logo abaixo. A âncora não tem
                conteúdo: ela só reserva a altura. Ver `useHeroDock`. */}
            <div
              id={ID_ANCORA_HERO}
              aria-hidden
              className={CLASSE_ANCORA_HERO}
            />

            <span aria-hidden className="bg-paper/25 block h-px w-full" />

            <div className="text-paper/60 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-4">
              <p className="eyebrow">{hero.positioning}</p>
              <p className="eyebrow">Fundada em {site.foundingYear}</p>
            </div>
          </div>

          {/* Empurra o título para a base sem prender a dobra a uma altura fixa. */}
          <div className="min-h-16 flex-1" />

          <h1 className="grid gap-y-3 sm:grid-cols-2 sm:items-end sm:gap-x-10">
            <span className="font-[family-name:var(--font-display)] text-[2.25rem] leading-[1.02] font-medium tracking-[-0.015em] sm:text-5xl lg:text-[3.75rem]">
              {hero.headline.left.map((linha) => (
                <span key={linha} className="block">
                  {linha}
                </span>
              ))}
            </span>
            <span className="font-[family-name:var(--font-display)] text-[2.25rem] leading-[1.02] font-medium tracking-[-0.015em] sm:text-right sm:text-5xl lg:text-[3.75rem]">
              {hero.headline.right.map((linha) => (
                <span key={linha} className="block">
                  {linha}
                </span>
              ))}
            </span>
          </h1>

          <div className="border-paper/20 mt-8 grid gap-6 border-t pt-6 md:mt-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-14 md:pt-7">
            <p className="text-mist max-w-[48rem] text-sm leading-relaxed md:text-base">
              {hero.support}
            </p>
            <Button href={links.profileAnalysis} variant="yellow" size="lg">
              {hero.ctaLabel}
            </Button>
          </div>
        </div>
      </HeroForeground>
    </section>
  );
}
