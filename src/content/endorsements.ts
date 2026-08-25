/**
 * Dobra 10: acreditam no nosso trabalho.
 *
 * `logo` aponta para um arquivo em /public/images/brand. Enquanto ele não
 * existe, o carrossel exibe o nome em versalete espaçado, que funciona e é
 * honesto.
 *
 * `origem` guarda o endereço de onde o arquivo pode ser baixado, quando ele já
 * existe em algum lugar. Ver a seção de logos em docs/ASSETS.md para o comando
 * de download e para o padrão que o arquivo precisa atender.
 */

export type Endorsement = {
  name: string;
  logo: string | null;
  /** De onde baixar o arquivo. `null` quando ainda não há fonte conhecida. */
  origem: string | null;
};

export const endorsements = {
  title: "Acreditam no nosso trabalho.",
  items: [
    {
      name: "CEIA",
      logo: null,
      // Não está no repositório da escola. Pedir ao time do CEIA ou à UFG.
      origem: null,
    },
    {
      name: "BTG Pactual",
      logo: null,
      origem: "https://cdn.asupernova.com.br/lp-auvp/vite/btg%20pactual.png",
    },
    {
      name: "Governo de Goiás",
      logo: null,
      origem: "https://cdn.asupernova.com.br/lp-auvp/vite/1-1024x596.webp",
    },
    {
      name: "R7",
      logo: null,
      origem: "https://cdn.asupernova.com.br/lp-auvp/vite/r7-300x257-1.webp",
    },
  ] satisfies Endorsement[],
} as const;
