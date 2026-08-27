"use client";

import { useEffect, useState } from "react";
import { closing } from "@/content/closing";

/**
 * Contagem regressiva para o fim das inscrições da próxima turma.
 *
 * É a única contagem regressiva da página, e existe porque conta um prazo que
 * existe de verdade: a turma tem data. `docs/BRAND.md` continua proibindo a
 * outra espécie, a que inventa pressa, e a diferença entre as duas está em
 * três regras que este componente cumpre.
 *
 * **Primeira: prazo vencido não aparece.** Passada a data, ou sem data no
 * conteúdo, o componente não renderiza nada e a dobra segue de pé sem ele. Uma
 * contagem parada em zero, ou negativa, numa página institucional é pior do
 * que contagem nenhuma, e é o destino de toda data que alguém esquece de
 * atualizar.
 *
 * **Segunda: nada pisca, nada fica vermelho.** Os numerais usam a serifa e a
 * régua da página, como o resto dela.
 *
 * **Terceira: quem usa leitor de tela recebe a data, não o tique-taque.** Os
 * numerais ficam em `aria-hidden` e ao lado deles há uma frase com o prazo por
 * extenso. Anunciar a mudança a cada segundo tornaria a dobra inutilizável.
 *
 * Com `prefers-reduced-motion` os segundos somem e o relógio passa a andar de
 * meio em meio minuto: assim não há conteúdo em movimento contínuo, que é o
 * que o critério 2.2.2 do WCAG cobra.
 */

type Restante = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function calcular(alvo: number): Restante | null {
  const falta = alvo - Date.now();
  if (falta <= 0) return null;

  const segundosTotais = Math.floor(falta / 1000);
  return {
    dias: Math.floor(segundosTotais / 86400),
    horas: Math.floor((segundosTotais % 86400) / 3600),
    minutos: Math.floor((segundosTotais % 3600) / 60),
    segundos: segundosTotais % 60,
  };
}

const dataPorExtenso = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "America/Sao_Paulo",
});

export function ClassCountdown() {
  const bruto = closing.countdown.target;
  const alvo = bruto ? Date.parse(bruto) : Number.NaN;

  const [estado, setEstado] = useState<{
    restante: Restante;
    semSegundos: boolean;
  } | null>(null);

  useEffect(() => {
    if (!Number.isFinite(alvo)) return;

    const reduzido = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let intervalo = 0;

    const passo = () => {
      const restante = calcular(alvo);
      setEstado(restante ? { restante, semSegundos: reduzido } : null);
    };

    // A primeira leitura vai por rAF: `Date.now()` no corpo do efeito seria
    // estado escrito durante a montagem, e o servidor não tem como acertar o
    // mesmo valor que o navegador.
    const frame = requestAnimationFrame(() => {
      passo();
      intervalo = window.setInterval(passo, reduzido ? 30_000 : 1000);
    });

    return () => {
      cancelAnimationFrame(frame);
      if (intervalo) clearInterval(intervalo);
    };
  }, [alvo]);

  if (!estado) return null;

  const { restante, semSegundos } = estado;
  const unidades = [
    { valor: restante.dias, rotulo: restante.dias === 1 ? "dia" : "dias" },
    { valor: restante.horas, rotulo: restante.horas === 1 ? "hora" : "horas" },
    { valor: restante.minutos, rotulo: "min" },
    ...(semSegundos ? [] : [{ valor: restante.segundos, rotulo: "seg" }]),
  ];

  // A régua acompanha a medida do parágrafo acima, e não a largura do próprio
  // conteúdo: sem isso ela termina onde o rótulo termina, num ponto que não se
  // alinha com nada.
  return (
    <div className="border-paper/15 flex w-full max-w-[52ch] flex-col gap-4 border-t pt-7">
      {/* Neutro, e não amarelo: o rótulo da dobra logo acima já é amarelo, e
          dois acentos colados um no outro anulam os dois. */}
      <p className="eyebrow text-paper/70">{closing.countdown.label}</p>

      <p className="sr-only">
        {closing.countdown.label} {dataPorExtenso.format(alvo)}.
      </p>

      <ul aria-hidden className="flex items-baseline gap-7 md:gap-10">
        {unidades.map((unidade) => (
          <li key={unidade.rotulo} className="flex flex-col gap-1.5">
            <span className="text-paper font-[family-name:var(--font-display)] text-4xl leading-none font-semibold tabular-nums md:text-5xl">
              {String(unidade.valor).padStart(2, "0")}
            </span>
            <span className="eyebrow text-mist/70">{unidade.rotulo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
