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
 * As logos aparecem em cor própria. O único filtro é `mix-blend-multiply`, que
 * sobre papel branco é neutro para o desenho (multiplicar por branco não muda
 * pixel nenhum) e some com fundo branco chapado, caso algum arquivo tenha um.
 * Nenhum deles foi conferido visualmente. Ver docs/ASSETS.md.
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
      className="h-16 w-auto max-w-full object-contain mix-blend-multiply md:h-20"
    />
  );
}
