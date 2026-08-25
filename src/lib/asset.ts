/**
 * Prefixa um caminho de `/public` com o `basePath` do site.
 *
 * Por que isto existe: com `images.unoptimized` — obrigatório em hospedagem
 * estática — o `next/image` **não** aplica o `basePath` ao `src`. Ele aplica aos
 * chunks e às fontes, mas não às imagens. O resultado é 404 em toda fotografia
 * e em todo logo quando o site é servido sob subcaminho, como no GitHub Pages
 * de repositório de projeto.
 *
 * A normalização repete a de `next.config.ts` de propósito: as duas leem a mesma
 * variável e precisam concordar sobre o que "raiz" significa.
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = raw === "/" ? "" : raw.replace(/\/$/, "");

export function asset(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
