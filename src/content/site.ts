/**
 * Dados institucionais da AUVP.
 *
 * Fonte única de verdade para nome, contatos, links externos e metadados de
 * SEO. Ao alterar qualquer URL aqui, confira também `src/content/navigation.ts`
 * e o JSON-LD em `src/app/layout.tsx`.
 */

export const site = {
  name: "AUVP",
  legalName: "AUVP Educação Financeira",
  shortName: "AUVP Escola de Investimentos",
  tagline: "A maior escola de investimentos do Brasil",
  description:
    "A AUVP forma investidores independentes, capazes de tomar suas próprias " +
    "decisões financeiras e construir patrimônio com autonomia. Uma instituição " +
    "criada para mudar a relação do brasileiro com o dinheiro.",
  foundingYear: 2020,
  founder: "Raul Sena",
  locale: "pt-BR",
  /**
   * URL canônica, sem barra no final. Precisa incluir o `basePath` quando o
   * site é servido sob subcaminho. É daqui que saem canonical, Open Graph,
   * sitemap.xml e robots.txt. Definida pelo workflow de deploy.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://produtosauvp.github.io/lp-auvp-institucional",
} as const;

export const links = {
  profileAnalysis: "https://auvp.com.br/analise-de-perfil",
  studentArea: "https://areadoaluno.auvp.com.br",
  /**
   * Hoje nada na página aponta para cá: os botões que levavam ao treinamento
   * saíram da dobra do conteúdo programático. A URL fica registrada porque é
   * um endereço real da instituição, não código morto.
   */
  training: "https://auvp.com.br/treinamento",
  students: "https://auvp.com.br/alunos",
  etfs: "https://auvp.com.br/etfs",
  whatsapp: "https://wa.me/5562993270044",
  instagram: "https://www.instagram.com/auvp/",
  youtube: "https://www.youtube.com/@investidorsardinha",
  linkedin: "https://www.linkedin.com/company/auvp/",
} as const;

export const contact = {
  whatsappLabel: "Falar com a AUVP no WhatsApp",
  address: "Goiânia · Goiás · Brasil",
  email: "contato@auvp.com.br",
} as const;
