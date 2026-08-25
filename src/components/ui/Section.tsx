import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** `paper` claro, `warm` pergaminho, `ink` tinta institucional. */
  tone?: "paper" | "warm" | "ink";
  /** Régua fina no topo da dobra, separador editorial padrão da página. */
  rule?: boolean;
  as?: "section" | "footer" | "div";
};

const tones = {
  paper: "bg-paper text-ink",
  warm: "bg-paper-soft text-ink",
  ink: "bg-ink text-paper",
} as const;

const ruleTones = {
  paper: "border-paper-line",
  warm: "border-paper-line",
  ink: "border-ink-line",
} as const;

export function Section({
  id,
  children,
  className,
  tone = "paper",
  rule = false,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-[var(--spacing-section)]",
        tones[tone],
        rule && cn("border-t", ruleTones[tone]),
        className,
      )}
    >
      {children}
    </Tag>
  );
}
