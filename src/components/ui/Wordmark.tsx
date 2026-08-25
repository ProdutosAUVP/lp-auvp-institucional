import { AuvpLettering } from "./AuvpLettering";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  /** `outline` deixa só o contorno; `solid` preenche em baixa opacidade. */
  variant?: "outline" | "solid";
};

/**
 * Assinatura em escala arquitetônica, sangrando para fora do quadro.
 *
 * O recurso vem das referências: Oxford abre e fecha a página com a palavra
 * "Oxford" em corpo gigante cortada pela borda, e a Lionheart faz o mesmo com o
 * próprio nome sobre a foto de abertura. Funciona porque, nessa escala, a
 * palavra deixa de ser logotipo e vira arquitetura.
 *
 * São as letras do arquivo da marca, não o texto "AUVP" composto numa fonte: o
 * A da AUVP é um V invertido, sem travessão, e digitar "A" em qualquer fonte
 * entrega a letra errada.
 *
 * Fica em `aria-hidden` de propósito. O nome da instituição já é anunciado pelo
 * logo do cabeçalho e pelo título da página.
 */
export function Wordmark({ className, variant = "outline" }: WordmarkProps) {
  return (
    <AuvpLettering
      className={cn(
        "pointer-events-none",
        variant === "outline"
          ? "[&_path]:fill-none [&_path]:stroke-current [&_path]:[stroke-width:1.6]"
          : "opacity-[0.07]",
        className,
      )}
    />
  );
}
