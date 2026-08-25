# Banco de imagens

**Estado atual: todas as fotografias da página estão mockadas.** Nenhuma foto
real é exibida. Cada lugar que receberá imagem mostra uma reserva editorial com
o briefing do que precisa ser produzido.

Este é o documento de trabalho entre conteúdo, design e produção audiovisual.

---

## 1. Como funciona a reserva de foto

Em `src/content/*.ts`, um item com `src: null` faz o componente `Figure`
desenhar uma moldura com hachura amarela, o rótulo `Foto pendente` e o briefing
em itálico:

```ts
photo: {
  /** Arquivado em acervo/fotos/sede-auvp-capital.webp */
  src: null as string | null,
  alt: "Sede da AUVP, em Goiânia.",
  caption: "Sede, Goiânia, Goiás",
  brief: "interior da sede: biblioteca, auditório ou sala de aula, paisagem 4:3",
},
```

Nas dobras em que a foto é o fundo da seção inteira (hero e encerramento), a
moldura não caberia: entra a `BackdropReserve`, que aplica só a textura e uma
etiqueta discreta no rodapé da dobra.

**Para publicar uma foto**, coloque o arquivo em `public/images/` e troque
`null` pelo caminho. Nada mais muda.

---

## 2. Fotos que a página espera

Onze imagens no total. As três primeiras são as mais urgentes, porque são as
únicas dobras cujo argumento depende de gente na tela.

### Prioridade alta

**Private Day, três fotos** (dobra 06, Comunidade)

| #   | Enquadramento         | Proporção    | O que precisa aparecer                                                                  |
| --- | --------------------- | ------------ | --------------------------------------------------------------------------------------- |
| 1   | Plano aberto do salão | 3:4 vertical | Volume de pessoas. Mesas, conversa. Ninguém olhando para a câmera.                      |
| 2   | Palco e plateia       | 3:4 vertical | Palestrante de costas ou de perfil em primeiro plano, plateia cheia e em foco ao fundo. |
| 3   | Grupo em conversa     | 3:4 vertical | Três a cinco pessoas de pé, em conversa real. Roupa social ou smart casual.             |

Luz ambiente, sem flash direto. Preferir o momento das palestras ao da festa: o
roteiro fala em "escola", e taça de espumante em plano fechado puxa para "evento
de network". Se só houver material da confraternização, escolher quadros em
plano aberto, onde o ambiente pesa mais que o copo.

**Reconhecimento BTG Pactual** (dobra 08), 4:3 paisagem

Entrega do prêmio, no palco. Precisa ler "instituição reconhecendo instituição":
placa ou troféu visível, aperto de mãos ou pose formal, marca do BTG legível ao
fundo. Sem registro do palco, uma foto do troféu sobre mesa escura com luz
lateral resolve, e é mais elegante que uma foto ruim de evento.

**CEIA e UFG** (dobra 08), 4:3 paisagem

Dia das palestras no centro de pesquisa. O valor está no contexto acadêmico:
sala de aula, auditório universitário, laboratório. Palestrante isolado não
comunica a parceria; precisa aparecer o ambiente da universidade.

**Relações internacionais** (dobra 08), 4:3 paisagem

Raul ou Caju com embaixador. Cenário formal: bandeiras, sala de recepção
diplomática, ou o set do AUVP Atlas. Aperto de mãos ou os dois sentados em
entrevista. Evitar foto de celular e fundo de corredor.

**AUVP Experience, Missão China** (dobra 08), 4:3 paisagem

Delegação em visita técnica. Fábrica, centro de inovação ou sede de empresa. O
argumento é "imersão executiva", então o cenário precisa ser de trabalho. Foto
na Muralha da China seria a escolha errada.

### Prioridade média

**Hero** (dobra 01), paisagem 21:9 ou mais largo

Plano do palco ou da sala de aula, com o sujeito **fora do terço central**: o
headline ocupa o centro da tela. Enquanto não existe, o hero funciona bem com a
textura e a assinatura tipográfica, então não há pressa.

**Interior da sede** (dobra 03), 4:3 ou 3:2

Biblioteca, auditório, sala de aula, mesa de reunião com luz natural. A fachada
existe no acervo e resolveria, mas o interior comunica escola; a fachada
comunica escritório.

**Cerimônia de listagem na B3** (dobra 09), 4:3 paisagem

Pregão no dia da listagem de um ETF. Existe registro no acervo, arquivado.

