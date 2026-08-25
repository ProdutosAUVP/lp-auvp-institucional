# AUVP · Página institucional

Página institucional da **AUVP Escola de Investimentos**, construída para
posicionar a instituição como uma escola clássica e sólida: serifa, régua fina,
espaço em branco generoso e as três cores da escola, amarelo, branco e preto.

As referências que guiaram o desenho estão em [docs/BRAND.md](docs/BRAND.md):
SOAS, Lionheart Education, Oxford, Higher Life Foundation, Harvard e Penn.

Não é uma landing page de campanha. É a página que responde "o que é a AUVP" para
quem chega pela primeira vez, e que sustenta autoridade para quem já conhece.

## Começando

Requer Node 22 (ver `.nvmrc`).

```bash
npm install
npm run dev     # http://localhost:3000
```

## Comandos

| Comando             | O que faz                                       |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento                     |
| `npm run build`     | Build de produção                               |
| `npm run start`     | Serve o build                                   |
| `npm run typecheck` | TypeScript, sem emitir                          |
| `npm run lint`      | ESLint                                          |
| `npm run format`    | Aplica o Prettier                               |
| `npm run check`     | Tipos, lint e formatação, o mesmo que a CI roda |

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

## Publicação

Export estático publicado no GitHub Pages a cada push na `main`, pelo workflow
`.github/workflows/deploy.yml`.

**<https://produtosauvp.github.io/lp-auvp-institucional/>**

O site é servido sob subcaminho, então o build recebe o `basePath` do próprio
GitHub. Nada fica fixado no código, e a migração para domínio próprio não exige
mudança de código. Ver [docs/DEPLOY.md](docs/DEPLOY.md), inclusive para testar o
build de produção localmente antes de publicar (o `npm run dev` roda na raiz e
não pega erro de caminho).

## Estado atual

A página está completa e navegável em desktop e mobile. **Todas as fotografias
estão mockadas** e nenhum logo de apoiador existe ainda. Cada lugar que receberá
imagem exibe uma reserva editorial com o briefing do que precisa ser produzido,
em vez de quebrar o layout. A lista completa, com enquadramento e proporção de
cada foto, está em [docs/ASSETS.md](docs/ASSETS.md).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Lenis · Cormorant
Garamond e Inter. Página inteiramente estática: sem banco, sem API, sem
formulário.

O movimento (rolagem com inércia, paralaxe, contagem dos números, revelações na
rolagem) vive em `src/components/motion/` e desliga por inteiro sob
`prefers-reduced-motion`. Ver [docs/BRAND.md](docs/BRAND.md).
