import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** `wide` para grades de imagem; `narrow` para colunas de texto corrido. */
  width?: "default" | "wide" | "narrow";
};

const widths = {
  default: "max-w-[76rem]",
  wide: "max-w-[88rem]",
  narrow: "max-w-[46rem]",
} as const;

export function Container({
  children,
  className,
  width = "default",
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-10", widths[width], className)}
    >
      {children}
    </div>
  );
}
