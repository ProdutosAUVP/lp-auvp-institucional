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
  /** Sem barra no final. Sobrescrito por NEXT_PUBLIC_SITE_URL em produção. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://auvp.com.br",
} as const;

export const links = {
  profileAnalysis: "https://auvp.com.br/analise-de-perfil",
  studentArea: "https://areadoaluno.auvp.com.br",
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
