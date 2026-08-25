/**
 * Dobra 10: acreditam no nosso trabalho.
 *
 * `logo` aponta para um SVG monocromático em /public/images/brand. Enquanto o
 * arquivo não existe, o carrossel exibe o nome em versalete. Ver docs/ASSETS.md.
 */

export type Endorsement = {
  name: string;
  logo: string | null;
};

export const endorsements = {
  title: "Acreditam no nosso trabalho.",
  items: [
    { name: "CEIA", logo: null },
    { name: "BTG Pactual", logo: null },
    { name: "Governo de Goiás", logo: null },
    { name: "R7", logo: null },
  ] satisfies Endorsement[],
} as const;
