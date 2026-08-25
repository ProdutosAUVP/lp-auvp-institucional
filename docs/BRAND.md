# Linguagem visual

O posicionamento é o de uma **escola clássica e sólida**. A referência não é a
concorrência em educação financeira, e sim a página institucional de uma
universidade centenária.

## Referências de origem

Cinco páginas guiaram as decisões deste documento. Vale conhecê-las antes de
propor qualquer mudança.

| Referência                         | O que foi aproveitado                                                                                                                                                                    |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SOAS** (Universidade de Londres) | A prova de que preto, branco e amarelo sustentam uma instituição de ensino. Faixas amarelas de largura total com título centralizado, seções pretas, botão em pílula.                    |
| **Lionheart Education**            | Rótulo de seção em serifa itálica no canto superior esquerdo. Assinatura tipográfica gigante na abertura. Faixa preta com declaração centralizada. Mote em caixa alta fechando o rodapé. |
| **Oxford** (conceito)              | A palavra "Oxford" em corpo enorme cortada pela borda, abrindo e fechando a página. Marcadores numerados de seção.                                                                       |
| **Higher Life Foundation**         | Rótulo numa coluna estreita à esquerda com o conteúdo à direita. Muito respiro, tipografia pequena, imagem grande.                                                                       |
| **Harvard** e **Penn**             | Bloco de números institucionais, densidade de rodapé, serifa nos títulos com sans no corpo.                                                                                              |

O que **não** foi copiado: o azul-marinho de Harvard e Penn, que domina as duas
páginas. A AUVP não usa azul.

## As três cores da escola

**Amarelo, branco e preto.** Não existe azul na paleta, em nenhum tom, nem
disfarçado de cinza frio. Os cinzas neutros de apoio (`graphite` e `mist`)
foram escolhidos sem viés de matiz justamente por isso.

| Token         | Valor     | Onde                                                  |
| ------------- | --------- | ----------------------------------------------------- |
| `ink`         | `#101010` | Fundo das dobras escuras, texto principal sobre papel |
| `ink-soft`    | `#1c1c1c` | Elevação sobre tinta (hover de card)                  |
| `ink-line`    | `#303030` | Régua sobre tinta                                     |
| `paper`       | `#ffffff` | Fundo padrão                                          |
| `paper-soft`  | `#f5f4f1` | Dobras alternadas, cria o ritmo da página             |
| `paper-line`  | `#e3e1db` | Régua sobre papel                                     |
| `yellow`      | `#f2c230` | Acento sobre preto e preenchimento sólido             |
| `yellow-soft` | `#f7d977` | Hover sobre tinta                                     |
| `graphite`    | `#4a4a4a` | Texto de apoio sobre papel                            |
| `mist`        | `#b0b0b0` | Texto de apoio sobre tinta                            |

### A exceção das cores de ETF

Cada fundo tem uma cor de identidade, e ela aparece **num lugar só**: o
subtítulo (a categoria) do fundo na dobra "Nossos ETFs", que tem fundo tinta.

| Fundo    | Cor     | Token                | Contraste sobre `ink` |
| -------- | ------- | -------------------- | --------------------- |
| `AUVP11` | verde   | `--color-etf-auvp11` | 8,1:1                 |
| `AUPO11` | rosa    | `--color-etf-aupo11` | 7,0:1                 |
| `AREA11` | azul    | `--color-etf-area11` | 7,0:1                 |
| `ABTC11` | amarelo | `--color-etf-abtc11` | 10,7:1                |

Elas **não são cores da escola** e não abrem precedente: o azul do AREA11 é a
cor daquele fundo, não uma revogação da regra acima. Nenhuma delas pode migrar
para outra dobra, para o cabeçalho, para o rodapé ou para um botão. O valor de
cada uma foi ajustado até passar de 7:1 sobre tinta, porque o subtítulo é texto
pequeno em caixa alta.

### A regra que governa o amarelo

