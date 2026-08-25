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
    src: "/images/private-day-palco.webp" as string | null,
    alt: "Conversa no palco do Private Day da AUVP, diante da plateia.",
    /**
     * O arquivo atual é o mesmo negativo que abre a dobra da comunidade, em
     * recorte e tratamento diferentes, e tem 1616px de largura: numa dobra de
     * sangria total isso fica no limite. É a última fotografia da página que
     * ainda pede substituição. Ver docs/ASSETS.md.
     */
    brief:
      "plano aberto do auditório ou da sala de aula, escuro e quente, com vazio no alto para a assinatura, paisagem 16:9 com 2400px ou mais",
  },
} as const;
