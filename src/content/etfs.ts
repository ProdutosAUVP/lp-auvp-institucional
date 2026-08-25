/** Dobra 09 — nossos ETFs. */

export type Etf = {
  ticker: string;
  category: string;
  description: string;
  href: string;
};

export const etfsSection = {
  eyebrow: "Gestão",
  title: "Nossos ETFs.",
  subtitle:
    "Fundos de índice construídos com método, não com achismo. Quatro estratégias para acompanhar a evolução da carteira do investidor, cada uma com regras claras e transparentes.",
  ctaLabel: "Conheça todos os ETFs da AUVP",
  photo: {
    src: "/images/raul-sena-ipo-auvp11.webp",
    alt: "Raul Sena discursa na cerimônia de listagem de um ETF da AUVP na B3.",
    caption: "Cerimônia de listagem na B3",
  },
} as const;

export const etfs: Etf[] = [
  {
    ticker: "AUVP11",
    category: "Ações",
    description:
      "Empresas sólidas, selecionadas por fundamentos consistentes e estrutura de capital saudável.",
    href: "https://auvp.com.br/etfs/auvp11",
  },
  {
    ticker: "AUPO11",
    category: "Renda Fixa",
    description:
      "Carteira de renda fixa com controle de prazo, critérios objetivos e rebalanceamento periódico.",
    href: "https://auvp.com.br/etfs/aupo11",
  },
  {
    ticker: "AREA11",
    category: "Fundos Imobiliários",
    description:
      "Alocação organizada em fundos imobiliários, com foco em distribuição de renda mensal.",
    href: "https://auvp.com.br/etfs/area11",
  },
  {
    ticker: "ABTC11",
    category: "Bitcoin + Renda Fixa",
    description:
      "Combinação dinâmica entre Bitcoin e renda fixa, com alocação baseada no sentimento do mercado.",
    href: "https://auvp.com.br/etfs/abtc11",
  },
];
