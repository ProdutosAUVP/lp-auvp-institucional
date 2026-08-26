import { Parallax } from "@/components/motion/Parallax";
import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { mission } from "@/content/mission";

/**
 * Dobra 03. Duas colunas: à esquerda o texto institucional; à direita a
 * fotografia da sede, um pouco mais larga e alinhada ao topo do título.
 */
export function Mission() {
  return (
    <Section id="missao" tone="warm" rule>
      <Container>
        <div className="grid items-stretch gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-7">
            <h2 className="max-w-[16ch] font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-medium tracking-[-0.01em] text-balance md:text-5xl lg:text-[3.5rem]">
              {mission.title}
            </h2>

            <div className="text-graphite flex flex-col gap-6 text-base leading-[1.75] md:text-[1.0625rem]">
              {mission.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/*
            A partir de `lg` a fotografia larga a proporção fixa e passa a ter a
            altura da coluna de texto. Em 4:3 ela terminava bem antes do último
            parágrafo, e a dobra fechava com um degrau de mais de 100px na borda
            de baixo. O `object-cover` resolve o recorte, e a fachada aguenta
            perder altura porque o assunto dela é horizontal.
          */}
          <Reveal delay={120} className="lg:h-full">
            <Parallax distance={56} className="lg:h-full">
              <Figure
                src={mission.photo.src}
                alt={mission.photo.alt}
                caption={mission.photo.caption}
                brief={mission.photo.brief}
                ratio="4/3"
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="lg:h-full"
                frameClassName="lg:aspect-auto lg:min-h-0 lg:flex-1"
              />
            </Parallax>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
