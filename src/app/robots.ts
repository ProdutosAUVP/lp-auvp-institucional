import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Exigido por `output: export`: sem isto o Next trata a rota como dinâmica e o
 * build estático falha ao coletar a página.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
