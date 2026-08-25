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
          title={community.title}
          subtitle={community.subtitle}
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 flex flex-col gap-6">
          <Reveal>
            <Figure
              src={community.photos[0].src}
              alt={community.photos[0].alt}
              caption={community.photos[0].caption}
              brief={community.photos[0].brief}
              ratio="3/2"
              sizes="(min-width: 1024px) 88vw, 100vw"
              priority
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {community.photos.slice(1).map((photo, index) => (
              <Reveal key={photo.caption} delay={index * 110}>
                <Figure
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.caption}
                  brief={photo.brief}
                  ratio="4/3"
                  sizes="(min-width: 768px) 44vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
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
