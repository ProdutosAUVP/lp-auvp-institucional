# Arquitetura

## Stack

| Camada     | Escolha                                  | Por quê                                                          |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router)                  | Renderização estática, otimização de imagem e metadados nativos  |
| Linguagem  | TypeScript (strict)                      | O tipo do conteúdo é o contrato de edição                        |
| Estilo     | Tailwind CSS 4                           | Tokens declarados em `@theme`, sem arquivo de configuração       |
| Fontes     | `next/font/google`                       | Auto-hospedadas no build; zero requisição a terceiros em runtime |
| Formatação | Prettier + `prettier-plugin-tailwindcss` | Ordem de classe estável, diff limpo                              |

A página inteira é **estática**. Não há banco, API, formulário ou estado de
servidor: `npm run build` gera a pasta `out/` com HTML pronto (`output: "export"`),
publicada no GitHub Pages. Todo destino de conversão é um link para um domínio da
AUVP que já existe.

Como o Pages serve o site sob `/lp-auvp-institucional`, o build recebe o
`basePath` por variável de ambiente e `src/lib/asset.ts` prefixa os caminhos de
imagem, porque o `next/image` não faz isso quando `unoptimized` está ligado.
Os detalhes, e por que cada opção de `next.config.ts` existe, estão em
[docs/DEPLOY.md](DEPLOY.md).

## Estrutura

```
src/
├── app/
│   ├── layout.tsx      fontes, metadados, Open Graph
│   ├── page.tsx        composição das dobras, na ordem do roteiro
│   ├── globals.css     tokens de design e utilitários próprios
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/         cabeçalho fixo, rodapé, botão de WhatsApp
│   ├── motion/         rolagem suave, paralaxe, contagem, revelações
│   ├── sections/       uma dobra por arquivo
│   ├── ui/             Container, Section, Button, Figure, Reveal, Eyebrow…
│   └── StructuredData.tsx
├── content/            TODO o texto da página
└── lib/                utilitários
```

## Os três princípios que sustentam o resto

**1. Conteúdo separado de apresentação.**
`src/content/` é a fonte única de verdade textual. Marketing edita ali sem
encostar em JSX. O TypeScript valida a forma do dado, então um campo faltando
quebra o build em vez de quebrar a página.

**2. Componente de seção não recebe props.**
Cada dobra importa o próprio conteúdo. Isso torna `page.tsx` uma lista legível da
estrutura da página e elimina a passagem de dados em cadeia.

**3. Server Component por padrão.**
Só três arquivos são `"use client"`, e cada um por um motivo específico:

| Arquivo      | Motivo                         |
| ------------ | ------------------------------ |
| `SiteHeader` | Estado de rolagem e menu móvel |
| `Faq`        | Troca de categoria             |
| `Reveal`     | `IntersectionObserver`         |

O restante da página não envia JavaScript ao navegador.

## Decisões que valem explicação

**FAQ em `<details>` nativo.** O acordeão usa `<details name="…">` do HTML. A
resposta está no DOM antes de qualquer hidratação, indexável pelo Google e
acessível pelo teclado sem nenhum handler nosso. O React só decide qual categoria
está visível. O atributo `name` faz o navegador fechar o item anterior sozinho.

**Descrição de módulo com `grid-template-rows`.** A descrição sai no hover
animando de `0fr` para `1fr`, o que dá transição de altura real (impossível com
`height: auto`) e mantém os títulos alinhados pela base. Em telas sem ponteiro
fino, a descrição já vem aberta.

**Carrossel de apoios sem JavaScript.** A lista é duplicada e o trilho translada
`-50%` em animação linear infinita: laço perfeito, custo zero. A cópia leva
`aria-hidden` para não duplicar a leitura em leitor de tela.

**Reserva de foto pendente.** `Figure` aceita `src: null` e desenha uma moldura
com o briefing da foto que falta. A página fica apresentável durante a produção
do banco de imagens, e o que falta fica visível para todo mundo. Ver
`docs/ASSETS.md`.

**Logo trocado por contraste, não por CSS.** O cabeçalho troca entre o SVG preto
e o branco conforme esteja sobre o hero escuro ou sobre papel. Filtro CSS sobre
SVG degrada o traço fino da serifa.
