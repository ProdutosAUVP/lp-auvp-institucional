import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EndorsementLogo } from "./EndorsementLogo";
import { endorsements } from "@/content/endorsements";

/**
 * Dobra 10: acreditam no nosso trabalho.
 *
 * São quatro apoiadores, e quatro cabem na tela. O carrossel que existia aqui
 * antes resolvia um problema que a página não tem: com poucos itens ele passava
 * a mesma marca duas vezes por ciclo e escondia parte do conjunto a cada
 * instante. Sem ele, os quatro são vistos de uma vez, maiores e em cor própria.
 */
export function Endorsements() {
  return (
    <Section tone="paper" rule compact>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight font-medium text-balance md:text-4xl">
            {endorsements.title}
          </h2>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4 lg:gap-x-8">
            {endorsements.items.map((item) => (
              <li key={item.name} className="flex items-center justify-center">
                <EndorsementLogo name={item.name} logo={item.logo} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
