# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Não publicado]

### Adicionado

- Publicação automática no GitHub Pages a cada push na `main`, via
  `.github/workflows/deploy.yml`. O `basePath` e a URL canônica vêm da action
  `configure-pages`, então migrar para domínio próprio não exige mudança de
  código.
- Export estático (`output: "export"`, `trailingSlash`, `images.unoptimized`).
- `src/lib/asset.ts`, que prefixa caminhos de `/public` com o `basePath`. O
  `next/image` não faz isso quando `unoptimized` está ligado, e sem o helper toda
  imagem daria 404 sob subcaminho.

### Alterado

- Fotografias redimensionadas para o tamanho de uso, já que a hospedagem
  estática não otimiza imagem: a pasta `public/` caiu de 1,9 MB para 416 KB.
- Acervo do site antigo movido de `public/images/legacy/` para `acervo/legado/`,
  fora do que é publicado.
- `robots.ts` e `sitemap.ts` marcados como `force-static`, exigência do export.

## [0.1.0] — página institucional

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
- Camada de movimento em `src/components/motion/`: rolagem com inércia (Lenis),
  saída do hero em duas velocidades, revelação por linha da headline, contagem
  crescente dos números institucionais, paralaxe nas fotografias, filete de
  progresso no cabeçalho e marcação da dobra ativa no menu. Tudo desligado sob
  `prefers-reduced-motion`.

### Removido

- Monograma 3D em WebGL no hero (three.js). O sólido competia com a tipografia e
  lia como logo animado. Decisão registrada em `docs/ARCHITECTURE.md`.

### Observações

- Sete fotografias e quatro logos de parceiros ainda pendentes de produção. Ver
  `docs/ASSETS.md`.
- Imagens do site anterior arquivadas em `public/images/legacy/`, fora de uso.
