import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/content/navigation";
import { contact, links, site } from "@/content/site";
import { asset } from "@/lib/asset";

const social = [
  { label: "Instagram", href: links.instagram },
  { label: "YouTube", href: links.youtube },
  { label: "LinkedIn", href: links.linkedin },
];

export function SiteFooter() {
  return (
    <footer className="border-ink-line bg-ink text-mist border-t">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Image
              src={asset("/logos/auvp-escola-serif-branca.svg")}
              alt="AUVP Escola de Investimentos"
              width={1003}
              height={203}
              className="h-8 w-auto"
            />
            <p className="max-w-[30ch] text-sm leading-relaxed">
              {site.tagline}. Fundada em {site.foundingYear} por {site.founder}.
            </p>
            <p className="eyebrow text-mist/60">{contact.address}</p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="eyebrow text-gold-light mb-5">{group.title}</h2>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item.label}`}>
                    <a
                      href={item.href}
                      className="hover:text-paper text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Canais">
            <h2 className="eyebrow text-gold-light mb-5">Canais</h2>
            <ul className="flex flex-col gap-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-paper text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-paper text-sm transition-colors duration-300"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-ink-line text-mist/60 mt-14 flex flex-col gap-4 border-t pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos os direitos
            reservados.
          </p>
          <p className="max-w-[62ch] leading-relaxed">
            Conteúdo de caráter educacional. A AUVP não realiza recomendação
            personalizada de investimentos nesta página. Rentabilidade passada
            não é garantia de rentabilidade futura.
          </p>
        </div>
      </Container>
    </footer>
  );
}
