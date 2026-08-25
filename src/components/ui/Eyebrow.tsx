import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

/**
 * Rótulo em versalete espaçado, precedido de um filete dourado.
 * É o elemento que dá cadência institucional a cada dobra.
 */
export function Eyebrow({ children, className, tone = "light" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "light" ? "text-gold-ink" : "text-gold-light",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-8",
          tone === "light" ? "bg-gold/60" : "bg-gold-light/60",
        )}
      />
      {children}
    </p>
  );
}
