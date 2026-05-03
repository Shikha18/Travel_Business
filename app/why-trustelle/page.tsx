import type { Metadata } from "next";
import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { siteConfig } from "@/lib/site-config";
import { getLocale, getTranslator } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Why GoTrustelle — The Name, The Story, The Mission",
  description:
    "Learn why GoTrustelle exists — from a chance meeting in a Rishikesh café to a travel company built on trust, connection and real India experiences.",
  alternates: {
    canonical: `${siteConfig.url}/why-trustelle`,
    languages: {
      en: `${siteConfig.url}/why-trustelle`,
      de: `${siteConfig.url}/why-trustelle?lang=de`,
    },
  },
};

export default function WhyTrustelle({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);

  return (
    <>
      {/* ── BRAND STORY ────────────────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-16">
        <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/images/gotrustelle-logo.png"
              alt="GoTrustelle logo"
              width={480}
              height={480}
              className="w-72 md:w-96 h-auto"
            />
          </div>
          <div>
            <span className="chip">{t("about.brand.chip")}</span>
            <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {t("about.brand.titlePrefix")}{" "}
              <span className="bg-gradient-to-r from-terracotta-600 to-saffron-500 bg-clip-text text-transparent">
                GoTrustelle
              </span>
              {t("about.brand.titleSuffix")}
            </h1>
            <p className="mt-4 text-ink-600 leading-relaxed">
              {t("about.brand.desc")}
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron-100 font-display text-lg font-bold text-saffron-600">
                  Go
                </span>
                <div>
                  <div className="font-semibold text-ink-900">{t("brand.go.title")}</div>
                  <div className="mt-0.5 text-sm text-ink-600">{t("brand.go.body")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-50 font-display text-xs font-bold text-terracotta-600">
                  Trust
                </span>
                <div>
                  <div className="font-semibold text-ink-900">{t("brand.trust.title")}</div>
                  <div className="mt-0.5 text-sm text-ink-600">{t("brand.trust.body")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 font-display text-lg font-bold text-teal-600">
                  elle
                </span>
                <div>
                  <div className="font-semibold text-ink-900">{t("brand.elle.title")}</div>
                  <div className="mt-0.5 text-sm text-ink-600">{t("brand.elle.body")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── HOW WE MET — the origin story ──────────────────────────────────── */}
      <section className="bg-cream-100 py-12 md:py-20">
        <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <span className="chip">{t("about.origin.chip")}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            {t("about.origin.titleBefore")}{" "}
            <span className="bg-gradient-to-r from-terracotta-600 to-terracotta-300 bg-clip-text text-transparent">
              {t("about.origin.titleHighlight")}
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-cream-50 via-white to-terracotta-50 px-8 py-10 shadow-card ring-1 ring-terracotta-100 md:px-12 md:py-12">
            <div aria-hidden="true" className="absolute -top-5 left-10 font-display text-8xl leading-none text-terracotta-200 select-none">
              &ldquo;
            </div>
            <p className="relative text-ink-700 leading-[1.85] text-base md:text-lg">
              {t("about.origin.p1")}
            </p>
            <p className="relative mt-5 text-ink-700 leading-[1.85] text-base md:text-lg">
              {t("about.origin.p2")}
            </p>
            <p className="relative mt-5 text-ink-700 leading-[1.85] text-base md:text-lg">
              {t("about.origin.p3a")}{" "}
              <em className="text-terracotta-700 not-italic font-semibold">
                &ldquo;{t("about.origin.quote")}&rdquo;
              </em>{" "}
              {t("about.origin.p3b")}
            </p>
          </div>
        </div>

        {/* PHOTO & VIDEO GALLERY */}
        <div className="mx-auto mt-12 max-w-5xl">
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-400">
            {t("about.origin.gallery.label")}
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {(
              [
                { src: "/images/story-rishikesh-first-meet.jpg", captionKey: "about.origin.photo1" as TranslationKey, pos: "center top" },
                { src: "/images/story-shikha-lily-rishikesh.jpg", captionKey: "about.origin.photo2" as TranslationKey, pos: "center top" },
                { src: "/images/story-family-3.jpg", captionKey: "about.origin.photo3" as TranslationKey, pos: "center top" },
                { src: "/images/story-shikha-melissa-car.jpg", captionKey: "about.origin.photo4" as TranslationKey, pos: "center center" },
                { src: "/images/story-family-2.jpg", captionKey: "about.origin.photo5" as TranslationKey, pos: "center center" },
                { src: "/images/story-family-1.jpg", captionKey: "about.origin.photo6" as TranslationKey, pos: "center center" },
              ] as const
            ).map(({ src, captionKey, pos }) => (
              <div key={src} className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-900/5">
                <Image
                  src={src}
                  alt={t(captionKey)}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: pos }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:opacity-100">
                  <p className="text-[11px] font-medium leading-snug text-white/90">{t(captionKey)}</p>
                </div>
              </div>
            ))}

            {/* Video — spans full row */}
            <div className="group relative col-span-2 overflow-hidden rounded-2xl shadow-card ring-1 ring-ink-900/5 md:col-span-3">
              <video
                src="/videos/story-moment.mov"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="h-full w-full object-cover"
                style={{ maxHeight: "340px" }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-4">
                <p className="text-[11px] font-medium leading-snug text-white/90">
                  {t("about.origin.video.caption")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-warm-gradient px-8 py-10 text-center text-white shadow-card md:py-12">
          <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">
            {t("about.origin.closing.title")}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-white/85 leading-relaxed">
            {t("about.origin.closing.body")}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LocaleLink
              href="/journeys"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-terracotta-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50"
            >
              {t("about.origin.closing.cta1")}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              {t("about.origin.closing.cta2")}
            </LocaleLink>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
