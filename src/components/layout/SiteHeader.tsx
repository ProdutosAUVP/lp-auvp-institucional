"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { primaryNav } from "@/content/navigation";
import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/cn";

/**
 * Barra fixa. Começa transparente sobre o hero em tinta e passa a papel
 * assim que a página rola. É o mesmo recurso usado por sites institucionais
 * para não competir com a primeira dobra.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const onPaper = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        onPaper
          ? "border-paper-line bg-paper/95 border-b backdrop-blur-sm"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-24 items-center justify-between gap-8">
        <a
          href="#principal"
          className="flex shrink-0 items-center"
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
              "hidden rounded-full border px-5 py-2.5 text-[0.8125rem] font-medium tracking-[0.06em] transition-colors duration-300 sm:inline-flex",
              onPaper
                ? "border-ink/25 text-ink hover:bg-ink hover:text-paper"
                : "border-paper/35 text-paper hover:bg-paper hover:text-ink",
            )}
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

      {scrolled && !menuOpen ? <ScrollProgress /> : null}
    </header>
  );
}
