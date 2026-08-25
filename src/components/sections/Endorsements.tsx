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

          {/*
              Duas colunas em qualquer largura, e não quatro. Numa fileira só,
              cada célula media 134px e o `max-w-full` encolhia as logos largas
              a menos da metade da altura pedida: a restrição era de largura,
              não de altura. Em 2x2 a célula passa de 300px e cada arquivo
              aparece no tamanho natural.
            */}
          <ul className="grid grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-12">
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
