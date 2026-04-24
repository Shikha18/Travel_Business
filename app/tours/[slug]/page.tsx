import type { Metadata } from "next";
import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import {
  getTourBySlug,
  getLocalizedTourBySlug,
  getLocalizedTours,
  tours,
} from "@/lib/tours";
import { siteConfig } from "@/lib/site-config";
import { getLocale, getTranslator } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = getTourBySlug(params.slug);
  if (!tour) return { title: "Tour not found" };
  const url = `${siteConfig.url}/tours/${tour.slug}`;
  return {
    title: `${tour.title} — ${tour.durationDays}-Day Small-Group Tour India`,
    description: tour.summary,
    keywords: [
      tour.title, tour.region, "India tour", "small group tour India",
      "customisable India tour", `${tour.region} tour`, "Indien Reise",
      `${tour.region} Gruppenreise`,
    ],
    alternates: {
      canonical: url,
      languages: { en: url, de: `${url}?lang=de` },
    },
    openGraph: {
      title: `${tour.title} | ${siteConfig.name}`,
      description: tour.summary,
      url,
      images: [{ url: tour.heroImage, width: 1200, height: 630, alt: tour.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title} | ${siteConfig.name}`,
      description: tour.summary,
      images: [tour.heroImage],
    },
  };
}

export default function TourDetail({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const tour = getLocalizedTourBySlug(params.slug, locale);
  if (!tour) notFound();

  const otherTours = getLocalizedTours(locale);
  const difficultyKey = `difficulty.${tour.difficulty}` as TranslationKey;
  const fromPriceEUR = Math.min(...tour.pricing.map((p) => p.priceEUR));
  const whatsappText = t("tourDetail.waMessage").replace("{tour}", tour.title);
  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    image: tour.heroImage,
    url: `${siteConfig.url}/tours/${tour.slug}`,
    touristType: ["International tourists", "European travelers"],
    availableLanguage: ["English", "German"],
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: Math.min(...tour.pricing.map((p) => p.priceEUR)),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: tour.durationDays,
      itemListElement: tour.itinerary.map((day, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: day.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent" />
        </div>
        <div className="container-wide -mt-40 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {tour.months.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-saffron-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                >
                  {t(`month.${m}` as TranslationKey)} 2026
                </span>
              ))}
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur">
                {t(difficultyKey)}
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              {tour.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/85">
              {tour.subtitle}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur md:grid-cols-4">
              <Stat label={t("tourDetail.duration")} value={`${tour.durationNights}N / ${tour.durationDays}D`} />
              <Stat label={t("tourDetail.groupSize")} value={tour.groupSize} />
              <Stat label={t("tourDetail.region")} value={tour.region} />
              <Stat label={t("tourDetail.startsFrom")} value={`€${fromPriceEUR.toLocaleString("en-GB")} pp`} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide grid gap-10 py-14 md:grid-cols-3">
        {/* LEFT — content */}
        <div className="md:col-span-2 space-y-14">
          {/* Overview */}
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {t("tourDetail.overview")}
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">{tour.overview}</p>
            <div className="mt-6 rounded-2xl border border-ink-900/5 bg-cream-50 px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                {t("tourDetail.route")}
              </div>
              <div className="mt-1 font-display text-lg font-semibold">
                {tour.route}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {t("tourDetail.highlights")}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {tour.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-2xl border border-ink-900/5 bg-white p-4 shadow-soft"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-ink-800">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {t("tourDetail.itinerary")}
            </h2>
            <ol className="mt-6 space-y-4">
              {tour.itinerary.map((day) => (
                <li
                  key={day.day}
                  className="relative rounded-2xl border border-ink-900/5 bg-white p-6 shadow-soft"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-warm-gradient text-lg font-semibold text-white">
                      {day.day}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-ink-900">
                        {day.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                        {day.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3 text-xs text-ink-600">
                        {day.overnight && (
                          <span className="rounded-full bg-cream-100 px-3 py-1">
                            🏠 {day.overnight}
                          </span>
                        )}
                        {day.highlight && (
                          <span className="rounded-full bg-saffron-100 px-3 py-1 text-saffron-700">
                            ✨ {day.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6">
              <h3 className="font-display text-xl font-semibold text-teal-700">
                {t("tourDetail.included")}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {tour.inclusions.map((inc, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-800">
                    <span className="text-teal-500">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink-900/5 bg-cream-100 p-6">
              <h3 className="font-display text-xl font-semibold text-ink-900">
                {t("tourDetail.notIncluded")}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {tour.exclusions.map((exc, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-700">
                    <span className="text-ink-400">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT — sticky sidebar */}
        <aside className="md:col-span-1">
          <div className="sticky top-24 space-y-5">
            <div className="card p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                {t("tourDetail.startingFrom")}
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-saffron-600">
                  €{fromPriceEUR.toLocaleString("en-GB")}
                </span>
                <span className="text-sm text-ink-600">{t("tourDetail.perPerson")}</span>
              </div>
              <div className="mt-1 text-xs text-ink-600">
                {t("tourDetail.deposit")}
              </div>

              <div className="mt-5 rounded-xl bg-cream-100 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                  {t("tourDetail.departures")}
                </div>
                <ul className="mt-2 space-y-1 text-sm font-medium text-ink-900">
                  {tour.departures.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {t("cta.reserveWA")}
                </a>
                <LocaleLink href="/contact" className="btn-secondary">
                  {t("cta.requestEmail")}
                </LocaleLink>
              </div>
            </div>

            <div className="card p-6">
              <h4 className="font-display text-lg font-semibold">
                {t("tourDetail.pricingOptions")}
              </h4>
              <ul className="mt-4 divide-y divide-ink-900/5">
                {tour.pricing.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="text-ink-700">{p.label}</span>
                    <div className="text-right">
                      <div className="font-semibold text-ink-900">
                        €{p.priceEUR.toLocaleString("en-GB")}
                      </div>
                      <div className="text-xs text-ink-600">
                        ≈ ₹{p.priceINR.toLocaleString("en-IN")}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      {/* More tours */}
      <section className="bg-cream-100 py-16">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {t("tourDetail.otherJourneys")}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherTours
              .filter((other) => other.slug !== tour.slug)
              .map((other) => (
                <LocaleLink
                  key={other.slug}
                  href={`/tours/${other.slug}`}
                  className="card block p-0 transition hover:-translate-y-1"
                >
                  <div className="relative aspect-[5/3]">
                    <Image
                      src={other.heroImage}
                      alt={other.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold">
                      {other.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-600">
                      {other.durationNights}N / {other.durationDays}D · {other.region}
                    </p>
                  </div>
                </LocaleLink>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
