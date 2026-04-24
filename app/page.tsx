import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import TourCarousel from "@/components/TourCarousel";
import { siteConfig } from "@/lib/site-config";
import { getLocalizedFeaturedTours } from "@/lib/tours";
import { getLocale, getTranslator } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

// --- Static data (keys map to translations in lib/translations.ts) ---

type TrustPoint = {
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  icon: React.ReactNode;
};

const trustPoints: TrustPoint[] = [
  {
    titleKey: "home.trust.smallGroups.title",
    bodyKey: "home.trust.smallGroups.body",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="10" r="2.5" />
        <path strokeLinecap="round" d="M3 19c0-3 3-5 6-5s6 2 6 5M15 19c0-2 2-3.5 4-3.5s2 0 2 0" />
      </svg>
    ),
  },
  {
    titleKey: "home.trust.localGuides.title",
    bodyKey: "home.trust.localGuides.body",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    titleKey: "home.trust.female.title",
    bodyKey: "home.trust.female.body",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-4M9 17h6M12 3a5 5 0 110 10 5 5 0 010-10z" />
      </svg>
    ),
  },
  {
    titleKey: "home.trust.transparent.title",
    bodyKey: "home.trust.transparent.body",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zM7 15h3" />
      </svg>
    ),
  },
];

// Testimonials are from real (or sample) travelers — names and quotes stay English.
const testimonials = [
  {
    quote:
      "The Spiti trip was the single best travel experience of my life. Every detail was thought through — from altitude acclimatization to the homestays. I felt looked after without ever feeling babysat.",
    name: "Emma R.",
    location: "London, UK",
    trip: "Spiti Summer Expedition",
  },
  {
    quote:
      "As a solo female traveler, I was nervous about India. GoTrustelle made it feel safe and warm. I've already booked a second trip with them.",
    name: "Sofia M.",
    location: "Barcelona, Spain",
    trip: "Paradise of Kashmir",
  },
  {
    quote:
      "The Old Delhi food walk alone was worth the trip. Shikha and team go the extra mile — small touches like arranged airport pickups and a local SIM ready on arrival.",
    name: "James T.",
    location: "Toronto, Canada",
    trip: "Golden Triangle Classic",
  },
];

// FAQs per locale — grouped by category
type FaqItem = {
  q: string;
  a: string;
  bullets?: string[];
  after?: string;
};

type FaqCategory = {
  icon: string;
  label: string;
  items: FaqItem[];
};

