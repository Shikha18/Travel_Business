import type { Metadata } from "next";
import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import JourneyCarousel from "@/components/JourneyCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/site-config";
import { getLocalizedFeaturedJourneys } from "@/lib/journeys";
import { getLocale, getTranslator } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
    languages: { en: siteConfig.url, de: `${siteConfig.url}?lang=de` },
  },
};

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
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="17" cy="12" r="2" />
        <circle cx="13" cy="18" r="2" />
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

// --- Page component ---

export default function Home({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const featured = getLocalizedFeaturedJourneys(locale);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Base image — bright and vibrant */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-manali-shikha.jpg"
            alt="Shikha overlooking a Himalayan village, Manali"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "60% center", filter: "contrast(1.08) saturate(1.25) brightness(1.0)" }}
          />
        </div>

        {/* Warm dark gradient — left text area darkened, right photo shows fully */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(18,10,4,0.72) 0%, rgba(18,10,4,0.55) 30%, rgba(18,10,4,0.20) 58%, transparent 80%)",
          }}
        />
        {/* Soft bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Subtle warm amber glow on left — adds brand warmth, not bleach */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(160,80,20,0.18) 0%, transparent 55%)",
          }}
        />

        <div className="relative container-wide py-12 md:py-24 text-white">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-saffron-300" />
              {t("home.hero.season")}
            </span>

            <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              <span className="block">{t("home.hero.titleLine1")}</span>
              <span className="block">
                and understands{" "}
                <span className="text-saffron-300">you.</span>
              </span>
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
              {t("home.hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LocaleLink href="/journeys" className="btn-primary">
                Explore journeys →
              </LocaleLink>
              <LocaleLink
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/22"
              >
                Plan your trip with us
              </LocaleLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="text-saffron-300">★★★★★</span>
                {t("home.hero.rating")}
              </span>
              <span className="flex items-center gap-1.5">🌏 {t("home.hero.countries")}</span>
              <span className="flex items-center gap-1.5">🛡️ {t("home.hero.support")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND TEASER */}
      <ScrollReveal direction="bottom">
      <section className="border-y bg-cream-100" style={{ borderColor: "rgba(228,170,66,0.1)" }}>
        <div className="container-wide py-6 md:py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Name label */}
            <div className="flex flex-col gap-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-400">
                {t("home.teaser.eyebrow")}
              </p>
              <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                <span className="text-saffron-600">Go</span>
                <span className="mx-2 text-ink-200">·</span>
                <span className="text-terracotta-600">Trust</span>
                <span className="mx-2 text-ink-200">·</span>
                <span className="text-teal-600">elle</span>
              </p>
            </div>

            {/* Three pillars */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron-100 font-display text-xs font-bold text-saffron-600">
                  Go
                </span>
                <span className="text-sm text-ink-600">{t("brand.go.title")}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta-50 font-display text-[9px] font-bold text-terracotta-600">
                  Trust
                </span>
                <span className="text-sm text-ink-600">{t("brand.trust.title")}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 font-display text-xs font-bold text-teal-600">
                  elle
                </span>
                <span className="text-sm text-ink-600">{t("brand.elle.title")}</span>
              </div>
            </div>

            {/* CTA */}
            <LocaleLink
              href="/why-trustelle"
              className="shrink-0 text-sm font-semibold text-saffron-600 hover:text-saffron-700 hover:underline"
            >
              Our story →
            </LocaleLink>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* TRUST STRIP */}
      <section className="border-b bg-cream-50" style={{ borderColor: "rgba(228,170,66,0.15)" }}>
        <div className="container-wide py-10 md:py-14">
          {/* Heading */}
          <div className="mb-10">
            <span className="chip">{t("home.trust.chip")}</span>
            <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
              {t("home.trust.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">
              {t("home.trust.subtitle")}
            </p>
          </div>
          {/* 4-column icon strip */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              {
                title: "Small groups only",
                sub: "Max 7–10 travelers",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7">
                    <circle cx="9" cy="7" r="3" />
                    <path strokeLinecap="round" d="M3 21v-1a6 6 0 0112 0v1" />
                    <circle cx="17.5" cy="9" r="2.5" />
                    <path strokeLinecap="round" d="M21 21v-1a4 4 0 00-5-3.87" />
                  </svg>
                ),
              },
              {
                title: "Female-friendly",
                sub: "Women-led & solo-friendly",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7">
                    <circle cx="12" cy="8" r="5" />
                    <path strokeLinecap="round" d="M12 13v8M9 18h6" />
                  </svg>
                ),
              },
              {
                title: "Trusted & safe",
                sub: "Verified stays, drivers & 24/7 support",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Made for you",
                sub: "Flexible, personal & stress-free",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-2">
                <span className="text-ink-400">{item.icon}</span>
                <span className="text-sm font-semibold text-ink-900">{item.title}</span>
                <span className="text-xs leading-snug text-ink-500">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WE SEE YOU */}
      <ScrollReveal direction="bottom">
      <section className="bg-white py-10 md:py-16">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            {/* Left — text */}
            <div>
              <span className="chip">{t("home.weSeeYou.chip")}</span>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">
                {t("home.weSeeYou.titleLine1")}{" "}
                <em className="not-italic text-terracotta-500 italic">{t("home.weSeeYou.titleEm")}</em>
                <br />{t("home.weSeeYou.titleLine2")}
              </h2>
              <ul className="mt-6 space-y-3.5">
                {[
                  t("home.weSeeYou.point1"),
                  t("home.weSeeYou.point2"),
                  t("home.weSeeYou.point3"),
                  t("home.weSeeYou.point4"),
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-ink-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z" />
                    </svg>
                    <span className="text-sm leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ink-500">
                {t("home.weSeeYou.footerLine1")}<br />
                {t("home.weSeeYou.footerLine2")}
              </p>
            </div>
            {/* Right — image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/story-shikha-baby-cafe.jpg"
                alt="Warm connection — real moments in India"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* FEATURED TOURS */}
      <section className="container-wide py-8 md:py-12">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <ScrollReveal direction="left">
          <div>
            <span className="chip">{t("home.featured.chip")}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {t("home.featured.title")}
            </h2>
            <p className="mt-3 max-w-xl text-ink-600">
              {t("home.featured.subtitle")}
            </p>
          </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
          <LocaleLink href="/journeys" className="btn-ghost self-start md:self-auto">
            {t("cta.viewAll")}
          </LocaleLink>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="bottom" delay={150}>
        <div className="mt-10">
          <JourneyCarousel journeys={featured} />
        </div>
        </ScrollReveal>
      </section>

      {/* OUR PROMISE */}
      <ScrollReveal direction="bottom">
      <section className="bg-cream-50 py-10 md:py-14">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
            {/* Left — photo */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/shikha-promise.jpg"
                alt="Shikha — founder of GoTrustelle"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* Right — content */}
            <div>
              <span className="chip">{t("home.promise.chip")}</span>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">
                {t("home.promise.titleLine1")}<br />
                {t("home.promise.titleLine2")}{" "}
                <span className="font-script text-3xl text-terracotta-500 md:text-4xl" style={{ fontStyle: "italic", letterSpacing: "-0.01em" }}>
                  {t("home.promise.titleGuest")}
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                {t("home.promise.body")}
              </p>
              <ul className="mt-5 space-y-3">
                {[t("home.promise.point1"), t("home.promise.point2"), t("home.promise.point3")].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta-100 text-[10px] text-terracotta-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <LocaleLink href="/contact" className="btn-primary">
                  {t("home.promise.cta")}
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <section className="container-wide py-8 md:py-12">
        <ScrollReveal direction="bottom">
        <div className="max-w-2xl">
          <span className="chip">{t("home.testimonials.chip")}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            {t("home.testimonials.title")}
          </h2>
        </div>
        </ScrollReveal>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <ScrollReveal key={tm.name} direction={i % 2 === 0 ? "left" : "right"} delay={i * 120}>
            <figure className="card flex flex-col justify-between p-7 h-full">
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
            </ScrollReveal>
          ))}
        </div>

      </section>


      {/* FINAL CTA */}
      <ScrollReveal direction="bottom">
      <section className="container-wide py-8 md:py-12">
        <div className="relative overflow-hidden rounded-3xl bg-warm-gradient px-8 py-10 text-center text-white shadow-card md:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
          <h2 className="relative font-display text-3xl font-semibold md:text-5xl">
            {t("home.finalCTA.title")}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/90">
            {t("home.finalCTA.subtitle")}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <LocaleLink href="/journeys" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-terracotta-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50">
              {t("cta.browseTours")}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
            >
              {t("cta.talkToUs")}
            </LocaleLink>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
