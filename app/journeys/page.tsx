import type { Metadata } from "next";
import JourneyCard from "@/components/JourneyCard";
import { getLocalizedJourneys } from "@/lib/journeys";
import { siteConfig } from "@/lib/site-config";
import { getLocale, getTranslator } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Journeys — small-group & customisable journeys across India",
  description:
    "Browse GoTrustelle's small-group journeys across India — Spiti Valley, Kashmir, Ladakh, Golden Triangle and more. All-inclusive, max 7–10 travelers, fully customisable to your dates.",
  keywords: [
    "India journey packages", "small group India journeys", "Spiti Valley group journey",
    "Kashmir group journey", "Ladakh group journey", "Golden Triangle journey India",
    "customisable India journeys", "private India journey", "all inclusive India journey",
    "Indien Gruppenreise buchen", "Indien Pauschalreise", "Ladakh Gruppenreise",
  ],
  alternates: {
    canonical: `${siteConfig.url}/journeys`,
    languages: {
      en: `${siteConfig.url}/journeys`,
      de: `${siteConfig.url}/journeys?lang=de`,
    },
  },
};

export default function JourneysPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const journeys = getLocalizedJourneys(locale);

  return (
    <>
      <section className="bg-cream-100">
        <div className="container-wide py-10 md:py-14">
          <span className="chip">{t("tours.chip")}</span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            {t("tours.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-ink-600">{t("tours.subtitle")}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              t("tours.filter.all"),
              t("tours.filter.himalayan"),
              t("tours.filter.cultural"),
            ].map((chip) => (
              <span
                key={chip}
                className="chip"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-8 md:py-12">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {journeys.map((journey) => (
            <JourneyCard key={journey.slug} journey={journey} />
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-3xl bg-warm-gradient px-8 py-14 text-center text-white shadow-card md:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
          <h2 className="relative font-display text-3xl font-semibold md:text-4xl">
            {t("tours.customCTA.title")}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/90">
            {t("tours.customCTA.subtitle")}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-terracotta-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50"
            >
              {t("tours.customCTA.wa")}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
            >
              {t("cta.emailUs")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