**Encerramento** (dobra final), paisagem larga

Estúdio com estantes de livros, plano aberto. Serve de fundo em baixa
opacidade, então tolera imagem menos perfeita. Existe registro no acervo.

### Logos dos apoiadores (dobra 10)

Hoje o carrossel exibe os nomes em versalete espaçado, o que funciona e é
honesto, mas logo é mais forte.

**Três dos quatro já estão na página, servidos pelo CDN da AUVP**
(`cdn.asupernova.com.br`), o mesmo que serve a landing de produção da escola.
BTG Pactual, Governo de Goiás e R7 são carregados de lá, e o host está liberado
em `images.remotePatterns` no `next.config.ts`.

**Isso é temporário, de propósito.** Depender do CDN de outro projeto para uma
logo de terceiro numa página institucional é frágil. O passo certo é baixar os
arquivos:

```bash
mkdir -p public/images/brand
curl -L "https://cdn.asupernova.com.br/lp-auvp/vite/btg%20pactual.png" \
  -o public/images/brand/btg-pactual.png
curl -L "https://cdn.asupernova.com.br/lp-auvp/vite/1-1024x596.webp" \
  -o public/images/brand/governo-de-goias.webp
curl -L "https://cdn.asupernova.com.br/lp-auvp/vite/r7-300x257-1.webp" \
  -o public/images/brand/r7.webp
```

Depois é só trocar o campo `logo` em `src/content/endorsements.ts` pelos
caminhos locais e remover a entrada de `remotePatterns`.

Se alguma logo deixar de carregar, o carrossel volta a exibir o nome em
versalete: `EndorsementLogo` tem essa reserva, então uma URL quebrada nunca
produz o ícone de imagem quebrada.

**Confira antes de publicar.** São arquivos rasterizados, não SVG, e vêm de uma
página com fundo escuro:

- **Fundo transparente é o esperado.** O carrossel fica sobre papel branco. A
  página aplica `mix-blend-multiply`, que some com fundo branco chapado, mas
  fundo escuro apareceria como um bloco. **Nenhum dos três arquivos foi
  conferido visualmente.**
- **O do Governo de Goiás merece atenção.** O arquivo se chama
  `1-1024x596.webp` e tem proporção de banner, não de logotipo. Pode ser uma
  arte com fundo, e não a marca isolada.
- **O ideal continua sendo SVG monocromático**, traçado em preto puro, sem fundo
  e sem sombra. A página aplica opacidade e `grayscale`, então versão colorida
  não é necessária. Se o time de design tiver os vetores, eles são preferíveis
  aos rasterizados do CDN.

**O CEIA não está em nenhum dos dois repositórios.** Precisa ser pedido ao time
do CEIA ou à UFG, de preferência em SVG.

> **Direito de uso:** logo de terceiro exige autorização de uso da marca. Antes
> de publicar, confirmar com o jurídico que existe permissão para os quatro,
> especialmente Governo de Goiás e BTG Pactual.

---

## 3. O acervo arquivado

Nada em `acervo/` é publicado. A pasta está fora de `public/` de propósito: o
site é export estático, e tudo que fica em `public/` é copiado para o build e
servido a cada visitante.

### `acervo/fotos/`, material aproveitável

Cinco fotos do site anterior, tiradas da página quando as imagens foram
mockadas. Continuam disponíveis e valem consideração quando a produção começar.

| Arquivo                     | Leitura                                                                                                                                   | Recorte sugerido                                                                                                                                                                                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `raul-sena-biblioteca.webp` | O melhor ativo do acervo. Marcenaria escura, estantes de livros encadernados, poltrona de couro. É o repertório visual de Wharton e Yale. | Cortar a câmera desfocada do primeiro plano à direita (cerca de 22% da largura) e fechar em 3:2 sobre estante e poltrona. O equipamento de vídeo entrega "creator"; a estante entrega o contrário. Atenção à boneca e aos objetos pessoais na estante superior esquerda. |
| `sede-auvp-capital.webp`    | Fachada da sede em Goiânia. Painel verde-escuro, letreiro dourado, arquitetura sóbria.                                                    | Para 4:3, cortar centrado no letreiro mantendo o galho de árvore do canto superior esquerdo, que dá profundidade e evita a leitura de catálogo imobiliário. **Nota de marca:** o verde e o dourado da fachada não pertencem à paleta da escola.                          |
| `raul-sena-palco-b3.webp`   | Ambiente corporativo azul, sujeito deslocado para a direita.                                                                              | **O azul do fundo conflita com a paleta.** Se for usada, precisa de tratamento em preto e branco.                                                                                                                                                                        |
| `raul-sena-ipo-auvp11.webp` | Cerimônia de listagem na B3, painel azul institucional ao fundo.                                                                          | Crop 4:3 fechado no busto e no painel. Mesmo problema de azul, mesma solução.                                                                                                                                                                                            |
| `raul-sena-retrato.webp`    | Retrato posado, letreiro de neon ao fundo.                                                                                                | O neon é o **logo antigo**, que conflita com a serifa. Crop vertical 3:4 fechado no busto, cortando todo o lado direito. Sem o neon, sobra um retrato de fundo escuro e luz lateral quente, ótimo para um bloco de fundador.                                             |

