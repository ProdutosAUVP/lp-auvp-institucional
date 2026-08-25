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

Restam **duas**, e nenhuma delas deixa buraco na página: as duas dobras
publicam hoje uma foto que funciona.

**Hero** (dobra 01), paisagem 16:9 com 2400px ou mais

O que está publicado é `private-day-palco.webp`, e ele tem dois defeitos
conhecidos. O primeiro é a largura: 1616px numa dobra de sangria total é o
limite, e em tela de 2560px o arquivo é esticado. O segundo é que é o mesmo
negativo que aparece na dobra da comunidade, em recorte bem diferente (lá o
enquadramento fecha na poltrona amarela, aqui é o quadro cheio), mas ainda é o
mesmo palco.

O que substitui: plano aberto de auditório ou sala de aula, escuro e quente,
com **vazio no alto** para a assinatura e o texto distribuído na base. Não
precisa de sujeito fora do terço central: o título mudou de lugar.

**Encerramento** (dobra final), paisagem larga

Estúdio com estantes de livros, plano aberto. Serve de fundo em baixa
opacidade, então tolera imagem menos perfeita. Existe registro no acervo.

### Como cada foto foi recortada

Todas as fotos publicadas foram recortadas para a proporção exata da dobra
antes de entrar no repositório, e **o recorte foi escolhido olhando a imagem**,
não por corte central automático. O registro serve para refazer, se a foto
precisar aparecer em outra proporção:

| Foto                             | Origem    | Recorte                        | Por quê                                                                                                                                                                            |
| -------------------------------- | --------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private-day-salao.webp`         | 4200×2800 | 3:2, sem corte                 | Plano aberto: cabe inteiro                                                                                                                                                         |
| `private-day-palestras.webp`     | 1616×1080 | 4:3, fechado no convidado      | O plano aberto do mesmo negativo agora abre a página. Aqui o recorte fecha na poltrona amarela e recusa a versão que pegava os dois: ela cortava a perna do entrevistador na borda |
| `private-day-networking.webp`    | 2624×3936 | 4:3, janela em `y 280`         | Retrato virando paisagem: a janela precisa pegar os dois rostos e o aperto de mãos. Um corte 150px mais baixo decepava a cabeça do homem à direita                                 |
| `ceia-ufg.webp`                  | 2730×1820 | 4:3, cortando 303px à esquerda | Descarta as mesas vazias e mantém o grupo com a bandeira                                                                                                                           |
| `btg-pactual-time.webp`          | 1920×1080 | 4:3, largura centrada no grupo | Descarta a escada vazia e a luz de palco                                                                                                                                           |
| `auvp-experience-hong-kong.webp` | 4240×2832 | 4:3, janela em `x 475, y 150`  | O recorte anterior, de altura cheia, deixava o grupo 162px à esquerda do centro e sobrava margem à direita. A janela fechada centra o grupo e ainda descarta céu e asfalto vazios  |
| `auvp-atlas-embaixador.webp`     | 3072×2304 | 4:3, quase sem corte           | O quadro já nasce 4:3 e bem composto: sai só uma faixa de piso embaixo                                                                                                             |
| `private-day-palco.webp`         | 1616×1080 | 3:2, sem corte                 | Abre a página em sangria total. O quadro cheio é o que tem vazio escuro no alto, onde entra a assinatura                                                                           |
| `b3-listagem-auvp11.webp`        | 6192×4128 | 4:3, cortando 688px à esquerda | O painel AUVP11 encosta na borda direita e precisa continuar inteiro                                                                                                               |
| `sede-auvp-capital.webp`         | 1920×1080 | sem corte                      | Publicada como veio                                                                                                                                                                |

**Ao adicionar uma foto, recorte antes de commitar.** A página não recorta: o
`Figure` define a proporção da moldura e a imagem preenche com `object-cover`,
então uma foto na proporção errada é cortada pelo navegador, no centro, sem
critério nenhum.

**Duas fotos publicadas têm dominante azul**, a do BTG e a da B3. É a cor do
palco e do painel, não uma escolha de arte, mas elas são hoje o ponto da página
mais distante de amarelo, branco e preto. Se incomodar, tratamento em preto e
branco resolve sem trocar a foto.

### Logos dos apoiadores (dobra 10)

Quando o arquivo falta, a dobra exibe o nome em versalete espaçado, o que
funciona e é honesto, mas logo é mais forte.

**O CEIA está em `public/images/brand/ceia.png`**, o único arquivo local do
conjunto. Veio em PNG de 244×82 com fundo transparente, e 82px é o limite: a
dobra o exibe com 80px de altura, ou seja, em 1x, e numa tela retina ele fica
macio. Trocar por SVG quando o CEIA ou a UFG enviarem um.

As logos ficam numa grade de 2×2, e não numa fileira de quatro. Numa fileira
só, cada célula media 134px de largura e o `max-w-full` encolhia as logos
largas a menos da metade da altura pedida: a restrição era de largura, não de
altura.

**Os outros três estão na página servidos pelo CDN da AUVP**
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

As logos aparecem **em cor própria e em corpo grande**, num bloco de quatro ao
lado do título. Não há carrossel: quatro itens cabem na tela, e um carrossel com
poucos itens passa a mesma marca duas vezes por ciclo enquanto esconde parte do
conjunto a cada instante.

Se alguma logo deixar de carregar, aparece o nome em versalete no lugar:
`EndorsementLogo` tem essa reserva, então uma URL quebrada nunca produz o ícone
de imagem quebrada.

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

### `acervo/originais/`, arquivos em resolução cheia

Os originais como vieram, com os nomes de origem. Ficam fora de
`public/` porque **tudo que está em `public/` é copiado para o build e servido a
cada visitante**: são cerca de 3,5 MB que ninguém precisa baixar. Servem de
fonte quando for preciso gerar um recorte novo.

Entre eles está `item 1 - imagem vertical quem somos.webp`, que chegou junto com
as outras e ainda **não foi atribuída a nenhuma dobra**: Raul erguendo um troféu
num palco de luz azul. É a foto mais literal de "recebendo o prêmio" que o
roteiro pede para o BTG, embora a dobra use hoje a do time inteiro. Vale
decidir.

### `acervo/fotos/`, material aproveitável

Quatro fotos do site anterior, tiradas da página quando as imagens foram
mockadas. Continuam disponíveis e valem consideração quando a produção começar.
A quinta, a fachada da sede, voltou para `public/images/` e está publicada na
dobra de missão.

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