const faqs: { en: FaqCategory[]; de: FaqCategory[] } = {
  en: [
    {
      icon: "🧭",
      label: "General",
      items: [
        {
          q: "What kind of experience can I expect in Ladakh, Spiti Valley, or Kashmir?",
          a: "These regions are very different from the rest of India. They are remote, quiet, and deeply connected to nature. Instead of cities, you'll experience mountains, vast landscapes, and small local communities. Travel here is slower and simpler — but also more meaningful.",
        },
        {
          q: "Is this a typical tourist trip?",
          a: "No. This is not a fast-paced sightseeing trip. We focus on fewer places, more time, and deeper experiences — so you can truly connect with the region instead of just passing through.",
        },
      ],
    },
    {
      icon: "🏔",
      label: "Altitude & physical conditions",
      items: [
        {
          q: "How high are these regions?",
          a: "Ladakh and Spiti Valley are located at high altitudes, typically between 3,000 and 4,500 meters. This is something we take seriously when planning your trip.",
        },
        {
          q: "Should I worry about altitude sickness?",
          a: "It's something to be aware of, but manageable. We carefully design the itinerary with:",
          bullets: [
            "gradual acclimatization",
            "rest days",
            "slow altitude gain",
          ],
          after: "With proper planning, most travelers adjust well.",
        },
        {
          q: "Do I need to be very fit?",
          a: "No extreme fitness is required. However, you should:",
          bullets: [
            "be generally healthy",
            "be comfortable with longer drives",
            "be open to simple conditions",
          ],
          after: "A flexible mindset is more important than physical fitness.",
        },
      ],
    },
    {
      icon: "🚗",
      label: "Transport & roads",
      items: [
        {
          q: "What are the roads like?",
          a: "Road conditions vary. Some are smooth, while others — especially in Spiti Valley — can be rough. We work with experienced local drivers who are very familiar with these routes.",
        },
        {
          q: "How long are the drives?",
          a: "Travel days can be longer than in other parts of India. However, the journey itself is part of the experience, with constantly changing landscapes along the way.",
        },
      ],
    },
    {
      icon: "🏨",
      label: "Accommodation",
      items: [
        {
          q: "What kind of accommodation can I expect?",
          a: "Accommodation is simple, clean, and authentic. Depending on the location, you may stay in:",
          bullets: ["small hotels", "guesthouses", "homestays"],
          after:
            "This is not luxury travel, but we always select the best available options.",
        },
        {
          q: "Will I always have hot water and heating?",
          a: "Not always. In remote areas, infrastructure is limited. We prioritise comfort wherever possible, but some flexibility is required.",
        },
      ],
    },
    {
      icon: "📡",
      label: "Connectivity",
      items: [
        {
          q: "Will I have internet and phone signal?",
          a: "Connectivity is limited. In many areas:",
          bullets: [
            "mobile networks may not work",
            "only local SIM cards function",
            "internet can be slow or unavailable",
          ],
          after:
            "This is part of the experience and allows you to disconnect.",
        },
      ],
    },
    {
      icon: "🛡",
      label: "Safety",
      items: [
        {
          q: "Is it safe to travel to these regions?",
          a: "Yes — with proper planning. These areas are generally peaceful, but they are remote. We ensure safety through careful planning and experienced local partners.",
        },
        {
          q: "What happens in case of an emergency?",
          a: "We have:",
          bullets: [
            "trusted local contacts",
            "experienced drivers",
            "contingency plans in place",
          ],
          after:
            "In remote areas, response times may be longer — which is why preparation is essential.",
        },
      ],
    },
    {
      icon: "✨",
      label: "Experience & expectations",
      items: [
        {
          q: "Is this a comfortable trip?",
          a: "It is comfortable for the region, but not luxury. You should expect:",
          bullets: [
            "simple conditions",
            "nature-focused experiences",
            "occasional unpredictability",
          ],
        },
        {
          q: "What makes this trip special?",
          a: "Authenticity and access. You'll experience:",
          bullets: [
            "real life in remote regions",
            "local culture beyond tourist routes",
            "landscapes most travelers never reach",
          ],
        },
      ],
    },
    {
      icon: "💰",
      label: "Booking & suitability",
      items: [
        {
          q: "How does booking work?",
          a: "After your inquiry, we first understand your expectations — especially regarding comfort and altitude. You will then receive a personalised itinerary and can decide at your own pace.",
        },
        {
          q: "Is this suitable for everyone?",
          a: "Not necessarily. This trip is best suited for travelers who:",
          bullets: [
            "are open to simpler conditions",
            "are curious about remote regions",
            "are comfortable with some unpredictability",
          ],
        },
      ],
    },
  ],

  de: [
    {
      icon: "🧭",
      label: "Allgemein",
      items: [
        {
          q: "Welche Art von Erlebnis erwartet mich in Ladakh, im Spiti-Tal oder in Kaschmir?",
          a: "Diese Regionen unterscheiden sich stark vom übrigen Indien. Sie sind abgelegen, ruhig und eng mit der Natur verbunden. Statt Städten erleben Sie Berge, weite Landschaften und kleine lokale Gemeinschaften. Das Reisen hier ist langsamer und einfacher — dafür aber bedeutsamer.",
        },
        {
          q: "Ist das eine typische Touristenreise?",
          a: "Nein. Das ist keine schnelle Sightseeing-Tour. Wir konzentrieren uns auf weniger Orte, mehr Zeit und tiefere Erlebnisse — damit Sie die Region wirklich kennenlernen, statt nur durchzureisen.",
        },
      ],
    },
    {
      icon: "🏔",
      label: "Höhe & körperliche Bedingungen",
      items: [
        {
          q: "Wie hoch liegen diese Regionen?",
          a: "Ladakh und das Spiti-Tal liegen in großer Höhe, typischerweise zwischen 3.000 und 4.500 Metern. Das nehmen wir bei der Planung Ihrer Reise sehr ernst.",
        },
        {
          q: "Sollte ich mir Sorgen wegen Höhenkrankheit machen?",
          a: "Es ist etwas, das man im Blick haben sollte — aber gut beherrschbar. Wir gestalten das Programm sorgfältig mit:",
          bullets: [
            "schrittweiser Akklimatisierung",
            "Ruhetagen",
            "langsamem Höhengewinn",
          ],
          after:
            "Mit guter Planung passen sich die meisten Reisenden gut an.",
        },
        {
          q: "Muss ich sehr fit sein?",
          a: "Extreme Fitness ist nicht erforderlich. Allerdings sollten Sie:",
          bullets: [
            "grundsätzlich gesund sein",
            "längere Autofahrten aushalten können",
            "offen für einfache Bedingungen sein",
          ],
          after:
            "Eine flexible Einstellung ist wichtiger als körperliche Fitness.",
        },
      ],
    },
    {
      icon: "🚗",
      label: "Transport & Straßen",
      items: [
        {
          q: "Wie sind die Straßen?",
          a: "Die Straßenverhältnisse sind unterschiedlich. Manche sind gut ausgebaut, andere — besonders im Spiti-Tal — können rau sein. Wir arbeiten mit erfahrenen lokalen Fahrern, die diese Strecken bestens kennen.",
        },
        {
          q: "Wie lang sind die Fahrten?",
          a: "Reisetage können länger sein als in anderen Teilen Indiens. Die Fahrt selbst ist jedoch Teil des Erlebnisses — mit ständig wechselnden Landschaften.",
        },
      ],
    },
    {
      icon: "🏨",
      label: "Unterkunft",
      items: [
        {
          q: "Welche Art von Unterkunft erwartet mich?",
          a: "Die Unterkünfte sind einfach, sauber und authentisch. Je nach Ort übernachten Sie in:",
          bullets: ["kleinen Hotels", "Gästehäusern", "Homestays"],
          after:
            "Das ist kein Luxusreisen, aber wir wählen stets die besten verfügbaren Optionen.",
        },
        {
          q: "Habe ich immer warmes Wasser und Heizung?",
          a: "Nicht immer. In abgelegenen Gebieten ist die Infrastruktur begrenzt. Wir legen Wert auf Komfort, wo es möglich ist — etwas Flexibilität ist jedoch nötig.",
        },
      ],
    },
    {
      icon: "📡",
      label: "Konnektivität",
      items: [
        {
          q: "Habe ich Internet und Mobilfunkempfang?",
          a: "Die Verbindung ist eingeschränkt. In vielen Gebieten:",
          bullets: [
            "funktionieren Mobilfunknetze unter Umständen nicht",
            "laufen nur lokale SIM-Karten",
            "ist Internet langsam oder nicht verfügbar",
          ],
          after:
            "Das gehört zum Erlebnis dazu und erlaubt Ihnen, wirklich abzuschalten.",
        },
      ],
    },
    {
      icon: "🛡",
      label: "Sicherheit",
      items: [
        {
          q: "Ist es sicher, in diese Regionen zu reisen?",
          a: "Ja — mit guter Planung. Diese Gebiete sind in der Regel friedlich, aber abgelegen. Wir sorgen durch sorgfältige Planung und erfahrene lokale Partner für Sicherheit.",
        },
        {
          q: "Was passiert im Notfall?",
          a: "Wir haben:",
          bullets: [
            "verlässliche lokale Kontakte",
            "erfahrene Fahrer",
            "Notfallpläne bereit",
          ],
          after:
            "In abgelegenen Gebieten können Reaktionszeiten länger sein — deshalb ist Vorbereitung essenziell.",
        },
      ],
    },
    {
      icon: "✨",
      label: "Erwartungen & Erlebnis",
      items: [
        {
          q: "Ist das eine komfortable Reise?",
          a: "Für die Region ist sie komfortabel, aber nicht luxuriös. Sie sollten Folgendes erwarten:",
          bullets: [
            "einfache Bedingungen",
            "naturnahe Erlebnisse",
            "gelegentliche Unvorhersehbarkeit",
          ],
        },
        {
          q: "Was macht diese Reise besonders?",
          a: "Authentizität und Zugang. Sie erleben:",
          bullets: [
            "das echte Leben in abgelegenen Regionen",
            "lokale Kultur abseits der Touristenrouten",
            "Landschaften, die die meisten Reisenden nie erreichen",
          ],
        },
      ],
    },
    {
      icon: "💰",
      label: "Buchung & Eignung",
      items: [
        {
          q: "Wie funktioniert die Buchung?",
          a: "Nach Ihrer Anfrage verstehen wir zuerst Ihre Erwartungen — besonders zu Komfort und Höhe. Sie erhalten dann eine individuelle Reiseplanung und können in Ruhe entscheiden.",
        },
        {
          q: "Ist das für jeden geeignet?",
          a: "Nicht unbedingt. Diese Reise eignet sich am besten für Reisende, die:",
          bullets: [
            "offen für einfachere Bedingungen sind",
            "neugierig auf abgelegene Regionen sind",
            "mit etwas Unvorhersehbarkeit umgehen können",
          ],
        },
      ],
    },
  ],
};

