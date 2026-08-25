import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Nível semântico do título. A página usa h1 só no hero. */
  as?: "h2" | "h3";
  /**
   * Põe o rótulo numa coluna estreita à esquerda, com título e apoio à direita.
   *
   * O recurso vem das referências: Higher Life e Lionheart abrem quase toda
   * seção assim. A coluna vazia à esquerda é o que faz a página respirar como
   * relatório impresso em vez de como página de captura. Só faz sentido em
   * `align="left"`, e colapsa numa coluna só abaixo de `lg`.
   */
  rail?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
  rail = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  const heading = (
    <Tag
      className={cn(
        "font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-medium tracking-[-0.01em] text-balance md:text-5xl lg:text-[3.5rem]",
        tone === "dark" && "text-paper",
      )}
    >
      {title}
    </Tag>
  );

  const support = subtitle ? (
    <p
      className={cn(
        "text-balance-pretty max-w-[46rem] text-base leading-relaxed md:text-lg",
        tone === "light" ? "text-graphite" : "text-mist",
      )}
    >
      {subtitle}
    </p>
  ) : null;

  if (rail && !centered) {
    return (
      <div
        className={cn(
          "grid gap-6 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] lg:gap-12",
          className,
        )}
      >
        <div className="flex flex-col gap-5 lg:col-start-2">
          {heading}
          {support}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className,
      )}
    >
      {heading}
      {support}
    </div>
  );
}
