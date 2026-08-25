/** Dobra 03: missão. */

export const mission = {
  title: "O Brasil merece educação financeira de verdade.",
  paragraphs: [
    "A maioria dos brasileiros nunca teve acesso a um ensino financeiro honesto e de qualidade. Foi para mudar essa realidade que a AUVP nasceu, em 2020, com a missão de transformar o Brasil em um país de investidores.",
    "O que começou como uma escola de investimentos evoluiu para um ecossistema financeiro completo, que acompanha o investidor em todas as frentes da vida financeira, da educação à gestão de patrimônio. Essa trajetória é reforçada pela AUVP Capital, reconhecida pelo BTG Pactual como a consultoria nº 1 do país por dois anos consecutivos.",
  ],
  photo: {
    src: "/images/sede-auvp-capital.webp" as string | null,
    alt: "Fachada da sede da AUVP, em Goiânia.",
    caption: "Sede, Goiânia, Goiás",
    /**
     * Briefing da foto que substitui esta. A fachada resolve, mas comunica
     * escritório; o interior comunica escola. Ver docs/ASSETS.md.
     */
    brief:
      "interior da sede: biblioteca, auditório ou sala de aula, paisagem 4:3",
  },
} as const;
