# Banco de imagens

Diagnóstico do material existente, direção de recorte e briefing do que ainda
precisa ser produzido. Este é o documento de trabalho entre o time de conteúdo,
o time de design e a produção audiovisual.

---

## 1. Como a página trata uma foto que ainda não existe

Nenhuma dobra fica quebrada por falta de imagem. Em `src/content/*.ts`, um item
com `src: null` faz o componente `Figure` renderizar uma **reserva editorial**:
moldura em régua fina, o rótulo `Foto pendente` e o briefing da foto em itálico.

```ts
{
  src: null,
  alt: "Palestra do Private Day da AUVP, com auditório lotado.",
  caption: "Private Day 2025 · Palestras",
  brief: "Palco e plateia — paisagem 16:9",
}
```

Quando a foto chega, basta trocar `null` pelo caminho em `/public/images/`. Nada
mais muda. Enquanto isso, a página pode ir para revisão interna sem parecer
inacabada, e qualquer pessoa que abrir o site vê exatamente o que falta.

---

## 2. Acervo existente — o que aproveitamos

Cinco arquivos do site antigo sobreviveram à mudança de linguagem visual.

### `raul-sena-biblioteca.webp` — 1761×1080

**O melhor ativo do acervo.** Raul em estúdio com marcenaria escura, estantes de
livros encadernados, poltrona de couro, quadro emoldurado. É literalmente o
repertório visual de Wharton, Yale e Harvard: madeira, papel, luz quente.

- **Uso atual:** fundo da dobra de encerramento (`ClosingCta`), em 25% de
  opacidade sob véu de tinta.
- **Recorte sugerido para uso futuro em destaque:** cortar a câmera desfocada do
  primeiro plano à direita (aprox. 22% da largura) e fechar em 3:2 sobre o
  conjunto estante + poltrona. O elemento de produção de vídeo entrega "creator",
  não "instituição de ensino" — a estante entrega o contrário.
- **Atenção:** há uma boneca e objetos pessoais na estante superior esquerda.
  Num crop fechado eles saem. Num plano aberto, pesam contra o tom institucional.

### `sede-auvp-capital.webp` — 1920×1080

Fachada da sede em Goiânia: painel verde-escuro, letreiro em dourado escovado,
vidro, madeira clara no interior. Arquitetura sóbria, exatamente o que a dobra de
missão pede.

- **Uso atual:** dobra 03 (Missão), em 4:3.
- **Recorte sugerido:** o enquadramento atual em 16:9 tem ar demais no topo. Para
  o 4:3 usado na página, o corte ideal é centrado no letreiro, mantendo o galho
  de árvore do canto superior esquerdo — ele dá profundidade e evita que a
  fachada vire uma foto de catálogo imobiliário.
- **Observação:** a versão "desktop" do site antigo (1200×728) era um recorte mais
  fechado e de qualidade inferior. Foi descartada.

### `raul-sena-palco-b3.webp` — 2560×1170

Raul ao microfone em ambiente corporativo azul. Já vem em recorte panorâmico com
o sujeito deslocado para a direita.

- **Uso atual:** fundo do hero, com `object-position: 62% center` e véus de tinta
  por cima. O deslocamento à direita é justamente o que abre espaço para o texto
  centralizado.
- **Limite:** em telas muito estreitas o rosto entra na zona do headline. O
  `object-position` já compensa, mas se um dia a foto for trocada, manter a mesma
  regra de composição — **sujeito fora do terço central**.

### `raul-sena-ipo-auvp11.webp` — 6192×4128

Raul de camiseta AUVP11 discursando no que é claramente a cerimônia de listagem
na B3 (painel azul institucional ao fundo).

- **Uso atual:** dobra 09 (Nossos ETFs). É a foto certa para a dobra certa: prova
  visual de que os ETFs existem e foram listados em bolsa.
- **Recorte sugerido:** o arquivo é enorme e tem muita área morta. Um crop 4:3
  fechado no busto + painel da B3 reduz o peso do arquivo em ~70% e reforça o
  contexto de bolsa. Recomendo gerar uma versão derivada de no máximo 2000px de
  largura.

### `raul-sena-retrato.webp` — 1841×1938

Retrato posado de Raul à mesa, com o letreiro de neon da AUVP ao fundo.

