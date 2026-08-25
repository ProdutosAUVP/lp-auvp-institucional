import { ArrowRight } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GroupLabel } from "@/components/ui/GroupLabel";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { initiatives, partnerships, products } from "@/content/initiatives";

/**
 * Dobra 08. Produtos em grade densa; parcerias em faixas horizontais que
 * alternam o lado da fotografia a cada bloco.
 */
export function Initiatives() {
  return (
    <Section id="iniciativas" tone="paper" rule>
      <Container>
        <SectionHeading
          title={initiatives.title}
          subtitle={initiatives.subtitle}
        />

        <div className="mt-14">
          <GroupLabel className="mb-6">{initiatives.productsLabel}</GroupLabel>
          <ul className="border-paper-line bg-paper-line grid gap-px border sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Reveal
                key={product.name}
                as="li"
                delay={(index % 4) * 70}
                className="bg-paper"
              >
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:bg-paper-soft flex h-full flex-col gap-3 p-7 transition-colors duration-500"
                >
                  <h3 className="text-ink font-[family-name:var(--font-display)] text-2xl leading-tight font-medium">
                    {product.name}
                  </h3>
                  <p className="text-graphite flex-1 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <span className="eyebrow text-ink mt-2 flex items-center gap-2 transition-transform duration-500 group-hover:translate-x-1">
                    Saiba mais
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <GroupLabel className="mb-10">
            {initiatives.partnershipsLabel}
          </GroupLabel>
          <div className="divide-paper-line border-paper-line flex flex-col divide-y border-y">
            {partnerships.map((partnership, index) => {
              const reversed = index % 2 === 1;
              return (
                <Reveal
                  key={partnership.name}
                  as="article"
                  className="grid items-center gap-10 py-12 md:py-14 lg:grid-cols-2 lg:gap-16"
                >
                  <Figure
                    src={partnership.photo.src}
                    alt={partnership.photo.alt}
                    caption={partnership.photo.caption}
                    brief={partnership.photo.brief}
                    ratio="4/3"
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className={reversed ? "lg:order-2" : undefined}
                  />

                  <div className="flex flex-col gap-4">
                    <h3 className="text-ink font-[family-name:var(--font-display)] text-3xl leading-tight font-medium md:text-4xl">
                      {partnership.name}
                    </h3>
                    <p className="text-graphite max-w-[54ch] text-base leading-[1.75]">
                      {partnership.description}
                    </p>
                    <a
                      href={partnership.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow text-ink/70 hover:text-ink mt-2 inline-flex w-fit items-center gap-2 transition-colors duration-300"
                    >
                      Saiba mais
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
