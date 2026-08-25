"use client";

import { useEffect, useRef } from "react";
import { lerp, prefersReducedMotion } from "@/lib/motion";

/**
 * Deriva de poucos pixels em resposta ao ponteiro.
 *
 * Existe para dar profundidade à assinatura do hero: as letras flutuam um
 * pouco à frente da fotografia, como uma placa suspensa. É o único movimento
 * lúdico da primeira dobra, e é de propósito que ele seja quase imperceptível.
 * A tentativa anterior de animar a abertura com um objeto WebGL foi recusada
 * por parecer um enfeite colado sobre a página; ver docs/BRAND.md.
 *
 * Só roda onde faz sentido: ponteiro fino (mouse ou trackpad) e sem
 * `prefers-reduced-motion`. Em toque e em leitura assistida o elemento fica
 * parado, sem nenhuma perda: a deriva não carrega informação.
 *
 * Escreve direto em `style` dentro do rAF, então mover o mouse não custa
 * render de React.
 */
export function PointerDrift({
  children,
  amount = 12,
  className,
}: {
  children: React.ReactNode;
  /** Deslocamento máximo, em pixels, da borda ao centro da janela. */
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    let alvoX = 0;
    let alvoY = 0;
    let atualX = 0;
    let atualY = 0;
    let frame = 0;

    const passo = () => {
      atualX = lerp(atualX, alvoX, 0.06);
      atualY = lerp(atualY, alvoY, 0.06);
      node.style.transform = `translate3d(${atualX.toFixed(2)}px, ${atualY.toFixed(2)}px, 0)`;
      frame = requestAnimationFrame(passo);
    };

    const onPointer = (evento: PointerEvent) => {
      // -1 na borda esquerda/topo, +1 na direita/base.
      alvoX = (evento.clientX / window.innerWidth - 0.5) * 2 * amount;
      alvoY = (evento.clientY / window.innerHeight - 0.5) * 2 * (amount * 0.5);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    frame = requestAnimationFrame(passo);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      node.style.transform = "";
    };
  }, [amount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
