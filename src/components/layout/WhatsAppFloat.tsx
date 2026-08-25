import { contact, links } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/ModuleIcon";

/** Botão flutuante presente em toda a página (canto inferior direito). */
export function WhatsAppFloat() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contact.whatsappLabel}
      className="bg-ink text-paper fixed right-5 bottom-5 z-40 flex h-13 w-13 items-center justify-center rounded-full shadow-[0_8px_28px_rgba(16,16,16,0.32)] transition-transform duration-300 hover:scale-105 md:right-8 md:bottom-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
