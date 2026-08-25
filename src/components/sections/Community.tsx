import { ArrowRight, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { community } from "@/content/community";
import { links } from "@/content/site";

/** Dobra 06. Prova social pela fotografia dos encontros presenciais. */
export function Community() {
  return (
    <Section id="comunidade" tone="warm" rule>
      <Container width="wide">
        <SectionHeading
          eyebrow={community.eyebrow}
          title={community.title}
          subtitle={community.subtitle}
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {community.photos.map((photo, index) => (
            <Reveal key={photo.caption} delay={index * 110}>
              <Figure
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                brief={photo.brief}
                ratio="3/4"
                sizes="(min-width: 768px) 33vw, 100vw"
                className={index === 1 ? "md:mt-10" : undefined}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href={links.students} variant="outline" size="lg">
            {community.ctaLabel}
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
