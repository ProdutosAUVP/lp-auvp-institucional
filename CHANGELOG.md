# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Não publicado]

### Adicionado

- Estrutura inicial do projeto: Next.js 16, TypeScript, Tailwind CSS 4.
- Página institucional completa, com as onze dobras do roteiro aprovado.
- Sistema de design em `globals.css`: paleta de papel, tinta e ouro fosco;
  Cormorant Garamond para display e Inter para texto.
- Camada de conteúdo em `src/content/`, com todo o texto da página tipado e
  editável sem tocar em componentes.
- Oito ícones de módulo desenhados em traço fino, substituindo os cards do
  branding antigo.
- Componente `Figure` com reserva editorial para fotografia ainda não produzida.
- Dado estruturado `EducationalOrganization` e `FAQPage`, `sitemap.xml` e
  `robots.txt`.
- Documentação: marca, conteúdo, acervo de imagens, arquitetura, acessibilidade,
  publicação e contribuição.
- CI no GitHub Actions: tipos, lint, formatação e build.

### Observações

- Sete fotografias e quatro logos de parceiros ainda pendentes de produção. Ver
  `docs/ASSETS.md`.
- Imagens do site anterior arquivadas em `public/images/legacy/`, fora de uso.
