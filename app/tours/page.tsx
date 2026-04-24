import type { Metadata } from "next";
import TourCard from "@/components/TourCard";
import { getLocalizedTours } from "@/lib/tours";
import { siteConfig } from "@/lib/site-config";
import { getLocale, getTranslator } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Tours — small-group & customisable journeys across India",
  description:
    "Browse GoTrustelle's small-group tours across India — Spiti Valley, Kashmir, Ladakh, Golden Triangle and more. All-inclusive, max 8–10 travelers, fully customisable to your dates.",
  keywords: [
    "India tour packages", "small group India tours", "Spiti Valley group tour",
    "Kashmir group tour", "Ladakh group tour", "Golden Triangle tour India",
    "customisable India tours", "private India tour", "all inclusive India tour",
    "Indien Gruppenreise buchen", "Indien Pauschalreise", "Ladakh Gruppenreise",
  ],
  alternates: {
    canonical: `${siteConfig.url}/tours`,
    languages: {
      en: `${siteConfig.url}/tours`,
      de: `${siteConfig.url}/tours?lang=de`,
    },
  },
};

export default function ToursPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const tours = getLocalizedTours(locale);

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
                className="chip border border-ink-900/5 bg-white"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-8 md:py-12">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-ink-900 px-8 py-14 text-center text-white md:py-16">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            {t("tours.customCTA.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            {t("tours.customCTA.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t("tours.customCTA.wa")}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-secondary"
            >
              {t("cta.emailUs")} {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
