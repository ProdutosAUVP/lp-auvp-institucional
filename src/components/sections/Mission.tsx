import { Parallax } from "@/components/motion/Parallax";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
      <Container width="wide">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-7">
            <Eyebrow>{mission.eyebrow}</Eyebrow>

            <h2 className="max-w-[16ch] font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-medium tracking-[-0.01em] text-balance md:text-5xl lg:text-[3.5rem]">
              {mission.title}
            </h2>

            <div className="text-graphite flex flex-col gap-6 text-base leading-[1.75] md:text-[1.0625rem]">
              {mission.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <p className="border-gold/60 text-ink border-l-2 pl-6 font-[family-name:var(--font-display)] text-xl leading-[1.5] italic md:text-2xl">
              {mission.principle}
            </p>

            <p className="text-graphite text-base leading-[1.75] md:text-[1.0625rem]">
              {mission.closing}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Parallax distance={56}>
              <Figure
                src={mission.photo.src}
                alt={mission.photo.alt}
                caption={mission.photo.caption}
                ratio="4/3"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </Parallax>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
