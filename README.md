# AUVP · Página institucional

Página institucional da **AUVP — Escola de Investimentos**, construída para
posicionar a instituição como uma escola clássica e sólida, no repertório visual
de Wharton, Yale e Harvard: serifa, papel quente, régua fina, ouro fosco e
espaço em branco generoso.

Não é uma landing page de campanha. É a página que responde "o que é a AUVP" para
quem chega pela primeira vez, e que sustenta autoridade para quem já conhece.

## Começando

Requer Node 22 (ver `.nvmrc`).

```bash
npm install
npm run dev     # http://localhost:3000
```

## Comandos

| Comando             | O que faz                                         |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento                       |
| `npm run build`     | Build de produção                                 |
| `npm run start`     | Serve o build                                     |
| `npm run typecheck` | TypeScript, sem emitir                            |
| `npm run lint`      | ESLint                                            |
| `npm run format`    | Aplica o Prettier                                 |
| `npm run check`     | Tipos + lint + formatação — o mesmo que a CI roda |

## Estrutura da página

Onze dobras, na ordem do roteiro aprovado:

| #   | Dobra                       | Argumento                        |
| --- | --------------------------- | -------------------------------- |
| 01  | Hero                        | Posicionamento e promessa        |
| 02  | Números                     | Escala verificável               |
| 03  | Missão                      | Por que a instituição existe     |
| 04  | Conteúdo programático       | O que se aprende                 |
| 05  | Nosso processo              | Como se aprende, em três etapas  |
| 06  | Comunidade                  | Não se estuda sozinho            |
| 07  | Garantia                    | Risco assumido pela instituição  |
| 08  | Iniciativas                 | O ecossistema em volta da escola |
| 09  | Nossos ETFs                 | Método aplicado em produto       |
| 10  | Acreditam no nosso trabalho | Validação de terceiros           |
| 11  | Dúvidas frequentes          | Transparência                    |

## Onde mexer

**Trocar um texto, um número, um link ou uma pergunta do FAQ** → `src/content/`.
Nenhum componente precisa ser aberto. Ver **[docs/CONTENT.md](docs/CONTENT.md)**.

**Adicionar ou recortar uma foto** → ver **[docs/ASSETS.md](docs/ASSETS.md)**, que
traz o diagnóstico do acervo, a direção de recorte e o briefing do que ainda
precisa ser produzido.

**Mexer em cor, tipografia ou espaçamento** → tokens em `src/app/globals.css`,
com o racional em **[docs/BRAND.md](docs/BRAND.md)**.

## Documentação

| Documento                                      | Assunto                                                       |
| ---------------------------------------------- | ------------------------------------------------------------- |
| [docs/BRAND.md](docs/BRAND.md)                 | Linguagem visual: cor, tipografia, movimento, o que não fazer |
| [docs/CONTENT.md](docs/CONTENT.md)             | Como editar o conteúdo e regras de escrita                    |
| [docs/ASSETS.md](docs/ASSETS.md)               | Diagnóstico das fotos, recortes e briefing de produção        |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)   | Stack, estrutura e decisões técnicas                          |
| [docs/ACCESSIBILITY.md](docs/ACCESSIBILITY.md) | Compromissos de acessibilidade e como verificar               |
| [docs/DEPLOY.md](docs/DEPLOY.md)               | Publicação e checklist de go-live                             |
| [CONTRIBUTING.md](CONTRIBUTING.md)             | Fluxo de trabalho, branches e revisão                         |
| [CHANGELOG.md](CHANGELOG.md)                   | Histórico de mudanças                                         |

## Estado atual

A página está completa e navegável em desktop e mobile. **Sete fotografias e
quatro logos de parceiros ainda não existem** — as dobras correspondentes exibem
uma reserva editorial com o briefing da imagem que falta, em vez de quebrar o
layout. A lista está em [docs/ASSETS.md](docs/ASSETS.md).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Cormorant Garamond +
Inter. Página inteiramente estática: sem banco, sem API, sem formulário.
