/** Dobra 01: hero. */

export const hero = {
  positioning: "A maior escola de investimentos do Brasil",
  /**
   * O título vem partido em dois porque a dobra o distribui nos cantos de
   * baixo, um em cada ponta da mesma linha de base. Lido em voz alta continua
   * sendo uma frase só: "Aprenda a investir. Viva com liberdade."
   */
  headline: {
    left: ["Aprenda", "a investir."],
    right: ["Viva com", "liberdade."],
  },
  support:
    "A AUVP forma investidores independentes, capazes de tomar suas próprias decisões financeiras e construir patrimônio com autonomia. Uma instituição criada para mudar a relação do brasileiro com o dinheiro.",
  ctaLabel: "Estude com a AUVP",
  photo: {
    src: "/images/private-day-plateia.webp" as string | null,
    alt: "Raul Sena de braços abertos no palco, diante do auditório lotado no Private Day da AUVP.",
    /**
     * O quadro é simétrico e o sujeito fica no eixo central, que é justamente
     * a faixa onde esta dobra não põe texto: o título ocupa as duas pontas e o
     * apoio fica na base. Por isso o arquivo entra sem recorte, em 3:2, e quem
     * decide o corte é o `object-cover`, conforme a altura da janela.
     */
    brief:
      "plano aberto do auditório cheio, escuro e quente, com o eixo central livre de texto, paisagem 3:2 com 2400px ou mais",
  },
} as const;
