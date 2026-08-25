import type { NextConfig } from "next";

/**
 * O site é publicado como HTML estático no GitHub Pages.
 *
 * `basePath` vem do ambiente porque o endereço muda conforme o destino:
 * num repositório de projeto o Pages serve sob `/<nome-do-repo>`, e num
 * domínio próprio serve na raiz. O workflow de deploy define a variável; em
 * desenvolvimento ela fica vazia e a página roda em `/`.
 *
 * Ver docs/DEPLOY.md antes de alterar qualquer coisa aqui.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// A action `configure-pages` devolve "/" quando o site fica na raiz, e o Next
// recusa esse valor. Normalizamos para string vazia.
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Cada rota vira uma pasta com index.html — é o que hospedagem estática
  // espera. Sem isso, o Pages devolve 404 em qualquer caminho que não a raiz.
  trailingSlash: true,
  images: {
    // O Pages serve arquivos, não roda o otimizador do Next. As imagens já são
    // .webp em tamanho final — ver o passo de redimensionamento em docs/ASSETS.md.
    unoptimized: true,
  },
};

export default nextConfig;