- **Uso atual:** nenhum.
- **Por quê:** o neon é o logo **antigo** (olho espiral, tipografia arredondada).
  Conflita frontalmente com o logo serifado que a página inteira usa.
- **Como aproveitar:** crop vertical 3:4 fechado no busto, cortando todo o lado
  direito da imagem. Sem o neon, sobra um retrato de fundo escuro e luz lateral
  quente — ótimo para um bloco "Quem fundou a AUVP" ou para a resposta
  correspondente no FAQ. **Recomendo fazer esse recorte.**

---

## 3. Acervo existente — o que foi arquivado

Os arquivos abaixo estão em `acervo/legado/`, **fora de `public/`**. Não foram
apagados porque podem ter valor de histórico, mas **não devem entrar na página**.

A pasta ficou fora de `public/` de propósito: o site é publicado como export
estático, e tudo que está em `public/` é copiado para o build e servido a cada
visitante. Arquivo arquivado não paga banda.

| Arquivo                                  | Por que não entra                                                                                                                                                      |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modulo-1..7`, `modulo-bonus`            | Cards do branding antigo: preto e ouro, sans-serif condensada, ícones em degradê metálico. Substituídos por ícones em traço fino (`src/components/ui/ModuleIcon.tsx`). |
| `prancheta-55-300x300.png`               | Selo "Garantia 100% AUVP" skeuomórfico, com relevo e estrelas. O roteiro pede "ícone simples de escudo com check" — feito em SVG.                                      |
| `computer-contador-de-pr-xima-turma.png` | Mockup de contagem regressiva de campanha. Urgência de lançamento é o oposto do tom institucional.                                                                     |

Também foi descartado o `hero (1).webp`: duplicata byte a byte de `hero.webp`.

---

## 4. O que precisa ser produzido

Sete fotos e quatro logos. Ordenados por impacto na página.

### Prioridade alta — dobras que hoje estão sem imagem nenhuma

**1. Private Day — três fotos** (dobra 06, Comunidade)

A dobra inteira depende delas. Sem foto de gente, o argumento de comunidade não
se sustenta.

| #   | Enquadramento         | Proporção    | O que precisa aparecer                                                                  |
| --- | --------------------- | ------------ | --------------------------------------------------------------------------------------- |
| 1   | Plano aberto do salão | 3:4 vertical | Volume de pessoas. Mesas, taças, conversa. Ninguém olhando para a câmera.               |
| 2   | Palco e plateia       | 3:4 vertical | Palestrante de costas ou de perfil em primeiro plano, plateia cheia ao fundo e em foco. |
| 3   | Grupo em conversa     | 3:4 vertical | Três a cinco pessoas de pé, em conversa real. Roupa social ou smart casual.             |

**Direção:** luz ambiente, sem flash direto. Preferir o momento das palestras ao
da festa — o roteiro fala em "escola", e taça de espumante em plano fechado puxa
para "evento de network". Se só houver material da confraternização, escolher
quadros em plano aberto, onde o ambiente pesa mais que o copo.

**2. Reconhecimento BTG Pactual** (dobra 08)

Entrega do prêmio, no palco, 4:3 paisagem. Precisa ler "instituição reconhecendo
instituição": placa ou troféu visível, aperto de mãos ou pose formal, marca do
BTG legível no fundo. Se não houver registro do palco, uma foto do troféu sobre
mesa escura com luz lateral resolve — e é mais elegante que uma foto ruim de
palco.

**3. CEIA / UFG** (dobra 08)

Dia das palestras no centro de pesquisa, 4:3 paisagem. O valor aqui é o contexto
acadêmico: sala de aula, auditório universitário, laboratório. Uma foto de
palestrante isolado não comunica a parceria — precisa aparecer o ambiente da
universidade.

**4. Relações internacionais** (dobra 08)

Raul ou Caju com embaixador, 4:3 paisagem. Cenário formal: bandeiras, sala de
recepção diplomática, ou o set do AUVP Atlas. Aperto de mãos ou os dois sentados
em entrevista. Evitar foto de celular e fundo de corredor.

**5. AUVP Experience — Missão China** (dobra 08)

Delegação em visita técnica, 4:3 paisagem. Grupo dentro de uma fábrica, centro de
inovação ou sede de empresa — o argumento é "imersão executiva", então o cenário
precisa ser de trabalho, não turístico. Foto da delegação na Muralha da China
seria a escolha errada.

### Prioridade média — melhoram muito, mas há alternativa

**6. Interior da sede** (dobra 03)

Hoje a missão usa a fachada. Uma foto interna — biblioteca, auditório, sala de
aula, mesa de reunião com luz natural — daria à dobra de missão o mesmo peso que
a fachada dá de fora. Formato 4:3 ou 3:2. Se existir, substitui a fachada; se
não, a fachada continua sendo uma boa solução.

**7. Retrato institucional do fundador** (FAQ / bloco fundador)

Ver a nota sobre `raul-sena-retrato.webp` acima: pode sair de um recorte do que
já temos. Se for refotografar, o pedido é retrato 3:4, fundo escuro neutro, luz
lateral quente, olhar para a câmera, sem o neon antigo no quadro.

### Logos dos parceiros (dobra 10)

Hoje o carrossel exibe os nomes em versalete espaçado — funciona, e é honesto,
mas logo é mais forte.

Necessário: **CEIA, BTG Pactual, Governo de Goiás, R7**, em SVG monocromático,
traçado em preto puro, sem fundo, sem sombra. A página aplica opacidade e
`grayscale`, então versões coloridas não são necessárias — mas **versões em PNG
com fundo branco não servem**, porque o fundo aparece sobre o papel.

Destino: `public/images/brand/`. Depois é só preencher o campo `logo` em
`src/content/endorsements.ts`.

> **Direito de uso:** logo de terceiro exige autorização de uso da marca. Antes
> de publicar, confirmar com o jurídico que existe permissão para cada um dos
> quatro — especialmente Governo de Goiás e BTG Pactual.

---

## 5. Padrão técnico para toda foto nova

| Item           | Regra                                                                                 |
| -------------- | ------------------------------------------------------------------------------------- |
| Formato        | `.webp`, qualidade 80–85                                                              |
| Largura máxima | 2400px (fotos de faixa larga) · 1600px (cards e retratos)                             |
| Peso alvo      | até 250 KB por arquivo                                                                |
| Nome           | minúsculas, sem acento, separado por hífen: `private-day-2025-palestras.webp`         |
| Local          | `public/images/`                                                                      |
| Proporção      | respeitar a coluna `ratio` da tabela acima — o recorte é feito no arquivo, não no CSS |

**Sobre redimensionar:** o site roda em hospedagem estática, sem o otimizador de
imagem do Next. O navegador baixa o arquivo exatamente como ele está no
repositório — não há variante por breakpoint. Uma foto de 6000px custa a mesma
banda no celular e no desktop.

```bash
npx sharp-cli --input original.jpg --output public/images/nome-da-foto.webp \
  resize 2000 --withoutEnlargement -- webp --quality 82