// --- Page component ---

export default function Home({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const featured = getLocalizedFeaturedTours(locale);
  const localeFaqs = faqs[locale];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=80"
            alt="Himalayan mountains of Ladakh, India"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/80 via-ink-900/50 to-saffron-900/60" />
        </div>

        <div className="relative container-wide py-24 md:py-32 text-white">
          {/* Tagline wrapper is wider so the two-line hero headline can
              breathe. The subtitle underneath is capped narrower so it
              still reads like a paragraph. */}
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-saffron-300" />
              {t("home.hero.season")}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-[4.5rem]">
              <span className="block">{t("home.hero.titleLine1")}</span>
              <span className="block bg-gradient-to-r from-saffron-200 via-saffron-300 to-cream-50 bg-clip-text text-transparent">
                {t("home.hero.titleLine2")}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LocaleLink href="/tours" className="btn-primary">
                {t("cta.viewDepartures")}
              </LocaleLink>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t("cta.chatWhatsApp")}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-saffron-300">★★★★★</span>
                <span>{t("home.hero.rating")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌏</span>
                <span>{t("home.hero.countries")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span>{t("home.hero.support")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="container-wide py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="chip">{t("home.featured.chip")}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {t("home.featured.title")}
            </h2>
            <p className="mt-3 max-w-xl text-ink-600">
              {t("home.featured.subtitle")}
            </p>
          </div>
          <LocaleLink href="/tours" className="btn-ghost self-start md:self-auto">
            {t("cta.viewAll")}
          </LocaleLink>
        </div>

        <div className="mt-10">
          <TourCarousel tours={featured} />
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide">
          <div className="w-full">
            <span className="chip">{t("home.trust.chip")}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {t("home.trust.title")}
            </h2>
            <p className="mt-3 text-ink-600">{t("home.trust.subtitle")}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.titleKey} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                  {point.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {t(point.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{t(point.bodyKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-wide py-20">
        <div className="max-w-2xl">
          <span className="chip">{t("home.testimonials.chip")}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            {t("home.testimonials.title")}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((tm) => (
            <figure
              key={tm.name}
              className="card flex flex-col justify-between p-7"
            >
              <div>
                <div className="text-saffron-500">★★★★★</div>
                <blockquote className="mt-4 font-display text-lg leading-snug text-ink-900">
                  &ldquo;{tm.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-ink-900/5 pt-4 text-sm">
                <div className="font-semibold text-ink-900">{tm.name}</div>
                <div className="text-ink-600">
                  {tm.location} · {tm.trip}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-600">
          {t("home.testimonials.sampleNote")}
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-cream-100 py-20">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <span className="chip">{t("home.faq.chip")}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {t("home.faq.title")}
            </h2>
          </div>

          <div className="mt-10 divide-y divide-ink-900/10 rounded-3xl bg-white shadow-soft">
            {localeFaqs
              .flatMap((cat) => cat.items)
              .map((faq, i) => (
                <details
                  key={i}
                  className="group px-6 py-5"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold text-ink-900 md:text-lg">
                    <span>{faq.q}</span>
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 text-ink-900 transition group-open:rotate-45">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-600">
                    <p>{faq.a}</p>
                    {faq.bullets && faq.bullets.length > 0 && (
                      <ul className="ml-1 list-disc space-y-1 pl-5 marker:text-saffron-500">
                        {faq.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {faq.after && <p>{faq.after}</p>}
                  </div>
                </details>
              ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-wide py-20">
        <div className="relative overflow-hidden rounded-3xl bg-warm-gradient px-8 py-14 text-center text-white md:py-20">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            {t("home.finalCTA.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            {t("home.finalCTA.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LocaleLink href="/tours" className="btn-secondary">
              {t("cta.browseTours")}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className="btn-primary bg-ink-900 hover:bg-ink-800"
            >
              {t("cta.talkToUs")}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
