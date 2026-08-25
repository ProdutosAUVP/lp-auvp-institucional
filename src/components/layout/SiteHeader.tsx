"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { primaryNav } from "@/content/navigation";
import { links } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

/**
 * Barra fixa. Começa transparente sobre o hero em tinta e passa a papel
 * assim que a página rola — o mesmo recurso usado por sites institucionais
 * para não competir com a primeira dobra.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <Container className="flex h-20 items-center justify-between gap-8">
        <a
          href="#principal"
          className="flex shrink-0 items-center"
          aria-label="AUVP Escola de Investimentos — início"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={
              onPaper
                ? "/logos/auvp-escola-serif-preta.svg"
                : "/logos/auvp-escola-serif-branca.svg"
            }
            alt="AUVP Escola de Investimentos"
            width={1003}
            height={203}
            priority
            className="h-7 w-auto md:h-8"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 lg:flex"
        >
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors duration-300",
                onPaper
                  ? "text-graphite hover:text-ink"
                  : "text-paper/75 hover:text-paper",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.studentArea}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden border px-5 py-2.5 text-[0.8125rem] font-medium tracking-[0.06em] transition-colors duration-300 sm:inline-flex",
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
          className="border-paper-line bg-paper h-[calc(100svh-5rem)] overflow-y-auto border-t lg:hidden"
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
              className="bg-ink text-paper mt-5 mb-2 inline-flex justify-center px-6 py-3.5 text-sm font-medium tracking-[0.08em] sm:hidden"
            >
              Área do aluno
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
