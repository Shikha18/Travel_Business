import type { Metadata } from "next";
import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { team } from "@/lib/team";
import { getLocale, getTranslator } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

export const metadata: Metadata = {
  title: "About us — a small team obsessed with getting it right",
  description:
    "GoTrustelle is a female-founded Indian travel company offering curated small-group tours. Experience. Trust. Connection. Built for international travelers.",
};

export default function AboutPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);

  const principles: { titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
    { titleKey: "about.v.smallGroups.title", bodyKey: "about.v.smallGroups.body" },
    { titleKey: "about.v.local.title", bodyKey: "about.v.local.body" },
    { titleKey: "about.v.leaveBetter.title", bodyKey: "about.v.leaveBetter.body" },
    { titleKey: "about.v.transparent.title", bodyKey: "about.v.transparent.body" },
    { titleKey: "about.v.safety.title", bodyKey: "about.v.safety.body" },
    { titleKey: "about.v.slow.title", bodyKey: "about.v.slow.body" },
  ];

  // Team is pulled from lib/team.ts (shared with /about/team/[slug] pages).
  // We enrich each member here with the locale-specific strings (country,
  // role, tag, quote, bio-preview) that live in lib/translations.ts.
  const teamCards = team.map((m) => {
    const k = (suffix: string) =>
      `${m.prefix}.${suffix}` as TranslationKey;
    return {
      ...m,
      country: t(k("country")),
      tag: t(k("tag")),
      role: t(k("role")),
      quote: t(k("quote")),
      bio: t(k("story1")),
    };
  });

  return (
    <>
      <section className="bg-cream-100">
        <div className="container-wide grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <span className="chip">{t("about.chip")}</span>
            <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              {t("about.title")}
            </h1>
            <p className="mt-5 text-ink-700 leading-relaxed">{t("about.p1")}</p>
            <p className="mt-4 text-ink-700 leading-relaxed">{t("about.p2")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LocaleLink href="/tours" className="btn-primary">
                {t("cta.ourTours")}
              </LocaleLink>
              <LocaleLink href="/contact" className="btn-secondary">
                {t("cta.sayHello")}
              </LocaleLink>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
              alt={t("about.heroAlt")}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MEET THE TEAM — two hover-reveal portrait cards, above principles */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl"
        />

        <div className="container-wide relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip">{t("about.team.chip")}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              {t("about.team.title")}
            </h2>
            <p className="mt-4 text-ink-600">{t("about.team.subtitle")}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
              {t("about.team.hoverHint")}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
            {teamCards.map((m) => {
              const ringClass =
                m.accent === "saffron"
                  ? "ring-saffron-200/70"
                  : "ring-teal-200/70";
              const tagBadgeClass =
                m.accent === "saffron"
                  ? "bg-saffron-500 text-white"
                  : "bg-teal-600 text-white";
              const accentText =
                m.accent === "saffron" ? "text-saffron-300" : "text-teal-300";

              return (
                <LocaleLink
                  key={m.slug}
                  href={`/about/team/${m.slug}`}
                  aria-label={`${m.fullName}, ${m.role} — read full story`}
                  className={`group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ${ringClass} transition-transform duration-500 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-saffron-400`}
                >
                  {/* Background: photo or gradient initial */}
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.fullName}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-110 group-focus:scale-110"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${m.gradient}`}
                    >
                      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/30 backdrop-blur-sm md:h-52 md:w-52">
                        <span className="font-display text-7xl font-semibold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)] md:text-8xl">
                          {m.firstName.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Top-corner tags (always visible) */}
                  <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-soft">
                    <span aria-hidden="true">{m.flag}</span>
                    {m.country}
                  </span>
                  <span
                    className={`pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] shadow-lg ${tagBadgeClass}`}
                  >
                    ★ {m.tag}
                  </span>

                  {/* REST-STATE label — visible by default, fades on hover/focus */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-6 transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0">
                    <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
                      {m.fullName}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                      {m.role}
                    </p>
                  </div>

                  {/* HOVER/FOCUS overlay — fades in with full detail */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-ink-900/30 via-ink-900/85 to-ink-900/95 p-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">
                    <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
                      {m.fullName}
                    </h3>
                    <p
                      className={`mt-1 text-[11px] font-bold uppercase tracking-[0.15em] ${accentText}`}
                    >
                      {m.role}
                    </p>

                    <p className="mt-4 font-display text-base italic leading-snug text-white/95 md:text-lg">
                      {m.quote}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {m.bio}
                    </p>

                    {/* "Read full story" CTA — leads to the dedicated
                        /about/team/[slug] page with the complete bio and
                        contact links. We use a styled span here because
                        the whole card is already wrapped in a LocaleLink. */}
                    <span
                      className={`mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 shadow-soft transition group-hover:translate-x-0.5 ${accentText.replace(
                        "text-",
                        "ring-1 ring-",
                      )}`}
                    >
                      {t("about.story.readFullStory")}
                    </span>
                  </div>
                </LocaleLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full founder bios have moved to dedicated pages — see
          /about/team/shikha and /about/team/melissa. The hover cards
          above link to them with the "Read full story" CTA. */}

      {/* PRINCIPLES — below the team section */}
      <section className="container-wide py-20">
        <div className="max-w-2xl">
          <span className="chip">{t("about.principles.chip")}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            {t("about.principles.title")}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((v) => (
            <div key={v.titleKey} className="card p-6">
              <h3 className="font-display text-xl font-semibold">
                {t(v.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{t(v.bodyKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="grid gap-8 rounded-3xl bg-cream-100 p-10 md:grid-cols-3">
          <div>
            <div className="font-display text-4xl font-semibold text-saffron-600">
              100%
            </div>
            <div className="mt-2 text-sm font-semibold text-ink-900">
              {t("about.stats.inhouseLabel")}
            </div>
            <p className="mt-1 text-sm text-ink-600">
              {t("about.stats.inhouseBody")}
            </p>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold text-saffron-600">
              24/7
            </div>
            <div className="mt-2 text-sm font-semibold text-ink-900">
              {t("about.stats.supportLabel")}
            </div>
            <p className="mt-1 text-sm text-ink-600">
              {t("about.stats.supportBody")}
            </p>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold text-saffron-600">
              ≤ 12
            </div>
            <div className="mt-2 text-sm font-semibold text-ink-900">
              {t("about.stats.groupLabel")}
            </div>
            <p className="mt-1 text-sm text-ink-600">
              {t("about.stats.groupBody")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
