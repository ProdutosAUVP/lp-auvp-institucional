import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Exigido por `output: export`: sem isto o Next trata a rota como dinâmica e o
 * build estático falha ao coletar a página.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
