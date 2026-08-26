"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { useHeroDock } from "@/components/layout/heroHandoff";
import { primaryNav } from "@/content/navigation";
import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/cn";

/**
 * Barra fixa. Sobre o hero ela pousa na régua da primeira dobra; da segunda em
 * diante encaixa no topo, em papel.
 *
 * **Este é o único menu da página.** Sobre o hero a barra não some e não é
 * substituída por outra: ela desce até a régua que separa a assinatura AUVP do
 * posicionamento e fica ali, sem fundo, com o logo e o botão da área do aluno
 * invisíveis mas ainda ocupando a grade. Os itens não trocam de lugar nem de
 * corpo entre um estado e outro, porque são os mesmos elementos. Só a cor muda.
 *
 * Houve uma versão com dois menus, um no hero e outro na barra, dissolvendo um
 * no outro. Por mais suave que fosse a dissolução, os itens escorregavam na
 * horizontal no meio do caminho: eram elementos diferentes, em grades
 * diferentes. Não voltar a isso. Ver `useHeroDock`.
 *
 * Abaixo de `lg` a barra não viaja: ali o menu vive na gaveta, e o botão dela
 * pertence ao topo da tela. Sobre a fotografia em tinta o traço branco se lê
 * sem barra atrás.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, encaixado } = useHeroDock(menuOpen);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /**
   * Marca no menu a dobra que está em tela. Um IntersectionObserver com faixa
   * central estreita evita a oscilação típica de comparar `scrollY` com offsets.
   */
  useEffect(() => {
    const targets = primaryNav
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.querySelector(item.href))
      .filter((node): node is Element => node !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.find((entry) => entry.isIntersecting);
        if (inView) setActiveSection(`#${inView.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onPaper = encaixado || menuOpen;
  /** Verdadeiro enquanto a barra ainda é só o botão de gaveta sobre o hero. */
  const sobreOHero = !encaixado && !menuOpen;

  return (
    <header
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 will-change-transform",
        onPaper
          ? "border-paper-line bg-paper/95 border-b backdrop-blur-sm"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-24 items-center justify-between gap-8">
        <a
          href="#principal"
          className={cn(
            "flex shrink-0 items-center transition-[opacity,transform] duration-500 ease-out",
            sobreOHero && "pointer-events-none -translate-y-2 opacity-0",
          )}
          aria-hidden={sobreOHero}
          tabIndex={sobreOHero ? -1 : undefined}
          aria-label="AUVP Escola de Investimentos, início"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={asset(
              onPaper
                ? "/logos/auvp-escola-serif-preta.svg"
                : "/logos/auvp-escola-serif-branca.svg",
            )}
            alt="AUVP Escola de Investimentos"
            width={1003}
            height={203}
            priority
            className="h-10 w-auto md:h-12"
          />
        </a>

        {/* O menu é o mesmo nos dois estados: nunca some, nunca se desloca.
            Do hero para a página só a cor dos itens muda. */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 lg:flex"
        >
          {primaryNav.map((item) => {
            const current = item.href === activeSection;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "group relative text-sm transition-colors duration-300",
                  onPaper
                    ? current
                      ? "text-ink"
                      : "text-graphite hover:text-ink"
                    : current
                      ? "text-paper"
                      : "text-paper/75 hover:text-paper",
                )}
              >
                {item.label}
                {/* Filete que cresce do centro: no hover e, fixo, na dobra atual. */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-center scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
                    current && "scale-x-100",
                    onPaper ? "bg-ink" : "bg-yellow",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.studentArea}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden rounded-full border px-5 py-2.5 text-[0.8125rem] font-medium tracking-[0.06em] transition-[opacity,transform,color,background-color,border-color] duration-500 ease-out sm:inline-flex",
              onPaper
                ? "border-ink/25 text-ink hover:bg-ink hover:text-paper"
                : "border-paper/35 text-paper hover:bg-paper hover:text-ink",
              sobreOHero && "pointer-events-none -translate-y-2 opacity-0",
            )}
            aria-hidden={sobreOHero}
            tabIndex={sobreOHero ? -1 : undefined}
          >
            Área do aluno
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className={cn(
              "-mr-2 p-2 lg:hidden",
              onPaper ? "text-ink" : "text-paper",
            )}
          >
            <span className="sr-only">
              {menuOpen ? "Fechar menu" : "Abrir menu"}
            </span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3.5 8h17M3.5 16h17" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div
          id="menu-mobile"
          className="border-paper-line bg-paper h-[calc(100svh-6rem)] overflow-y-auto border-t lg:hidden"
        >
          <Container className="flex flex-col py-4">
            {primaryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-paper-line text-ink border-b py-4 font-[family-name:var(--font-display)] text-2xl last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.studentArea}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-paper mt-5 mb-2 inline-flex justify-center rounded-full px-6 py-3.5 text-sm font-medium tracking-[0.08em] sm:hidden"
            >
              Área do aluno
            </a>
          </Container>
        </div>
      ) : null}

      {encaixado && !menuOpen ? <ScrollProgress /> : null}
    </header>
  );
}
