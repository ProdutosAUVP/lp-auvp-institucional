# Linguagem visual

O posicionamento é o de uma **escola clássica e sólida**. A referência não é a
concorrência direta em educação financeira — é a página institucional de uma
universidade centenária: Wharton, Yale, Harvard.

Isso tem consequências concretas de design, listadas abaixo. Todas estão
implementadas em `src/app/globals.css` e nos componentes de `src/components/ui/`.

---

## O que "clássico e sólido" significa aqui

| Escolhemos                   | Recusamos                           | Porque                                                                 |
| ---------------------------- | ----------------------------------- | ---------------------------------------------------------------------- |
| Serifa de texto para títulos | Sans geométrica em peso máximo      | Serifa carrega herança; sans em bold carrega startup.                  |
| Régua de 1px como separador  | Card com sombra e canto arredondado | Instituição usa filete e grade. Sombra é interface de aplicativo.      |
| Papel quente e tinta naveia  | Branco puro e preto puro            | O par branco/preto é frio e digital. Papel e tinta são impressos.      |
| Ouro fosco pontual           | Gradiente dourado                   | Ouro fosco lê como latão de placa. Degradê lê como selo de garantia.   |
| Canto reto                   | `border-radius`                     | Nada nesta página é arredondado, exceto o botão flutuante do WhatsApp. |
| Espaço vertical generoso     | Densidade máxima                    | Margem larga é sinal de confiança: não precisamos gritar.              |
| Uma ação por dobra           | Empilhamento de CTAs                | Instituição convida. Funil empurra.                                    |

---

## Cor

Definida em `@theme` no `globals.css`. Não usar cor fora desta tabela.

| Token        | Valor     | Onde                                                  |
| ------------ | --------- | ----------------------------------------------------- |
| `ink`        | `#0c1a2a` | Fundo das dobras escuras, texto principal sobre papel |
| `ink-soft`   | `#16283c` | Elevação sobre tinta (hover de card)                  |
| `ink-line`   | `#23364b` | Régua sobre tinta                                     |
| `paper`      | `#fbfaf7` | Fundo padrão                                          |
| `paper-warm` | `#f2eee6` | Dobras alternadas — cria o ritmo da página            |
| `paper-line` | `#e2dccf` | Régua sobre papel                                     |
| `gold`       | `#a8853f` | Filete, ícone, elemento decorativo                    |
| `gold-ink`   | `#7a5f28` | Texto pequeno em ouro sobre papel (contraste 5,7:1)   |
| `gold-light` | `#c9a961` | Ouro sobre tinta (contraste 7,7:1)                    |
| `graphite`   | `#46525f` | Texto de apoio sobre papel                            |
| `mist`       | `#9fb0c2` | Texto de apoio sobre tinta                            |

Há **dois tons de ouro por uma razão de acessibilidade**: `gold` tem contraste
suficiente para elemento gráfico, mas não para texto pequeno. Onde o ouro vira
texto — os rótulos em versalete — usa-se `gold-ink` sobre papel e `gold-light`
sobre tinta. Não trocar um pelo outro.

### Ritmo de fundo

A página alterna papel → pergaminho → tinta numa cadência fixa. É o que dá a
sensação de capítulos:

```
hero (tinta) → números (papel) → missão (pergaminho) → conteúdo (papel)
→ processo (tinta) → comunidade (pergaminho) → garantia (papel)
→ iniciativas (papel) → ETFs (tinta) → apoios (papel) → FAQ (pergaminho)
→ encerramento (tinta) → rodapé (tinta)
```

Ao inserir uma dobra nova, respeitar a alternância. Duas dobras escuras seguidas
achatam a leitura.

---

## Tipografia

**Cormorant Garamond** para display, **Inter** para texto e interface.

A escolha de Cormorant não é estética solta: o logotipo da AUVP Escola já é uma
serifa de tipo garalde, com serifas em cunha e eixo inclinado. Cormorant é a
família viva mais próxima dessa construção. O resultado é que o logo e os títulos
parecem da mesma família — que é o que se espera de uma identidade institucional.