```

As fotos que vieram do site antigo já passaram por isso: a da B3 saiu de
6192px/606 KB para 2000px/55 KB, e a do palco de 2560px/538 KB para 2000px/40 KB,
sem diferença visível no tamanho em que aparecem na tela.

**Sobre acento e espaço em nome de arquivo:** os arquivos originais chegaram com
nomes como `Conhe%C3%A7a%20Raul%20Sena%20mobile.webp`. Isso quebra em servidor
Linux e em CDN. Todo arquivo novo entra já normalizado.

**Texto alternativo:** toda imagem precisa de `alt` descritivo em português, no
próprio arquivo de conteúdo. Descreve o que se vê, não o que se quer provar:
"Raul Sena discursa na cerimônia de listagem de um ETF da AUVP na B3", não
"Sucesso da AUVP na bolsa".

---

## 6. Direção de fotografia — o padrão da instituição

Para que o conjunto leia como uma escola clássica, e não como um funil de
lançamento:

- **Luz natural ou contínua quente.** Nunca flash direto na cara.
- **Cor dessaturada.** Madeira, papel, tinta, latão. Sem laranja e azul de
  colorização agressiva.
- **Pessoas trabalhando, não posando.** Olhar para a câmera só em retrato formal.
- **Arquitetura entra no quadro.** Pé-direito, estante, janela, coluna. O espaço
  físico é parte do argumento de solidez.
- **Sem elemento de urgência.** Contagem regressiva, seta, selo, círculo vermelho.
- **Sem o branding antigo no quadro.** Olho espiral e tipografia arredondada
  contradizem o logo serifado que sustenta a página.
