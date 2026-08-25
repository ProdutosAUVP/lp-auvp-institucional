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
 * `mix-blend-multiply` some com fundo branco chapado sobre o papel. Nenhum
 * destes arquivos foi conferido, então é seguro assumir que algum tem fundo.
 * Ver docs/ASSETS.md.
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
      <span className="eyebrow text-graphite/45 text-lg tracking-[0.24em]">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={asset(logo)}
      alt={name}
      width={220}
      height={72}
      unoptimized
      onError={() => setFalhou(true)}
      className="h-11 w-auto max-w-[13rem] object-contain opacity-60 mix-blend-multiply grayscale md:h-12"
    />
  );
}
