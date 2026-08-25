/**
 * Dobra 06: comunidade.
 *
 * `photos` aceita `src: null` enquanto a foto definitiva não existe: o
 * componente `Figure` renderiza uma reserva editorial com o briefing visível.
 * Ver docs/ASSETS.md para a lista de fotos pendentes.
 */

export type CommunityPhoto = {
  src: string | null;
  alt: string;
  caption: string;
  /** Briefing exibido na reserva quando `src` é null. */
  brief?: string;
};

export const community = {
  title: "Aqui você não está sozinho.",
  subtitle:
    "Mais de 50 mil alunos formam uma comunidade que vai muito além dos investimentos: um espaço onde dúvidas são respondidas, decisões são discutidas e conexões se formam no ambiente online e presencial.",
  ctaLabel: "Conheça nossos alunos",
  /** A primeira ocupa a largura toda; as outras duas dividem a linha abaixo. */
  photos: [
    {
      src: "/images/private-day-salao.webp",
      alt: "Salão lotado durante o Private Day da AUVP, com alunos brindando.",
      caption: "Private Day 2025 · Confraternização",
      brief: "plano aberto do salão cheio, paisagem 3:2",
    },
    {
      src: null,
      alt: "Palestra do Private Day da AUVP, com auditório lotado.",
      caption: "Private Day 2025 · Palestras",
      brief: "palco em primeiro plano e plateia cheia ao fundo, paisagem 4:3",
    },
    {
      src: null,
      alt: "Alunos da AUVP em conversa durante o intervalo do evento.",
      caption: "Private Day 2025 · Networking",
      brief: "grupo de três a cinco pessoas em conversa, paisagem 4:3",
    },
  ] satisfies CommunityPhoto[],
} as const;
