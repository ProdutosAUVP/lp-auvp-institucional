import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  /** `outline` deixa so o contorno; `solid` preenche em baixa opacidade. */
  variant?: "outline" | "solid";
};

/**
 * Assinatura tipografica em escala arquitetonica, sangrando para fora do
 * quadro.
 *
 * O recurso vem das referencias: Oxford abre e fecha a pagina com a palavra
 * "Oxford" em corpo gigante cortada pela borda, e a Lionheart faz o mesmo com
 * o proprio nome sobre a foto de abertura. Funciona porque a palavra deixa de
 * ser logotipo e vira arquitetura: ela da escala institucional a dobra sem
 * precisar de nenhum ornamento.
 *
 * Fica em `aria-hidden` de proposito. O nome da instituicao ja e anunciado
 * pelo logo do cabecalho e pelo titulo da pagina, e repeti-lo aqui so
 * atrapalharia quem usa leitor de tela.
 */
export function Wordmark({ className, variant = "outline" }: WordmarkProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none block font-[family-name:var(--font-display)] leading-[0.72] font-medium tracking-[-0.02em] select-none",
        variant === "outline"
          ? "[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_currentColor]"
          : "opacity-[0.07]",
        className,
      )}
    >
      AUVP
    </span>
  );
}
