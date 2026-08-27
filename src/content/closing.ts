/** Dobra de encerramento. */

export const closing = {
  eyebrow: "Próxima turma",
  /**
   * Contagem regressiva da dobra de encerramento.
   *
   * **`target` é um marcador provisório e precisa da data real.** Foi escolhido
   * para a contagem poder ser vista funcionando, não porque a turma abra nesse
   * dia. Formato ISO com fuso explícito: sem o `-03:00` o navegador interpreta
   * a data no fuso de quem acessa, e quem estiver fora do Brasil vê o prazo
   * errado.
   *
   * Precisa ser atualizado a cada turma. Se ficar para trás, ou se virar
   * `null`, a contagem simplesmente não é renderizada: a dobra continua de pé
   * sem ela. Nenhuma página institucional pode mostrar um prazo vencido, e
   * essa é a única proteção contra o esquecimento.
   */
  countdown: {
    target: "2026-09-30T23:59:00-03:00" as string | null,
    /**
     * Curto de propósito: o rótulo da dobra, na coluna ao lado, já diz
     * "Próxima turma". Repetir aqui punha a mesma expressão duas vezes na
     * mesma linha da tela.
     */
    label: "Inscrições encerram em",
  },
  title: "A formação começa por uma conversa honesta sobre o seu momento.",
  ctaLabel: "Faça sua Análise de Perfil",
  photo: {
    /** Arquivado em acervo/fotos/raul-sena-biblioteca.webp */
    src: null as string | null,
    brief: "estúdio com estantes de livros, plano aberto",
  },
} as const;