Esta é a decisão mais importante da paleta, e a mais fácil de quebrar sem
perceber.

**Amarelo é ilegível sobre branco.** `#f2c230` sobre `#ffffff` dá contraste de
1,87:1, quando texto exige 4,5:1 e elemento gráfico exige 3:1. Escurecer o
amarelo até passar no contraste produz um tom que já não lê como amarelo, e sim
como mostarda ou oliva. Não há saída por ajuste de tom.

Daí o sistema:

- **Sobre preto**, amarelo é o acento: rótulo de seção, filete, numeral,
  categoria de ETF, título de grupo no rodapé. Contraste de 10,7:1.
- **Sobre branco**, amarelo entra apenas como **preenchimento sólido**, com
  texto preto por cima. A faixa de garantia é o exemplo: fundo inteiro amarelo,
  texto preto, contraste de 12,3:1.
- **Sobre branco, o acento estrutural é preto.** Rótulos, filetes, ícones e
  bordas de seleção nas dobras claras são pretos ou cinza, nunca amarelos.

Quem quiser mais amarelo numa dobra clara deve pintar uma área, não colorir um
traço.

### Ritmo de fundo

A página alterna papel, papel de alternância e tinta numa cadência fixa. É o que
dá sensação de capítulos:

```
hero (tinta) → números (papel) → missão (alternância) → conteúdo (papel)
→ processo (tinta) → comunidade (alternância) → garantia (AMARELO)
→ iniciativas (papel) → ETFs (tinta) → apoios (papel) → FAQ (alternância)
→ encerramento (tinta) → rodapé (tinta)
```

A faixa amarela é única na página. Repeti-la gasta o efeito.

## Tipografia

**Sentient** para display, **Inter** para texto e interface.

Sentient é a serifa do próprio logotipo da AUVP Escola, e por isso é a serifa do
site: logo e títulos são literalmente a mesma letra, não uma aproximação.

Ela não está no Google Fonts, então não passa pelo `next/font`. Vem do CDN da
fundição (Fontshare, Indian Type Foundry), no mesmo padrão que a landing de
produção da escola já usa para a Satoshi:

```html
<link
  rel="stylesheet"
  href="https://api.fontshare.com/v2/css?f%5B%5D=sentient@300,400,500,700&display=swap"
/>
```

A licença permite hospedar os arquivos junto do site. Vale fazer quando alguém
tiver os `.woff2` em mãos: remove uma dependência de terceiro e uma conexão a
mais no carregamento. A pilha de reserva é `Georgia, "Times New Roman", serif`,
que mantém a página legível se o CDN falhar.

**Só os pesos que existem: 300, 400, 500 e 700.** Pedir 600 faz o navegador
sintetizar e engordar o texto sem aviso.

| Papel               | Família           | Peso | Observação                                                |
| ------------------- | ----------------- | ---- | --------------------------------------------------------- |
| Headline do hero    | Cormorant         | 500  | `tracking-[-0.015em]`, `leading-[1.04]`                   |
| Título de dobra     | Cormorant         | 500  | `text-4xl` até `lg:text-[3.5rem]`                         |
| Rótulo de seção     | Cormorant itálico | 400  | Componente `Eyebrow`, precedido de filete                 |
| Título de card      | Cormorant         | 500  | `text-xl` a `text-2xl`                                    |
| Numeral de destaque | Cormorant         | 600  | Estatísticas, ticker de ETF, etapa do processo            |
| Citação             | Cormorant itálico | 400  | Filete à esquerda                                         |
| Corpo de texto      | Inter             | 400  | `leading-[1.75]` em texto corrido                         |
| Micro-rótulo        | Inter             | 500  | Utilitária `.eyebrow`: 11px, caixa alta, `tracking: .2em` |
| Botão               | Inter             | 500  | `tracking` de `.06em` a `.1em`                            |

### Nada de etiqueta antes do título

