import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Community } from "@/components/sections/Community";
import { Curriculum } from "@/components/sections/Curriculum";
import { Endorsements } from "@/components/sections/Endorsements";
import { Etfs } from "@/components/sections/Etfs";
import { Faq } from "@/components/sections/Faq";
import { Guarantee } from "@/components/sections/Guarantee";
import { Hero } from "@/components/sections/Hero";
import { Initiatives } from "@/components/sections/Initiatives";
import { Mission } from "@/components/sections/Mission";
import { Numbers } from "@/components/sections/Numbers";
import { Process } from "@/components/sections/Process";
import { StructuredData } from "@/components/StructuredData";

/**
 * Página institucional da AUVP.
 *
 * A ordem das dobras segue o roteiro aprovado (docs/CONTENT.md) e não deve ser
 * alterada sem alinhamento com marketing: cada dobra pressupõe o argumento da
 * anterior.
 */
export default function Home() {
  return (
    <>
      <StructuredData />
      <SmoothScroll />
      <a
        href="#conteudo-principal"
        className="focus:bg-ink focus:text-paper sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-5 focus:py-3 focus:text-sm"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader />

      <main id="conteudo-principal">
        <Hero />
        <Numbers />
        <Mission />
        <Curriculum />
        <Process />
        <Community />
        <Guarantee />
        <Initiatives />
        <Etfs />
        <Endorsements />
        <Faq />
        <ClosingCta />
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
