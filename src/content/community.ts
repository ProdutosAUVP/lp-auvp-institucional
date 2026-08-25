/**
 * Dobra 06 — comunidade.
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
  eyebrow: "Comunidade",
  title: "Aqui você não está sozinho.",
  subtitle:
    "Mais de 50 mil alunos formam uma comunidade que vai muito além dos investimentos: um espaço onde dúvidas são respondidas, decisões são discutidas e conexões se formam no ambiente online e presencial.",
  ctaLabel: "Conheça nossos alunos",
  photos: [
    {
      src: null,
      alt: "Alunos reunidos no Private Day da AUVP.",
      caption: "Private Day 2025 · Confraternização",
      brief: "Plano aberto do salão cheio — retrato 3:4",
    },
    {
      src: null,
      alt: "Palestra do Private Day da AUVP, com auditório lotado.",
      caption: "Private Day 2025 · Palestras",
      brief: "Palco e plateia — paisagem 16:9",
    },
    {
      src: null,
      alt: "Alunos da AUVP em conversa durante o intervalo do evento.",
      caption: "Private Day 2025 · Networking",
      brief: "Grupo em conversa — retrato 3:4",
    },
  ] satisfies CommunityPhoto[],
} as const;
