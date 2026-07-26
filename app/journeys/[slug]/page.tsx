import type { Metadata } from "next";
import Image from "next/image";
import HeroImageCarousel from "@/components/HeroImageCarousel";
import LocaleLink from "@/components/LocaleLink";
import RouteMap from "@/components/RouteMapClient";
import { notFound } from "next/navigation";
import {
  getJourneyBySlug,
  getLocalizedJourneyBySlug,
  getLocalizedJourneys,
  journeys,
} from "@/lib/journeys";
import { siteConfig } from "@/lib/site-config";
import { getLocale, getTranslator } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

export async function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const journey = getJourneyBySlug(params.slug);
  if (!journey) return { title: "Journey not found" };
  const url = `${siteConfig.url}/journeys/${journey.slug}`;
  return {
    title: `${journey.title} — ${journey.durationDays}-Day Small-Group Journey India`,
    description: journey.summary,
    keywords: [
      journey.title, journey.region, "India journey", "small group journey India",
      "customisable India journey", `${journey.region} journey`, "Indien Reise",
      `${journey.region} Gruppenreise`,
    ],
    alternates: {
      canonical: url,
      languages: { en: url, de: `${url}?lang=de` },
    },
    openGraph: {
      title: `${journey.title} | ${siteConfig.name}`,
      description: journey.summary,
      url,
      images: [{ url: journey.heroImage, width: 1200, height: 630, alt: journey.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${journey.title} | ${siteConfig.name}`,
      description: journey.summary,
      images: [journey.heroImage],
    },
  };
}

export default function JourneyDetail({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const journey = getLocalizedJourneyBySlug(params.slug, locale);
  if (!journey) notFound();

  const otherJourneys = getLocalizedJourneys(locale);
  const difficultyKey = `difficulty.${journey.difficulty}` as TranslationKey;
  const whatsappText = t("tourDetail.waMessage").replace("{tour}", journey.title);
  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const journeySchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: journey.title,
    description: journey.summary,
    image: journey.heroImage,
    url: `${siteConfig.url}/journeys/${journey.slug}`,
    touristType: ["International tourists", "European travelers"],
    availableLanguage: ["English", "German"],
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: journey.durationDays,
      itemListElement: journey.itinerary.map((day, i) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journeySchema) }}
      />
      {/* HERO — full-bleed image with gradient; all text stays inside the dark overlay */}
      <section className="relative min-h-[440px] overflow-hidden md:min-h-[620px]">
        {/* Background carousel + gradient */}
        <div className="absolute inset-0">
          <HeroImageCarousel
            images={journey.galleryImages.length > 0 ? journey.galleryImages : [journey.heroImage]}
            alt={journey.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/65 to-ink-900/15" />
        </div>

        {/* All content lives inside the dark gradient — never on the cream page background */}
        <div className="relative container-wide flex min-h-[440px] flex-col justify-end pb-10 pt-16 text-white md:min-h-[620px] md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            {/* Difficulty chip only */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {t(difficultyKey)}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white drop-shadow-lg md:text-4xl">
              {journey.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">
              {journey.subtitle}
            </p>

            {/* Quick-stats bar — dark frosted glass, always on the image */}
            <div className="mt-7 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-sm md:grid-cols-3">
              <Stat label={t("tourDetail.duration")} value={`${journey.durationNights}N / ${journey.durationDays}D`} />
              <Stat label={t("tourDetail.groupSize")} value={journey.groupSize} />
              <Stat label={t("tourDetail.region")} value={journey.region} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide grid gap-10 py-14 md:grid-cols-3">
        {/* LEFT — content */}
        <div className="md:col-span-2 space-y-14">
          {/* Itinerary map */}
          {journey.routeStops && journey.routeStops.length > 0 && (
            <div>
              <RouteMap stops={journey.routeStops} />
            </div>
          )}

          {/* Overview */}
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {t("tourDetail.overview")}
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">{journey.overview}</p>
            <div className="mt-6 rounded-2xl border border-ink-900/5 bg-cream-50 px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                {t("tourDetail.route")}
              </div>
              <div className="mt-1 font-display text-lg font-semibold">
                {journey.route}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {t("tourDetail.highlights")}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {journey.highlights.map((h, i) => (
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
              {journey.itinerary.map((day) => (
                <li
                  key={day.day}
                  className="relative overflow-hidden rounded-2xl border border-ink-900/5 bg-white shadow-soft"
                >
                  {day.image && (
                    <div className="relative h-48 w-full sm:h-56">
                      <Image
                        src={day.image}
                        alt={day.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
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
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Travel tips for European travelers */}
          {journey.travelTips.length > 0 && (
            <div className="rounded-2xl border border-saffron-200 bg-saffron-50/50 p-6">
              <h3 className="font-display text-xl font-semibold text-saffron-700">
                {t("tourDetail.travelTips")}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {journey.travelTips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-800">
                    <span className="text-saffron-600">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Inclusions & Exclusions */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6">
              <h3 className="font-display text-xl font-semibold text-teal-700">
                {t("tourDetail.included")}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {journey.inclusions.map((inc, i) => (
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
                {journey.exclusions.map((exc, i) => (
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
              {/* Pricing */}
              <div className="rounded-xl bg-saffron-50 p-4 border border-saffron-100">
                <div className="text-xs font-semibold uppercase tracking-wider text-saffron-700">
                  {t("tourDetail.pricingOptions")}
                </div>
                <ul className="mt-3 space-y-2.5">
                  {journey.pricing.map((tier, i) => (
                    <li key={i} className="flex items-center justify-between gap-3">
                      <span className="text-xs text-ink-600 leading-tight">{tier.label}</span>
                      <span className="shrink-0 font-semibold text-ink-900 text-sm">
                        {tier.priceEUR > 0 ? `€${tier.priceEUR.toLocaleString()}` : `₹${tier.priceINR.toLocaleString()}`}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] text-ink-500">Per person · prices in EUR</p>
              </div>

              <div className="mt-4 rounded-xl bg-cream-100 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-600">
                  {t("tourDetail.departures")}
                </div>
                <ul className="mt-2 space-y-1 text-sm font-medium text-ink-900">
                  {journey.departures.map((d) => (
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
                <LocaleLink
                  href="/consult"
                  className="mt-1 text-center text-sm font-semibold text-terracotta-600 underline underline-offset-2 hover:text-terracotta-700"
                >
                  {t("tourDetail.freeConsult")}
                </LocaleLink>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* More journeys */}
      <section className="bg-cream-100 py-16">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {t("tourDetail.otherJourneys")}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherJourneys
              .filter((other) => other.slug !== journey.slug)
              .map((other) => (
                <LocaleLink
                  key={other.slug}
                  href={`/journeys/${other.slug}`}
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
