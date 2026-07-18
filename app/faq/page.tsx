import type { Metadata } from "next";
import { getLocale, getTranslator } from "@/lib/i18n";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";
import FaqTabs from "@/components/FaqTabs";
import LocaleLink from "@/components/LocaleLink";

export const metadata: Metadata = {
  title: "FAQ — GoTrustelle",
  description: "Answers to the most common questions about traveling to the Himalayas, Kashmir, and India with GoTrustelle.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
    languages: {
      en: `${siteConfig.url}/faq`,
      de: `${siteConfig.url}/faq?lang=de`,
    },
  },
};

export default function FaqPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const localeFaqs = faqs[locale] ?? faqs["en"];

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream-100 py-14 md:py-20">
        <div className="container-narrow text-center">
          <span className="chip">Good to know</span>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-ink-600 leading-relaxed">
            Everything you need to know before booking your journey — from altitude
            and safety to what to pack and how to prepare.
          </p>
          <p className="mt-4 text-sm text-ink-500">
            Can&apos;t find your answer?{" "}
            <LocaleLink href="/contact" className="font-semibold text-terracotta-600 hover:underline">
              Ask us directly →
            </LocaleLink>
          </p>
        </div>
      </section>

      {/* ── TABBED FAQ ─────────────────────────────────────────────────────── */}
      <section className="container-narrow py-12 md:py-16">
        <FaqTabs categories={localeFaqs} />
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-cream-100 py-12 md:py-16">
        <div className="container-narrow text-center">
          <p className="font-display text-2xl font-semibold text-ink-900 md:text-3xl">
            Still have questions?
          </p>
          <p className="mt-3 text-ink-600">
            We&apos;re real people — just message us and we&apos;ll get back to you personally.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LocaleLink href="/contact" className="btn-primary">
              Send us a message →
            </LocaleLink>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.997 2C6.477 2 2 6.477 2 12c0 1.989.583 3.842 1.59 5.4L2 22l4.74-1.553A9.954 9.954 0 0011.997 22C17.52 22 22 17.523 22 12S17.52 2 11.997 2zm0 18.18a8.178 8.178 0 01-4.164-1.14l-.3-.178-3.1 1.015.942-3.007-.197-.31A8.18 8.18 0 013.82 12c0-4.508 3.669-8.18 8.178-8.18 4.508 0 8.18 3.672 8.18 8.18 0 4.508-3.672 8.18-8.18 8.18z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
