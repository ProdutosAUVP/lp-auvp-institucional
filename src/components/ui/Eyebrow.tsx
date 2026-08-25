import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

/**
 * Rotulo que abre cada dobra: filete curto seguido do nome da secao, em serifa
 * italica.
 *
 * O registro vem das referencias de escola classica, que usam italico de texto
 * para nomear blocos em vez do versalete espacado. Ele conversa com a serifa
 * do logo e soa como sumario de relatorio, nao como etiqueta de interface.
 *
 * O versalete continua existindo na utilitaria `.eyebrow`, para micro-rotulos:
 * legenda de foto, categoria de card, link de "Saiba mais".
 */
export function Eyebrow({ children, className, tone = "light" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-[family-name:var(--font-display)] text-lg italic",
        tone === "light" ? "text-ink/70" : "text-yellow",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-8 shrink-0",
          tone === "light" ? "bg-ink/45" : "bg-yellow/70",
        )}
      />
      {children}
    </p>
  );
}
