"use client";

import { useEffect, useState } from "react";

/**
 * A passagem de bastão entre os dois estados do menu.
 *
 * Na primeira dobra o menu não fica numa barra: ele se apoia sobre a régua que
 * separa a assinatura AUVP do posicionamento, com filetes entre os itens. Da
 * segunda dobra em diante ele volta a ser a barra fixa de papel.
 *
 * Os dois estados são o mesmo evento visto de dois lados, então precisam de uma
 * fonte de verdade só. Ela é geométrica, e não um `scrollY` comparado com um
 * número mágico: o menu do hero encaixa exatamente quando a régua dele alcança
 * a base da barra fixa. Assim o corte acontece no mesmo pixel em qualquer
 * altura de tela, e um cresce enquanto o outro se dissolve.
 */

/** Id da régua do hero, o elemento que os dois estados observam. */
export const ID_REGUA_HERO = "hero-regua";

/** Altura da barra fixa, `h-24` no cabeçalho. */
const ALTURA_BARRA = 96;

export function useHeroHandoff() {
  const [encaixado, setEncaixado] = useState(false);

  useEffect(() => {
    const regua = document.getElementById(ID_REGUA_HERO);
    let frame = 0;

    const medir = () => {
      frame = 0;
      // Página sem hero, como a 404: a barra vale desde o topo.
      setEncaixado(!regua || regua.getBoundingClientRect().top <= ALTURA_BARRA);
    };

    const agendar = () => {
      if (frame) return;
      frame = requestAnimationFrame(medir);
    };

    // A primeira medida também vai pelo rAF: recarregar a página no meio da
    // rolagem precisa acertar o estado, e escrever estado direto no corpo do
    // efeito é render a mais e erro de lint.
    agendar();

    if (regua) {
      window.addEventListener("scroll", agendar, { passive: true });
      window.addEventListener("resize", agendar, { passive: true });
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, []);

  return encaixado;
}