| Papel               | Família   | Peso        | Observação                                     |
| ------------------- | --------- | ----------- | ---------------------------------------------- |
| Headline do hero    | Cormorant | 500         | `tracking-[-0.015em]`, `leading-[1.04]`        |
| Título de dobra     | Cormorant | 500         | `text-4xl` → `lg:text-[3.5rem]`                |
| Título de card      | Cormorant | 500         | `text-xl` a `text-2xl`                         |
| Numeral de destaque | Cormorant | 600         | Estatísticas, ticker de ETF, número de etapa   |
| Citação / princípio | Cormorant | 400 itálico | Filete dourado à esquerda                      |
| Corpo de texto      | Inter     | 400         | `leading-[1.75]` em texto corrido              |
| Rótulo (versalete)  | Inter     | 500         | `.eyebrow`: 11px, `tracking: .2em`, caixa alta |
| Botão               | Inter     | 500         | `tracking` de `.06em` a `.1em`                 |

### O rótulo em versalete

É o elemento que mais define o tom. Abre quase toda dobra, sempre precedido de um
filete dourado de 32px:

```tsx
<Eyebrow>A instituição</Eyebrow>
```

Ele funciona como a linha de seção de um relatório anual. Usar com parcimônia:
um por dobra.

---

## Movimento

A página é institucional, não estática. A regra é que **o movimento sirva à
leitura**: ele dá profundidade e continuidade à rolagem, nunca chama atenção
para si.

| Efeito                 | Onde                    | Comportamento                                                                                   |
| ---------------------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| Rolagem com inércia    | Página inteira          | Lenis, `lerp: 0.09`. É o que dá a sensação de fluidez sem alterar layout nenhum.                |
| Saída do hero          | Dobra 01                | A fotografia desce e cresce 12%; o texto sobe e se dissolve. Duas velocidades na mesma rolagem. |
| Revelação por linha    | Headline do hero        | Cada linha sobe de dentro da própria máscara, 110ms de intervalo.                               |
| Revelação na rolagem   | Todas as dobras         | Opacidade 0→1 e 20px de deslocamento, 900ms. Uma vez só, na primeira entrada.                   |
| Escalonamento em grade | Módulos, produtos, ETFs | 70–110ms entre itens da mesma fileira.                                                          |
| Contagem crescente     | Dobra 02                | Os dígitos correm até o valor final em 1,6s (`easeOutExpo`), preservando prefixo e separador.   |
| Paralaxe               | Fotos de missão e ETFs  | ±48 a 56px ao longo da travessia pela janela.                                                   |
| Filete de progresso    | Cabeçalho               | Régua dourada de 2px na base da barra, proporcional à rolagem.                                  |
| Seção ativa            | Menu                    | Filete dourado sob o item da dobra em tela, crescendo do centro.                                |
| Descrição de módulo    | Dobra 04                | Abre no hover animando `grid-template-rows` de `0fr` a `1fr`.                                   |
| Carrossel de apoios    | Dobra 10                | Translação linear contínua, 38s por ciclo, sem interação.                                       |

### Regras que valem para qualquer efeito novo

- **Nenhum objeto 3D ou WebGL.** Foi testado no hero e descartado: um sólido
  girando compete com a tipografia e desmonta o tom de instituição. O movimento
  desta página é sempre movimento _do próprio conteúdo_ — fotografia, texto,
  régua.
- **Nada de `scale` em hover, rotação ou salto.** Transição de cor e
  deslocamento sutil resolvem.
- **Tudo desliga sob `prefers-reduced-motion: reduce`**, inclusive a rolagem com
  inércia e a contagem dos números.
- **Nada depende de JavaScript para existir.** Todo texto e todo número estão no
  HTML servido. O movimento é camada, não estrutura.
- **Rolagem não pode causar render.** Os efeitos escrevem direto em `style`
  dentro do `requestAnimationFrame`, fora do ciclo do React.

## O que não fazer

- Sombra em qualquer elemento que não seja o botão flutuante do WhatsApp.
- `border-radius` fora do mesmo botão.
- Emoji, em qualquer lugar.
- Ícone preenchido. Todos os ícones da página são traço de 1px em `viewBox` 32.
- Contagem regressiva, selo de desconto, seta piscante.
- Mais de uma cor de destaque. O ouro é a única.
- Foto com o branding antigo (olho espiral) no quadro — ver `docs/ASSETS.md`.
