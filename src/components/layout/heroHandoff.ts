"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A barra fixa pousa sobre a régua do hero e só depois encaixa no topo.
 *
 * Não existem dois menus. Existe um, o da barra, e ele muda de altura: enquanto
 * o hero está em tela a barra viaja junto com uma âncora colocada no fluxo da
 * primeira dobra, de forma que os itens fiquem apoiados sobre a régua que separa
 * a assinatura AUVP do posicionamento. Quando essa âncora alcança o topo da
 * janela, a barra encaixa e ganha papel, logo e botão.
 *
 * Foi assim que a transição ficou realmente contínua. Com dois menus, um no
 * hero e outro na barra, os itens trocavam de lugar e de estilo no meio do
 * caminho por mais que a dissolução fosse suave: eram elementos diferentes. Com
 * um só, os itens não se movem um pixel na horizontal e não mudam de corpo. O
 * que muda é cor, e mais nada.
 *
 * A barra é a mesma nos dois estados, e não só o menu: logo, itens e botão da
 * área do aluno aparecem iguais sobre o hero e sobre a página, no mesmo lugar e
 * no mesmo tamanho. O que muda é a cor deles, e o que existe atrás: sobre o
 * hero, só a borda de baixo; encaixada, o fundo de papel. É por isso que a
 * âncora tem exatamente a altura da barra, e que a barra usa a mesma margem
 * lateral do hero em vez do `Container`.
 */

/** Id da âncora do hero, o elemento que a barra persegue. */
export const ID_ANCORA_HERO = "hero-ancora";

/**
 * Altura da âncora. A partir de `lg` ela é exatamente a altura da barra
 * (`h-24`), então a borda de baixo da barra pousa no fim da âncora: a linha do
 * hero e o pé do fundo branco ficam no mesmo lugar da grade, que é o ponto.
 *
 * Abaixo de `lg` a barra não viaja e fica no topo, com a própria linha. A
 * âncora ali vira só um respiro entre a assinatura e o posicionamento.
 */
export const CLASSE_ANCORA_HERO = "h-10 lg:h-24";

/** Abaixo disto o menu vive na gaveta e a barra fica parada no topo. */
const LARGURA_VIAGEM = "(min-width: 1024px)";

export function useHeroDock(fixarNoTopo: boolean) {
  const ref = useRef<HTMLElement>(null);
  const [encaixado, setEncaixado] = useState(false);

  useEffect(() => {
    const barra = ref.current;
    if (!barra) return;

    const ancora = document.getElementById(ID_ANCORA_HERO);
    const viaja = window.matchMedia(LARGURA_VIAGEM);
    let frame = 0;

    const medir = () => {
      frame = 0;

      // Página sem hero, como a 404, ou gaveta aberta: a barra vale no topo.
      if (!ancora || fixarNoTopo) {
        barra.style.transform = "";
        setEncaixado(true);
        return;
      }

      const topo = Math.max(0, ancora.getBoundingClientRect().top);
      barra.style.transform =
        viaja.matches && topo > 0 ? `translate3d(0, ${topo}px, 0)` : "";
      setEncaixado(topo <= 0);
    };

    const agendar = () => {
      if (frame) return;
      frame = requestAnimationFrame(medir);
    };

    // A primeira medida também vai pelo rAF: recarregar a página no meio da
    // rolagem precisa acertar o estado, e escrever estado direto no corpo do
    // efeito é render a mais e erro de lint.
    agendar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar, { passive: true });
    viaja.addEventListener("change", agendar);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      viaja.removeEventListener("change", agendar);
      barra.style.transform = "";
    };
  }, [fixarNoTopo]);

  return { ref, encaixado };
}
