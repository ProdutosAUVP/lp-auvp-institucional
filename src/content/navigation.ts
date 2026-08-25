/** Itens da barra fixa. `href` com # aponta para o id de uma dobra. */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Principal", href: "#principal" },
  { label: "Nosso processo", href: "#processo" },
  { label: "Dúvidas frequentes", href: "#faq" },
  { label: "Consultoria especializada", href: "#iniciativas" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "A instituição",
    items: [
      { label: "Missão", href: "#missao" },
      { label: "Conteúdo programático", href: "#conteudo" },
      { label: "Nosso processo", href: "#processo" },
      { label: "Comunidade", href: "#comunidade" },
    ],
  },
  {
    title: "Iniciativas",
    items: [
      { label: "AUVP Capital", href: "#iniciativas" },
      { label: "AUVP Wealth", href: "#iniciativas" },
      { label: "Nossos ETFs", href: "#etfs" },
      { label: "AUVP Pro", href: "#iniciativas" },
    ],
  },
];
