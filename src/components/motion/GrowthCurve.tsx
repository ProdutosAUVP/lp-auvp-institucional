"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Curva de crescimento do hero.
 *
 * É o assunto da escola desenhado no fundo da primeira dobra: uma linha que
 * sobe devagar, com uma régua de fundo, e um ponto que corre sobre ela
 * acompanhando o ponteiro. A curva se desenha sozinha ao carregar, o que dá o
 * lado lúdico sem nenhum objeto flutuando na tela.
 *
 * **A curva não pode ganhar número, moeda, escala nem rótulo.** Sem eles ela é
 * atmosfera; com eles vira promessa de rentabilidade, que a página não faz em
 * lugar nenhum (ver docs/CONTENT.md). É por isso que a régua de fundo não tem
 * marcação de valor e o ponto que segue o ponteiro não abre etiqueta.
 *
 * Fica em `aria-hidden`: não carrega informação, e descrevê-la a quem usa
 * leitor de tela só atrapalharia a leitura do headline.
 */

const LARGURA = 1200;
const ALTURA = 420;

/** Curva de juros compostos normalizada, amostrada em 96 pontos. */
function pontos() {
  const total = 96;
  return Array.from({ length: total + 1 }, (_, i) => {
    const t = i / total;
    // Crescimento exponencial suave, com uma ondulação pequena para não
    // parecer uma função de livro-texto.
    const base = Math.pow(t, 2.35);
    const ondulacao = Math.sin(t * Math.PI * 3.1) * 0.022 * t;
    const y = ALTURA - (base + ondulacao) * ALTURA * 0.92 - 12;
    return { x: t * LARGURA, y };
  });
}

function caminho(ps: { x: number; y: number }[]) {
  return ps
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
}

export function GrowthCurve({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const linhaRef = useRef<SVGPathElement>(null);
  const marcaRef = useRef<SVGGElement>(null);
  const [desenhada, setDesenhada] = useState(false);

  const ps = pontos();
  const d = caminho(ps);

  // Desenho da linha. O estado vira sempre por timeout, e não em chamada
  // síncrona dentro do efeito: quem pediu menos movimento chega ao mesmo
  // estado final, só que sem espera, e a transição em si é desligada no CSS
  // (utilitária `curva-tracado`).
  useEffect(() => {
    const id = window.setTimeout(
      () => setDesenhada(true),
      prefersReducedMotion() ? 0 : 260,
    );
    return () => window.clearTimeout(id);
  }, []);

  // Ponto que corre sobre a curva acompanhando o ponteiro.
  useEffect(() => {
    const svg = svgRef.current;
    const linha = linhaRef.current;
    const marca = marcaRef.current;
    if (!svg || !linha || !marca) return;

    const fino = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fino.matches || prefersReducedMotion()) return;

    const comprimento = linha.getTotalLength();
    let frame = 0;
    let alvo = 0;
    let atual = 0;
    let ativo = false;

    const desenhar = () => {
      frame = requestAnimationFrame(desenhar);
      atual += (alvo - atual) * 0.12;
      const p = linha.getPointAtLength(atual * comprimento);
      marca.setAttribute("transform", `translate(${p.x} ${p.y})`);
      marca.style.opacity = ativo ? "1" : "0";
    };

    const mover = (event: PointerEvent) => {
      const r = svg.getBoundingClientRect();
      // A fração horizontal do ponteiro vira posição ao longo da curva. Não é
      // a mesma coisa que o x do traçado, e é o que se quer: o ponto anda
      // sempre sobre a linha, nunca ao lado dela.
      alvo = Math.min(Math.max((event.clientX - r.left) / r.width, 0), 1);
      ativo = true;
    };

    const sair = () => {
      ativo = false;
    };

    const raiz = svg.closest("section") ?? svg;
    raiz.addEventListener("pointermove", mover as EventListener);
    raiz.addEventListener("pointerleave", sair);
    frame = requestAnimationFrame(desenhar);

    return () => {
      raiz.removeEventListener("pointermove", mover as EventListener);
      raiz.removeEventListener("pointerleave", sair);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden
      viewBox={`0 0 ${LARGURA} ${ALTURA}`}
      preserveAspectRatio="none"
      className={className}
    >
      {/* Régua de fundo, sem marcação de valor, esmaecendo para o alto:
          sem isso a borda superior do SVG vira um risco atravessando o texto. */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.16"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 55%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 55%)",
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            x2={LARGURA}
            y1={(ALTURA / 4) * i}
            y2={(ALTURA / 4) * i}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      <path
        ref={linhaRef}
        d={d}
        fill="none"
        stroke="var(--color-yellow)"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        className="curva-tracado"
        style={{ strokeDasharray: 1, strokeDashoffset: desenhada ? 0 : 1 }}
      />

      <g
        ref={marcaRef}
        style={{ opacity: 0, transition: "opacity 300ms ease" }}
      >
        <line
          y1={0}
          y2={ALTURA}
          stroke="var(--color-yellow)"
          strokeWidth="1"
          opacity="0.35"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          r="5"
          fill="var(--color-yellow)"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
