# Publicação — GitHub Pages

O site é gerado como HTML estático e publicado no GitHub Pages pelo workflow
`.github/workflows/deploy.yml`, a cada push na `main`.

**Endereço:** <https://produtosauvp.github.io/lp-auvp-institucional/>

---

## Ativação (uma vez só)

O workflow já está no repositório, mas o GitHub Pages precisa ser ligado à mão
antes do primeiro deploy.

1. Abra **Settings → Pages** no repositório.
2. Em **Source**, escolha **GitHub Actions** (não "Deploy from a branch").
3. Pronto. O próximo push na `main` publica.

Para publicar sem esperar um commit novo: **Actions → Deploy — GitHub Pages →
Run workflow**.

O primeiro deploy leva de 2 a 3 minutos, e o endereço pode demorar mais alguns
minutos para responder na primeira vez.

---

## Como o build sabe o endereço

Num repositório de projeto, o Pages serve o site sob `/<nome-do-repo>` em vez da
raiz. Se o build não souber disso, todo CSS, fonte e imagem sai apontando para o
lugar errado e a página carrega em branco.

O workflow resolve isso perguntando ao próprio GitHub:

```yaml
- id: pages
  uses: actions/configure-pages@v5

- run: npm run build
  env:
    NEXT_PUBLIC_BASE_PATH: ${{ steps.pages.outputs.base_path }}
    NEXT_PUBLIC_SITE_URL: ${{ steps.pages.outputs.base_url }}
```

Nada é fixado no código. No dia em que um domínio próprio for configurado, a
action passa a devolver a raiz e o build se ajusta sozinho.

| Variável                | O que faz                                                                 | Valor hoje                                             |
| ----------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_BASE_PATH` | Subcaminho em que o site é servido                                        | `/lp-auvp-institucional`                               |
| `NEXT_PUBLIC_SITE_URL`  | URL canônica: `<link canonical>`, Open Graph, `sitemap.xml`, `robots.txt` | `https://produtosauvp.github.io/lp-auvp-institucional` |

Em desenvolvimento local as duas ficam vazias e o site roda em `/`.

---

## Três detalhes que fazem hospedagem estática funcionar

Estão em `next.config.ts` e no workflow. Cada um resolve uma falha concreta:

**`output: "export"`** — gera a pasta `out/` com HTML pronto, em vez de exigir um
servidor Node.

**`trailingSlash: true`** — cada rota vira uma pasta com `index.html`. Sem isso,
o Pages devolve 404 em qualquer caminho que não seja a raiz.

**`images.unoptimized: true`** — o Pages serve arquivos, não roda o otimizador de
imagem do Next.

**`touch out/.nojekyll`** (no workflow) — o Pages processa o site com Jekyll por
padrão, e o Jekyll ignora pastas iniciadas por underscore. O Next serve tudo de
`_next`. Sem esse arquivo, o site sobe sem CSS e sem JavaScript.

### E um que não é óbvio: `asset()`

Com `images.unoptimized`, o `next/image` **não** aplica o `basePath` ao `src`.
Ele aplica aos chunks e às fontes, mas não às imagens — então toda fotografia e
todo logo dariam 404 sob subcaminho.

Por isso existe `src/lib/asset.ts`. Todo componente que renderiza `<Image>`
passa o caminho por ele:

```tsx
<Image src={asset(mission.photo.src)} … />
```

Os arquivos de `src/content/` continuam guardando caminhos limpos
(`/images/sede-auvp-capital.webp`). O prefixo é responsabilidade do componente,
não de quem edita conteúdo.

**Ao criar um componente novo que renderize imagem, use `asset()`.** É o tipo de
erro que passa despercebido no `npm run dev` e só aparece em produção.

---

## Peso das imagens

Sem o otimizador do Next, o navegador baixa o arquivo original — não há
redimensionamento por breakpoint. Antes de adicionar qualquer foto, gere a
versão final no tamanho de uso (o padrão está em `docs/ASSETS.md`):

```bash
npx sharp-cli --input foto.jpg --output public/images/foto.webp \
  resize 2000 --withoutEnlargement -- webp --quality 82
```

O material do site antigo vive em `acervo/legado/`, **fora de `public/`**, de
propósito: tudo que está em `public/` é copiado para o build e servido a cada
visitante.

---

## Testar o build de produção antes de publicar

Vale a pena, porque o `npm run dev` roda na raiz e não pega erro de `basePath`.
Este roteiro reproduz exatamente o que o Pages faz:

```bash
NEXT_PUBLIC_BASE_PATH="/lp-auvp-institucional" \
NEXT_PUBLIC_SITE_URL="https://produtosauvp.github.io/lp-auvp-institucional" \
npm run build

# serve out/ sob o mesmo subcaminho
mkdir -p /tmp/pages/lp-auvp-institucional
cp -r out/. /tmp/pages/lp-auvp-institucional/
npx http-server /tmp/pages -p 4950 -c-1
```

Abra <http://localhost:4950/lp-auvp-institucional/> e confira o console do
navegador: **qualquer 404 ali é um 404 em produção.**

---

## Migrar para domínio próprio

Quando o DNS estiver disponível:

1. **Settings → Pages → Custom domain**: informe o domínio (ex.:
   `institucional.auvp.com.br`) e salve. O GitHub cria um arquivo `CNAME` no
   repositório sozinho.
2. **No DNS da AUVP**, crie um registro `CNAME` do subdomínio apontando para
   `produtosauvp.github.io`.
   _(Domínio de raiz, sem subdomínio, exige registros `A` para os IPs do Pages
   em vez de `CNAME` — ver a documentação do GitHub Pages.)_
3. Aguarde a verificação e marque **Enforce HTTPS**.
4. **Não é preciso mexer em código.** A `configure-pages` passa a devolver a raiz
   e o próximo deploy sai sem `basePath`.
5. Reenvie o `sitemap.xml` no Search Console com o endereço novo.

---

## Checklist antes de anunciar o site

- [ ] `npm run check` e `npm run build` passam
- [ ] Nenhum 404 no console ao abrir o build sob o subcaminho
- [ ] Todos os links de `src/content/site.ts` respondem
- [ ] O número do WhatsApp em `links.whatsapp` está correto
- [ ] `/robots.txt` e `/sitemap.xml` carregam e trazem a URL certa
- [ ] Nenhuma reserva de "Foto pendente" visível — ou é decisão consciente
      (ver `docs/ASSETS.md`)
- [ ] Lighthouse mobile: referência de 95+ em Performance, Accessibility, Best
      Practices e SEO

## Depois de publicar

- Enviar `sitemap.xml` no Google Search Console.
- Validar o dado estruturado no
  [Rich Results Test](https://search.google.com/test/rich-results) — a página
  declara `EducationalOrganization` e `FAQPage`.

> **Enquanto o site estiver em `produtosauvp.github.io`,** evite divulgá-lo como
> endereço definitivo: quando migrar para o domínio próprio, o antigo vira
> conteúdo duplicado aos olhos do Google. Se a fase de teste for longa, vale
> trocar `robots.ts` para `index: false` até a migração.
