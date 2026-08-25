import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { endorsements } from "@/content/endorsements";

/**
 * Dobra 10. Carrossel contínuo de logos.
 *
 * A lista é duplicada e o trilho translada -50%, o que produz um laço perfeito
 * sem JavaScript. A cópia recebe `aria-hidden` para não duplicar a leitura em
 * leitores de tela, e a animação para sob `prefers-reduced-motion`.
 */
export function Endorsements() {
  const items = endorsements.items;

  return (
    <Section
      tone="paper"
      rule
      className="overflow-hidden py-16 md:py-20 lg:py-24"
    >
      <Container>
        <h2 className="text-ink text-center font-[family-name:var(--font-display)] text-3xl leading-tight font-medium md:text-4xl">
          {endorsements.title}
        </h2>
      </Container>

      <div
        className="relative mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        style={{ ["--marquee-duration" as string]: "38s" }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="animate-marquee flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={`${copy}-${item.name}`}
                className="flex h-16 w-[16rem] shrink-0 items-center justify-center px-8 md:w-[20rem]"
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={200}
                    height={64}
                    className="h-9 w-auto opacity-55 grayscale"
                  />
                ) : (
                  <span className="eyebrow text-graphite/45 text-lg tracking-[0.24em]">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Section>
  );
}
