"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/asset";

/**
 * Logo de apoiador, com o nome como reserva.
 *
 * Existe por um motivo concreto: as três logos que temos hoje vêm do CDN da
 * AUVP, e não de `public/`. Se alguma sair do ar, mudar de endereço ou não
 * carregar, o carrossel mostraria o ícone de imagem quebrada. Com a reserva,
 * ele volta a exibir o nome em versalete, que era o estado anterior e continua
 * apresentável.
 *
 * As logos aparecem em preto e branco. São marcas de quatro donos diferentes,
 * cada uma com a própria paleta, e lado a lado em cor própria elas viravam a
 * área mais colorida de uma página de três cores. Em escala de cinza a fileira
 * lê como um conjunto, que é o que a dobra afirma.
 *
 * O `mix-blend-multiply` continua: sobre papel branco é neutro para o desenho
 * (multiplicar por branco não muda pixel nenhum) e some com fundo branco
 * chapado, caso algum arquivo tenha um. Nenhum dos três arquivos servidos pelo
 * CDN foi conferido visualmente. Ver docs/ASSETS.md.
 */
export function EndorsementLogo({
  name,
  logo,
}: {
  name: string;
  logo: string | null;
}) {
  const [falhou, setFalhou] = useState(false);

  if (!logo || falhou) {
    return (
      <span className="eyebrow text-graphite/50 text-center text-base tracking-[0.2em]">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={asset(logo)}
      alt={name}
      width={320}
      height={120}
      unoptimized
      onError={() => setFalhou(true)}
      className="h-12 w-auto max-w-full object-contain mix-blend-multiply grayscale md:h-14"
    />
  );
}
