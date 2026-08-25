"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type LineRevealProps = {
  /** Cada item vira uma linha própria, mascarada e revelada em sequência. */
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "p";
};

/**
 * Revelação linha a linha por máscara: cada linha sobe de dentro do próprio
 * recorte, como tipo saindo da composição.
 *
 * O texto continua sendo um único bloco semântico: a máscara é `overflow:
 * hidden` em torno de um `<span>` por linha, nada é aria-escondido. Sob
 * `prefers-reduced-motion` o CSS anula a transição (`globals.css`).
 */
export function LineReveal({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
}: LineRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error: ref polimórfico entre h1/h2/p
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <span
            className={cn(
              "reveal-line block",
              visible && "reveal-line-in",
              lineClassName,
            )}
            style={{ transitionDelay: `${index * 110}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
