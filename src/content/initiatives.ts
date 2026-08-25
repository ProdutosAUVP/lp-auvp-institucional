/** Dobra 08 — as iniciativas da AUVP. */

export type Product = {
  name: string;
  description: string;
  href: string;
};

export type Partnership = {
  name: string;
  description: string;
  href: string;
  photo: {
    src: string | null;
    alt: string;
    caption: string;
    brief?: string;
  };
};

export const initiatives = {
  eyebrow: "Ecossistema",
  title: "As iniciativas da AUVP.",
  subtitle: "Os produtos, serviços e parcerias que formam a instituição.",
  productsLabel: "Produtos",
  partnershipsLabel: "Parceria e presença internacional",
} as const;

export const products: Product[] = [
  {
    name: "AUVP Capital",
    description:
      "Consultoria de investimentos com gestão completa do patrimônio. Top 1 no ranking BTG Pactual.",
    href: "https://auvp.com.br/capital",
  },
  {
    name: "AUVP Wealth",
    description:
      "Planejamento patrimonial, sucessório e tributário, com holdings e offshore.",
    href: "https://auvp.com.br/wealth",
  },
  {
    name: "AUVP Seguros",
    description:
      "Seguro de vida como estratégia patrimonial, com as melhores seguradoras do mercado.",
    href: "https://auvp.com.br/seguros",
  },
  {
    name: "AUVP Crédito",
    description: "Crédito sob medida com cotação em mais de 20 instituições.",
    href: "https://auvp.com.br/credito",
  },
  {
    name: "AUVP Câmbio",
    description: "Câmbio e remessas internacionais, com taxas competitivas.",
    href: "https://auvp.com.br/cambio",
  },
  {
    name: "AUVP Corporate",
    description: "Conta PJ, folha de pagamento e automação para a sua empresa.",
    href: "https://auvp.com.br/corporate",
  },
  {
    name: "AUVP Agro",
    description:
      "Educação em seguro de preço e execução de hedge para o agronegócio.",
    href: "https://auvp.com.br/agro",
  },
  {
    name: "AUVP Pro",
    description:
      "Preparatórios para as principais certificações do mercado financeiro.",
    href: "https://auvp.com.br/pro",
  },
];

export const partnerships: Partnership[] = [
  {
    name: "CEIA",
    description:
      "Parceria com o maior centro de pesquisa em inteligência artificial aplicada do país, na UFG. Juntos, levamos educação financeira aos pesquisadores que constroem a tecnologia do Brasil.",
    href: "https://auvp.com.br/ceia",
    photo: {
      src: null,
      alt: "Palestra da AUVP no CEIA, centro de pesquisa em inteligência artificial da UFG.",
      caption: "CEIA · UFG",
      brief: "Dia das palestras no CEIA — paisagem 4:3",
    },
  },
  {
    name: "BTG Pactual",
    description:
      "A AUVP Capital, a consultoria de investimentos da AUVP, opera sobre a infraestrutura do maior banco de investimentos da América Latina, e é reconhecida pelo próprio BTG Pactual como a consultoria nº 1 do país.",
    href: "https://auvp.com.br/capital",
    photo: {
      src: null,
      alt: "Equipe da AUVP Capital recebendo o reconhecimento do BTG Pactual.",
      caption: "Reconhecimento BTG Pactual",
      brief: "Entrega do prêmio no palco — paisagem 4:3",
    },
  },
  {
    name: "Relações internacionais",
    description:
      "Relações com instituições e embaixadas que abrem novas fronteiras de investimento e de negócios, para a AUVP e para os seus membros. No AUVP Atlas, o canal da AUVP, essas relações viram entrevistas com embaixadores e líderes globais sobre novas oportunidades pelo mundo.",
    href: "https://auvp.com.br/atlas",
    photo: {
      src: null,
      alt: "Encontro da liderança da AUVP com um embaixador estrangeiro.",
      caption: "AUVP Atlas · Diplomacia",
      brief: "Aperto de mãos ou entrevista com embaixador — paisagem 4:3",
    },
  },
  {
    name: "AUVP Experience",
    description:
      "Imersão executiva internacional que leva investidores para dentro dos grandes polos de tecnologia e comércio do mundo.",
    href: "https://auvp.com.br/experience",
    photo: {
      src: null,
      alt: "Delegação da AUVP Experience durante a missão à China.",
      caption: "AUVP Experience · Missão China",
      brief: "Delegação em visita técnica — paisagem 4:3",
    },
  },
];
