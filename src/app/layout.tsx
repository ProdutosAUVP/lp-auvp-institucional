import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName}. ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "educação financeira",
    "escola de investimentos",
    "AUVP",
    "Raul Sena",
    "Investidor Sardinha",
    "curso de investimentos",
    "renda fixa",
    "renda variável",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.shortName,
    title: `${site.shortName}. ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName}. ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/*
         * Sentient (Fontshare / Indian Type Foundry). É a serifa do logotipo da
         * AUVP e, por isso, a serifa do site. Não está no Google Fonts, então
         * não passa pelo `next/font`: vem do CDN da fundição, no mesmo padrão
         * que a landing de produção da escola já usa para a Satoshi.
         *
         * A licença permite hospedar os arquivos junto do site, o que remove
         * esta dependência de terceiro e o custo de uma conexão a mais. Vale
         * fazer quando alguém tiver os .woff2 em mãos: ver docs/BRAND.md.
         */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=sentient@300,400,500,700&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
