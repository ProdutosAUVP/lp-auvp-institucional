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
 * O logo e o botão da área do aluno continuam no fluxo enquanto o hero está em
 * tela, apenas invisíveis. Isso é essencial: se saíssem da grade, o menu
 * escorregaria na horizontal no momento do encaixe.
 */

/** Id da âncora do hero, o elemento que a barra persegue. */
export const ID_ANCORA_HERO = "hero-ancora";

/**
 * Altura da âncora, e portanto a distância entre o topo da barra e a régua.
 * `h-16` deixa a régua uns 6px abaixo da base do texto dos itens, que é o que
 * faz eles parecerem apoiados nela. Abaixo de `lg` a barra não viaja, então a
 * âncora vira só um respiro.
 *
 * Ao mexer aqui, conferir de novo o encontro entre item e régua.
 */
export const CLASSE_ANCORA_HERO = "h-6 lg:h-16";

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