### `acervo/legado/`, branding antigo

Fora de uso, e não devem entrar na página.

| Arquivo                                  | Por que não entra                                                                                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modulo-1` a `modulo-7`, `modulo-bonus`  | Cards do branding antigo: preto e ouro, sans condensada, ícones em degradê metálico. Substituídos por ícones em traço fino (`src/components/ui/ModuleIcon.tsx`). |
| `prancheta-55-300x300.png`               | Selo "Garantia 100% AUVP" skeuomórfico, com relevo e estrelas. O roteiro pede ícone simples de escudo com check, feito em SVG.                                   |
| `computer-contador-de-proxima-turma.png` | Mockup de contagem regressiva de campanha. Urgência de lançamento é o oposto do tom institucional.                                                               |

Também foi descartado o `hero (1).webp`, duplicata byte a byte de `hero.webp`.

---

## 4. Padrão técnico

| Item              | Regra                                                                         |
| ----------------- | ----------------------------------------------------------------------------- |
| Formato           | `.webp`, qualidade 80 a 85                                                    |
| Largura máxima    | 2400px em faixa larga, 1600px em card e retrato                               |
| Peso alvo         | até 250 KB por arquivo                                                        |
| Redimensionamento | obrigatório antes do commit                                                   |
| Nome              | minúsculas, sem acento, separado por hífen: `private-day-2025-palestras.webp` |
| Local             | `public/images/`                                                              |
| Proporção         | recorte feito no arquivo, não no CSS                                          |

**Sobre redimensionar:** o site roda em hospedagem estática, sem o otimizador de
imagem do Next. O navegador baixa o arquivo exatamente como ele está no
repositório, sem variante por breakpoint. Uma foto de 6000px custa a mesma banda
no celular e no desktop.

```bash
npx sharp-cli --input original.jpg --output public/images/nome-da-foto.webp \
  resize 2000 --withoutEnlargement -- webp --quality 82
```

As fotos do acervo já passaram por isso: a da B3 saiu de 6192px e 606 KB para
2000px e 55 KB, e a do palco de 2560px e 538 KB para 2000px e 40 KB, sem
diferença visível no tamanho em que apareciam na tela.

**Sobre acento e espaço em nome de arquivo:** os arquivos originais chegaram
como `Conhe%C3%A7a%20Raul%20Sena%20mobile.webp`. Isso quebra em servidor Linux e
em CDN. Todo arquivo novo entra normalizado.

**Texto alternativo:** toda imagem precisa de `alt` descritivo em português, no
próprio arquivo de conteúdo. Descreve o que se vê, não o que se quer provar:
"Raul Sena discursa na cerimônia de listagem de um ETF da AUVP na B3", e não
"Sucesso da AUVP na bolsa".

---

## 5. Direção de fotografia

Para que o conjunto leia como escola clássica, e não como funil de lançamento:

- **Luz natural ou contínua quente.** Nunca flash direto no rosto.
- **Cor dessaturada.** Madeira, papel, preto, branco. A paleta da escola é
  amarelo, branco e preto: fotografia com dominante azul ou verde briga com ela.
  Quando o cenário não colabora, preto e branco resolve e é mais elegante.
- **Pessoas trabalhando, não posando.** Olhar para a câmera só em retrato formal.
- **Arquitetura no quadro.** Pé-direito, estante, janela, coluna. O espaço
  físico é parte do argumento de solidez.
- **Sem elemento de urgência.** Contagem regressiva, seta, selo, círculo vermelho.
- **Sem o branding antigo no quadro.** Olho espiral e tipografia arredondada
  contradizem o logo serifado que sustenta a página.
