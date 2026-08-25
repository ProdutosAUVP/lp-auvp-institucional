# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Não publicado]

### Adicionado

- **O hero vira uma capa.** Fotografia em sangria total, a assinatura da marca
  em corpo arquitetônico no alto e o título partido nas duas pontas da linha de
  base. Embaixo, uma régua separa o texto de apoio do único botão. Referência
  aprovada: a abertura da Lionheart.
- Deriva de poucos pixels na assinatura do hero, em resposta ao ponteiro. Só em
  ponteiro fino e sem `prefers-reduced-motion`.
- Cor de identidade de cada ETF no subtítulo do fundo: verde no AUVP11, rosa no
  AUPO11, azul no AREA11, amarelo no ABTC11. Valem só ali, e não abrem
  precedente contra a regra de paleta.
- Logo do CEIA na dobra de apoiadores, o único arquivo local do conjunto.
- Fotografia de relações internacionais: entrevista do AUVP Atlas com
  embaixador. Era a última reserva de dobra interna.

### Corrigido

- **As logos de apoiador apareciam com metade da altura pedida.** Numa fileira
  de quatro, cada célula media 134px e o `max-w-full` encolhia as logos largas:
  a restrição era de largura, não de altura. Agora são duas fileiras de duas.
- A foto da AUVP Experience ficava 162px à esquerda do centro da moldura. O
  recorte novo centra o grupo e ainda descarta céu e asfalto vazios.

- **A página usava duas larguras de container.** As dobras com a variante larga
  começavam 96px mais à esquerda, e a borda do texto saltava a cada dobra
  durante a rolagem. Agora é uma largura só, e todos os títulos alinhados à
  esquerda partem do mesmo ponto.
- O título de "Iniciativas" ficava indentado sobre uma coluna vazia: o rail
  existia para segurar o rótulo que foi removido das dobras.
- Faixas curtas voltam a ter menos respiro que as dobras longas, agora por uma
  prop `compact` em vez de `className`, que perdia na ordem do CSS gerado.

### Removido

- Assinatura gigante do rodapé.
- Curva de crescimento do hero, junto com o texto centralizado que ela
  acompanhava. Sobre a foto em sangria total ela virava ruído, e uma curva de
  crescimento a poucos pixels de um botão sempre corre o risco de ser lida como
  promessa de rentabilidade.
- `LineReveal` e `canRunWebGL`, que ficaram sem uso.

### Alterado

- Seis fotografias publicadas: as duas restantes do Private Day, CEIA, BTG
  Pactual, AUVP Experience e a listagem do AUVP11 na B3. Restam duas reservas,
  as duas com foto publicada que já funciona.
- A foto de palestras do Private Day passa a fechar na poltrona amarela: o
  plano aberto do mesmo negativo agora abre a página.
- Cada recorte foi escolhido olhando a imagem, e está registrado em
  `docs/ASSETS.md` para poder ser refeito.

### Alterado

- **Nosso processo vira uma linha do tempo vertical.** Trilho que preenche com
  a rolagem, três nós numerados que acendem ao cruzar a faixa central da tela, e
  os itens de cada etapa listados ao lado do nó.
- O botão da Análise de Perfil dá lugar a um balão que acompanha o ponteiro, e
  a dobra inteira passa a levar à Análise. Teclado e toque têm caminhos
  próprios, descritos em `docs/ACCESSIBILITY.md`.

### Corrigido

- O filete de progresso do cabeçalho nunca apareceu desde que foi criado: a
  classe `scale-x-0` do Tailwind v4 escreve na propriedade `scale`, que se
  multiplica com o `transform` escrito pelo rAF e o zerava. O trilho da linha do
  tempo nasceu com o mesmo defeito.

### Alterado

- A assinatura decorativa do hero e do rodapé passa a usar **as letras do
  arquivo da marca**, e não a palavra "AUVP" composta na fonte de display. O A
  da AUVP é um V invertido, sem travessão, e nenhuma fonte entrega essa letra
  digitando "A".
- No rodapé, o logo alinha pela esquerda com o texto abaixo dele: o `flex-col`
  esticava o `<svg>`, que passou a obedecer à largura esticada em vez da própria.

### Adicionado

- Primeira fotografia real da dobra de comunidade: o plano aberto do salão do
  Private Day, em largura total. As duas ao lado dela continuam como reserva.
- `acervo/originais/`, com os arquivos em resolução cheia como vieram do CDN.

### Alterado

- Dobra de missão perde os dois parágrafos de fecho, sobre o princípio fundador,
  e volta a exibir a fotografia da fachada da sede, que estava arquivada.
- **Apoiadores deixam de ser carrossel.** São quatro, e quatro cabem na tela:
  título de um lado, as quatro logos do outro, maiores e em cor própria. Com
  poucos itens, o carrossel passava a mesma marca duas vezes por ciclo e ainda
  escondia parte do conjunto a cada instante.

### Alterado

- **Serifa do site passa a ser a Sentient**, a mesma do logotipo, no lugar da
  Cormorant Garamond. Vem do CDN da Fontshare, como a landing de produção já faz
  com a Satoshi.
- **Etiqueta antes do título removida de todas as dobras.** Sobrou o
  `GroupLabel`, sem filete, onde o rótulo nomeia um grupo de cards e não repete
  o título ao lado.
- Logo do cabeçalho e do rodapé em corpo maior; a barra fixa cresceu junto, e o
  deslocamento de âncora acompanhou.
- **Conteúdo programático refeito** na mecânica da landing da AUVP Advisors:
  coluna fixa à esquerda, oito módulos rolando à direita, numeral vazado que
  preenche ao cruzar o meio da tela. A grade com descrição no hover saiu: ela
  escondia sete oitavos do conteúdo atrás de um gesto que não existe no celular.
- Logos de BTG Pactual, Governo de Goiás e R7 passam a aparecer no carrossel,
  servidas pelo CDN da AUVP enquanto os arquivos não são baixados.

### Alterado

- **Paleta refeita nas três cores da escola: amarelo, branco e preto.** O
  azul-marinho e o ouro fosco saíram por inteiro, inclusive dos cinzas de apoio,
  que tinham viés frio. O amarelo obedece a uma regra de contraste: acento sobre
  preto, preenchimento sólido sobre branco, nunca texto nem filete sobre branco.
- Faixa de garantia passa a ser o único bloco amarelo de área grande da página.
- Rótulo de seção passa de versalete em sans para serifa itálica. O versalete
  continua nos micro-rótulos.
- Botões passam a pílula. Quatro das cinco referências fazem isso.
- Títulos de seção ganham variante com o rótulo em coluna estreita à esquerda.
- **Todas as fotografias mockadas.** Cada lugar que receberá imagem exibe uma
  reserva com o briefing do que produzir. As fotos do site anterior foram para
  `acervo/fotos/`, fora do que é publicado.
- Nenhum travessão em texto, comentário ou documentação do repositório.

### Adicionado

- Assinatura tipográfica em escala arquitetônica no hero e no rodapé, cortada
  pela borda, no recurso usado por Oxford e Lionheart.
- Reserva de fundo para as dobras em que a foto ocupa a seção inteira.
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

## [0.1.0] · página institucional

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
