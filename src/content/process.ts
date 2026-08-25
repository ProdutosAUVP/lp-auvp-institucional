/** Dobra 05: nosso processo, em três etapas. */

export type ProcessCard = {
  title: string;
  description: string;
};

export const process = {
  eyebrow: "Metodologia",
  title: "Nosso processo.",
  subtitle: "A formação em três etapas, da seleção à autonomia do investidor.",
} as const;

export const admission = {
  step: "1",
  label: "Primeiro passo",
  title: "Tudo começa por uma análise de perfil",
  description:
    "Antes do início, a AUVP avalia o perfil e a situação financeira de cada candidato, garantindo que a formação seja adequada ao seu momento de vida.",
  ctaLabel: "Faça sua Análise de Perfil",
} as const;

export const learning = {
  step: "2",
  label: "Aprendizagem",
  cards: [
    {
      title: "Formação de 8 semanas",
      description:
        "Oito módulos liberados progressivamente, do zero ao avançado.",
    },
    {
      title: "+120 aulas e 8 livros",
      description:
        "Aulas gravadas e livros digitais exclusivos, registrados na Biblioteca Nacional.",
    },
    {
      title: "Plantão ao vivo",
      description: "Dúvidas respondidas ao vivo toda semana.",
    },
  ] satisfies ProcessCard[],
} as const;

export const practice = {
  step: "3",
  label: "Na prática",
  cards: [
    {
      title: "Plataforma de investimentos",
      description: "Ambiente exclusivo para o aluno investir.",
    },
    {
      title: "Open Finance",
      description: "Todos os gastos reunidos em um só lugar.",
    },
    {
      title: "Carteiras recomendadas",
      description: "Sugestões de carteira conforme o perfil do investidor.",
    },
    {
      title: "Orçamento doméstico",
      description: "A ferramenta para a sua organização financeira.",
    },
    {
      title: "Diagrama do Cerrado",
      description: "A metodologia para montar a sua carteira.",
    },
    {
      title: "Cartão de crédito AUVP",
      description: "Mastercard Black, com benefícios exclusivos.",
    },
  ] satisfies ProcessCard[],
} as const;
