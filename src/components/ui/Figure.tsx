import Image from "next/image";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/cn";

type FigureProps = {
  src: string | null;
  alt: string;
  caption?: string;
  /** Briefing exibido na reserva enquanto a foto definitiva não existe. */
  brief?: string;
  className?: string;
  imageClassName?: string;
  ratio?: "3/4" | "4/3" | "3/2" | "16/9" | "1/1" | "auto";
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
};

const ratios = {
  "3/4": "aspect-3/4",
  "4/3": "aspect-4/3",
  "3/2": "aspect-3/2",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  auto: "",
} as const;

/**
 * Imagem editorial com legenda opcional.
 *
 * Quando `src` é `null`, renderiza uma reserva tipográfica com o briefing da
 * foto pendente, em vez de quebrar o layout. Isso mantém a página apresentável
 * enquanto o banco de imagens é completado. Ver docs/ASSETS.md.
 */
export function Figure({
  src,
  alt,
  caption,
  brief,
  className,
  imageClassName,
  ratio = "4/3",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  tone = "light",
}: FigureProps) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden",
          ratios[ratio],
          tone === "light" ? "bg-paper-soft" : "bg-ink-soft",
        )}
      >
        {src ? (
          <Image
            src={asset(src)}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imageClassName)}
          />
        ) : (
          <PhotoReserve brief={brief ?? alt} tone={tone} />
        )}
      </div>
      {caption ? (
        <figcaption
          className={cn(
            "eyebrow",
            tone === "light" ? "text-graphite/70" : "text-mist/80",
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function PhotoReserve({
  brief,
  tone,
}: {
  brief: string;
  tone: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "mock-hatch absolute inset-0 flex flex-col items-center justify-center gap-3 border px-6 text-center",
        tone === "light"
          ? "border-paper-line text-graphite"
          : "border-ink-line text-mist",
      )}
    >
      <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M3 5.5h18v13H3zM3 15l5-4.5 4 3.5 3.5-3 5.5 5"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        <circle
          cx="8.5"
          cy="9"
          r="1.4"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </svg>
      <span className="eyebrow">Foto pendente</span>
      <span className="max-w-[24ch] font-[family-name:var(--font-display)] text-base leading-snug italic">
        {brief}
      </span>
    </div>
  );
}

/**
 * Reserva discreta para foto que ocupa o fundo de uma dobra inteira.
 *
 * Aqui a moldura da `PhotoReserve` nao serve: o quadro e a secao toda, e um
 * rotulo centralizado brigaria com o titulo. Fica so a textura e uma etiqueta
 * no rodape da dobra, informando o que falta sem disputar a leitura.
 */
export function BackdropReserve({ brief }: { brief: string }) {
  return (
    <div aria-hidden className="absolute inset-0">
      <div className="mock-hatch absolute inset-0 opacity-60" />
      <p className="eyebrow text-mist/70 absolute bottom-6 left-6 md:bottom-8 md:left-10">
        Foto pendente: {brief}
      </p>
    </div>
  );
}
