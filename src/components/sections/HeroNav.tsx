"use client";

import { Fragment } from "react";
import { ID_REGUA_HERO, useHeroHandoff } from "@/components/layout/heroHandoff";
import { primaryNav } from "@/content/navigation";
import { cn } from "@/lib/cn";

/**
 * Menu da primeira dobra, apoiado sobre a régua.
 *
 * A régua que separa a assinatura AUVP do posicionamento é a mesma linha que
 * carrega os itens do menu: os filetes correm entre eles, e não atrás. É o
 * recurso do índice de livro antigo, e resolve dois problemas de uma vez: a
 * dobra de abertura fica sem barra por cima da fotografia, e o menu ganha a
 * largura inteira da tela em vez de se espremer num canto.
 *
 * Da segunda dobra em diante quem carrega o menu é a barra fixa. A troca é
 * contínua porque os dois lados leem o mesmo `useHeroHandoff`: este se dissolve
 * para cima no exato quadro em que a barra desce.
 *
 * Abaixo de `lg` não há espaço para quatro itens numa linha, então ali sobra só
 * a régua e o menu continua sendo o da barra fixa, com o botão de gaveta.
 */
export function HeroNav() {
  const encaixado = useHeroHandoff();

  return (
    <div id={ID_REGUA_HERO}>
      <span aria-hidden className="bg-paper/25 block h-px w-full lg:hidden" />

      <nav
        aria-label="Navegação principal"
        inert={encaixado || undefined}
        className={cn(
          "hidden items-center gap-5 transition-[opacity,transform] duration-500 ease-out lg:flex",
          encaixado && "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <Filete />
        {primaryNav.map((item) => (
          <Fragment key={item.href}>
            <a
              href={item.href}
              className="eyebrow text-paper/75 hover:text-paper shrink-0 transition-colors duration-300"
            >
              {item.label}
            </a>
            <Filete />
          </Fragment>
        ))}
      </nav>
    </div>
  );
}

function Filete() {
  return <span aria-hidden className="bg-paper/25 h-px min-w-8 flex-1" />;
}