Cada dobra abria com um rótulo precedido de filete curto, no formato
um traço curto seguido de `A instituição`. **Foi removido.** O título de uma dobra institucional não
precisa ser anunciado: "A instituição" acima de "O Brasil merece educação
financeira de verdade" só repetia, em corpo menor, o que o título já dizia.

O que sobrou:

- **`GroupLabel`**, em serifa itálica e sem filete, para nomear um grupo de
  cards dentro de uma dobra. Existe em dois lugares, "Produtos" e "Parceria e
  presença internacional", e sem ele os dois grupos viram uma lista só. É
  informação, não decoração.
- **A utilitária `.eyebrow`**, em versalete espaçado, para micro-rótulos:
  legenda de foto, categoria de card, link de "Saiba mais", etiqueta de foto
  pendente. É o registro de interface.

Não reintroduzir a etiqueta antes de um título.

### Uma largura de container para a página inteira

Todas as dobras usam a mesma largura, `76rem`. Houve uma variante mais larga
para as grades de imagem, e ela custou caro: as dobras que a usavam começavam
96px mais à esquerda que as outras, e a borda do texto saltava a cada dobra
durante a rolagem. Numa página cujo argumento é a régua e a grade, esse é o
defeito mais visível possível.

**Não reintroduzir.** Se uma grade precisar de mais ar, o caminho é reduzir a
coluna ou o `gap`, não alargar o container de uma dobra só.

Faixas curtas, de uma linha só, usam `compact` no `Section`, que é uma prop e
não uma classe: passar `py-*` pelo `className` não funciona, porque a
utilitária base com valor arbitrário vence na ordem do CSS gerado.

### A primeira dobra é uma capa

O hero não é um bloco de texto centralizado sobre uma foto: é uma capa. A
fotografia sangra na tela inteira, a assinatura da marca ocupa o alto em corpo
arquitetônico e o título fica partido nas duas pontas da linha de base,
"Aprenda a investir." de um lado e "Viva com liberdade." do outro. Entre eles,
só a fotografia. Embaixo, uma régua separa o texto de apoio do único botão.

A referência aprovada é a abertura da Lionheart, e o recurso é o mesmo que
Oxford e Yale usam em página de reitoria: o nome da instituição ocupa o quadro
e a fotografia responde por todo o resto.

O título fica embaixo por um motivo prático, além do estético: é onde o véu
inferior garante contraste, seja qual for a foto que entrar no lugar desta.

A tentativa anterior punha uma curva de crescimento traçada atrás do texto
centralizado. Saiu junto com o texto centralizado: com a foto em sangria total
ela virava ruído sobre a imagem, e uma curva de crescimento a poucos pixels de
um botão sempre corre o risco de ser lida como promessa de rentabilidade, que a
página não faz em lugar nenhum.

### A assinatura em escala arquitetônica

"AUVP" em corpo enorme aparece em um lugar só: o alto do hero, em preenchimento
sólido. O rodapé tinha a mesma assinatura em corpo maior, e ela saiu: fechar a
página com o nome em escala de fachada competia com a informação do rodapé, que
é onde alguém vai procurar um link.

Funciona porque nessa escala a palavra deixa de ser logotipo e vira arquitetura:
dá porte institucional à dobra sem nenhum ornamento. Fica em `aria-hidden`,
porque o nome já é anunciado pelo logo do cabeçalho.

**São as letras do arquivo da marca, não a palavra composta numa fonte.** O A da
AUVP é um V invertido, sem travessão, e digitar "A" em qualquer fonte, Sentient
inclusive, entrega a letra errada. Os contornos vivem em
`src/components/ui/AuvpLettering.tsx`, extraídos do primeiro grupo de
`auvp-escola-serif-preta.svg` e recortados na caixa exata das quatro letras. O
mesmo desenho está em `public/logos/auvp-monograma.svg`, para uso fora do React.

É componente, e não `<img>`, porque o `Wordmark` ainda oferece a versão em
contorno: filtro sobre `<img>` não produz traço, e manter dois arquivos, um
cheio e um vazado, duplicaria a marca em dois lugares que podem divergir.

