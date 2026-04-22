"use client";

import { siteConfig } from "@/lib/site-config";
import { useTranslator } from "@/lib/use-i18n";

export default function WhatsAppButton() {
  const t = useTranslator();

  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta.chatWhatsApp")}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-card transition hover:shadow-[0_20px_60px_-12px_rgba(37,211,102,0.6)] hover:scale-[1.03]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.6 6.3A7.8 7.8 0 0012 4a7.9 7.9 0 00-6.8 11.9L4 20l4.2-1.1A7.9 7.9 0 1017.6 6.3zM12 18.5a6.5 6.5 0 01-3.3-.9l-.2-.1-2.5.7.7-2.4-.2-.2A6.5 6.5 0 1118.5 12 6.5 6.5 0 0112 18.5zm3.6-4.9c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.4.1-.5.6-.6.7-.2.2-.4.1a5.3 5.3 0 01-1.6-1 6 6 0 01-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4a1.4 1.4 0 00.2-.3.4.4 0 000-.4l-.6-1.4c-.2-.4-.3-.3-.4-.3h-.4a.8.8 0 00-.5.3 2.4 2.4 0 00-.8 1.8 4.2 4.2 0 00.9 2.2 9.4 9.4 0 003.6 3.2c.5.2.9.3 1.2.4a2.9 2.9 0 001.3.1 2.2 2.2 0 001.4-1 1.7 1.7 0 00.1-1 .7.7 0 00-.4-.2z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline-block">
        {t("cta.chatWhatsApp")}
      </span>
    </a>
  );
}
