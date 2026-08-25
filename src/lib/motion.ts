/** Utilitários compartilhados pela camada de movimento. */

/** Respeita a preferência do sistema. Sempre `false` no servidor. */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Heurística de capacidade: em aparelho fraco preferimos não subir uma cena
 * WebGL. Conservadora de propósito — na dúvida, roda.
 */
export function canRunWebGL() {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;

  const cores = navigator.hardwareConcurrency;
  if (typeof cores === "number" && cores > 0 && cores < 4) return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ??
      canvas.getContext("webgl") ??
      canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

export function lerp(from: number, to: number, amount: number) {
  return from + (to - from) * amount;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Fração de 0 a 1 do quanto o elemento já percorreu a janela. */
export function viewportProgress(rect: DOMRect, viewportHeight: number) {
  return clamp(
    (viewportHeight - rect.top) / (viewportHeight + rect.height),
    0,
    1,
  );
}