Usar nesse lugar e em nenhum outro. Repetida, vira papel de parede.

## Forma

**Canto reto em tudo, exceto botão.** Card, faixa, moldura de foto e régua são
retos. O botão é pílula, porque é o único elemento que precisa parecer clicável,
e porque quatro das cinco referências fazem isso.

**Sem sombra**, com a única exceção do botão flutuante do WhatsApp, que precisa
se destacar de qualquer fundo sobre o qual passe.

## Movimento

A página é institucional, não estática. A regra é que **o movimento sirva à
leitura**: dá profundidade e continuidade à rolagem, nunca chama atenção para si.

| Efeito                 | Onde                    | Comportamento                                                |
| ---------------------- | ----------------------- | ------------------------------------------------------------ |
| Rolagem com inércia    | Página inteira          | Lenis, `lerp: 0.09`                                          |
| Saída do hero          | Dobra 01                | Fundo desce e cresce 12%, texto sobe e se dissolve           |
| Revelação por linha    | Headline do hero        | Cada linha sobe da própria máscara, 110ms de intervalo       |
| Revelação na rolagem   | Todas as dobras         | Opacidade e 20px de deslocamento, 900ms, uma vez só          |
| Escalonamento em grade | Módulos, produtos, ETFs | 70 a 110ms entre itens da mesma fileira                      |
| Contagem crescente     | Dobra 02                | Dígitos correm até o valor final em 1,6s (`easeOutExpo`)     |
| Paralaxe               | Fotos de missão e ETFs  | 48 a 56px ao longo da travessia pela janela                  |
| Filete de progresso    | Cabeçalho               | Régua preta de 2px, proporcional à rolagem                   |
| Dobra ativa            | Menu                    | Filete sob o item da dobra em tela, crescendo do centro      |
| Descrição de módulo    | Dobra 04                | Abre no hover animando `grid-template-rows` de `0fr` a `1fr` |
| Carrossel de apoios    | Dobra 10                | Translação linear contínua, 38s por ciclo                    |

### Regras para qualquer efeito novo

- **Nenhum objeto 3D ou WebGL.** Foi testado no hero e descartado: um sólido
  girando compete com a tipografia e desmonta o tom de instituição. O movimento
  desta página é sempre movimento do próprio conteúdo.
- **Nada de `scale` em hover, rotação ou salto.**
- **Tudo desliga sob `prefers-reduced-motion: reduce`**, inclusive a rolagem com
  inércia e a contagem dos números.
- **Nada depende de JavaScript para existir.**
- **Rolagem não pode causar render.** Os efeitos escrevem direto em `style`
  dentro do `requestAnimationFrame`, fora do ciclo do React.
- **Estado inicial de escala vai em `style`, não na utilitária `scale-*`.** No
  Tailwind v4 essas utilitárias escrevem na propriedade `scale`, que é
  independente de `transform` e se multiplica com ela: uma classe `scale-x-0`
  junto de um `transform` escrito pelo rAF resulta em zero, e o elemento nunca
  aparece. Já custou dois bugs invisíveis.
- **Todo efeito preso ao ponteiro precisa de um caminho para teclado e toque.**
  Ver `docs/ACCESSIBILITY.md`.

## O que não fazer

- Azul, em qualquer tom, em qualquer lugar.
- Amarelo como texto ou filete sobre branco.
- Sombra fora do botão flutuante do WhatsApp.
- `border-radius` fora do botão.
- Emoji, em qualquer lugar.
- Ícone preenchido. Todos os ícones são traço de 1px em `viewBox` 32.
- Travessão, o traço longo, em qualquer texto, comentário ou documento. Use dois-pontos,
  vírgula, parênteses ou ponto final.
- Contagem regressiva, selo de desconto, seta piscante.
- Mais de uma cor de destaque. O amarelo é a única.
- Foto com o branding antigo (olho espiral) no quadro. Ver `docs/ASSETS.md`.
