# Publicação

## Ambiente

| Item  | Valor                     |
| ----- | ------------------------- |
| Node  | 22 LTS (`.nvmrc`)         |
| Build | `npm ci && npm run build` |
| Start | `npm run start`           |
| Porta | `3000` (ou `$PORT`)       |
| Saída | `.next/`                  |

## Variáveis

Uma só, opcional:

```bash
NEXT_PUBLIC_SITE_URL="https://auvp.com.br"
```

Define a URL canônica usada em `<link rel="canonical">`, Open Graph, `sitemap.xml`
e `robots.txt`. Sem ela, o padrão é `https://auvp.com.br` (ver
`src/content/site.ts`). **Sem barra no final.**

Copie `.env.example` para `.env.local` no desenvolvimento local.

## Vercel

Detecção automática, sem configuração. Basta definir `NEXT_PUBLIC_SITE_URL` em
_Project Settings → Environment Variables_ para os ambientes de produção e de
preview.

## Servidor próprio ou container

```bash
npm ci
npm run build
npm run start   # escuta em $PORT, padrão 3000
```

Colocar atrás de um proxy com TLS. A aplicação não termina TLS.

## Exportação estática

A página não usa nada que dependa de servidor. Se for necessário publicar em
hospedagem estática (S3, GitHub Pages, CDN pura), acrescente ao `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

O custo é abrir mão da otimização de imagem do Next: os `.webp` passam a ser
servidos como estão, sem redimensionamento por breakpoint. Nesse caso, gere as
variantes manualmente antes de publicar.

## Antes de publicar

```bash
npm run check   # tipos, lint, formatação
npm run build   # precisa terminar sem aviso
```

Confira também:

- [ ] `NEXT_PUBLIC_SITE_URL` aponta para o domínio real
- [ ] Todos os links de `src/content/site.ts` respondem (nenhum 404)
- [ ] `/sitemap.xml` e `/robots.txt` carregam
- [ ] O número do WhatsApp em `links.whatsapp` está correto
- [ ] Nenhuma reserva de "Foto pendente" visível em produção — ou, se houver,
      é uma decisão consciente e datada (ver `docs/ASSETS.md`)

## Depois de publicar

- Enviar `sitemap.xml` no Google Search Console.
- Validar o dado estruturado no [Rich Results Test](https://search.google.com/test/rich-results)
  — a página declara `EducationalOrganization` e `FAQPage`.
- Rodar Lighthouse em mobile. A referência de partida é 95+ em Performance,
  Accessibility, Best Practices e SEO.
