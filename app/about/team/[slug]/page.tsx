import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import LocaleLink from "@/components/LocaleLink";
import { siteConfig } from "@/lib/site-config";
import { team, getTeamMember } from "@/lib/team";
import { getLocale, getTranslator } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

export async function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const member = getTeamMember(params.slug);
  if (!member) return { title: "Team member not found" };
  return {
    title: `${member.fullName} — ${siteConfig.name}`,
    description: `The full story of ${member.fullName}, co-founder of ${siteConfig.name}.`,
  };
}

export default function TeamMemberPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const member = getTeamMember(params.slug);
  if (!member) notFound();

  const locale = getLocale(searchParams);
  const t = getTranslator(locale);

  // Translation keys follow the `about.founder.*` / `about.partner.*`
  // pattern already set up in lib/translations.ts. We build the keys
  // dynamically so the same template renders both members.
  const k = (suffix: string) => `${member.prefix}.${suffix}` as TranslationKey;

  const stories = [
    t(k("story1")),
    t(k("story2")),
    t(k("story3")),
    t(k("story4")),
    t(k("story5")),
  ];

  const other = team.find((m) => m.slug !== member.slug)!;
  const otherKey = (suffix: string) =>
    `${other.prefix}.${suffix}` as TranslationKey;

  const accent = member.accent;
  const ringClass =
    accent === "saffron" ? "ring-saffron-200" : "ring-teal-200";
  const chipClass =
    accent === "saffron" ? "chip-saffron" : "chip-plum";
  const quoteBg =
    accent === "saffron"
      ? "bg-saffron-50 ring-saffron-100"
      : "bg-teal-50 ring-teal-100";
  const roleColor =
    accent === "saffron" ? "text-saffron-700" : "text-teal-700";

  return (
    <>
      {/* HERO — portrait on one side, headline + quote on the other */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full blur-3xl ${
            accent === "saffron" ? "bg-saffron-200/50" : "bg-teal-200/40"
          }`}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl"
        />

        <div className="container-wide relative py-14 md:py-20">
          <LocaleLink
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-ink-800 shadow-soft backdrop-blur transition hover:bg-white"
          >
            {t("about.story.backToAbout")}
          </LocaleLink>

          <div className="mt-8 grid items-center gap-10 md:grid-cols-5">
            {/* Portrait */}
            <div className="md:col-span-2">
              <div
                className={`relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ${ringClass}`}
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.fullName}
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${member.gradient}`}
                  >
                    <span className="font-display text-8xl font-semibold text-white drop-shadow-lg">
                      {member.firstName.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-soft">
                  <span aria-hidden="true">{member.flag}</span>
                  {t(k("country"))}
                </span>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-3">
              <span className={chipClass}>★ {t(k("tag"))}</span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                {member.fullName}
              </h1>
              <p
                className={`mt-2 text-sm font-semibold uppercase tracking-[0.15em] ${roleColor}`}
              >
                {t(k("role"))}
              </p>

              <blockquote
                className={`mt-6 rounded-2xl px-6 py-5 font-display text-lg italic leading-snug text-ink-800 ring-1 ${quoteBg}`}
              >
                {t(k("quote"))}
              </blockquote>

              {/* Quick-contact row */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-ink-800 ring-1 ring-ink-900/10 transition hover:ring-ink-900/20"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="0.75"
                        fill="currentColor"
                      />
                    </svg>
                    {member.instagramHandle || "Instagram"}
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-ink-800 ring-1 ring-ink-900/10 transition hover:ring-ink-900/20"
                  >
                    LinkedIn
                  </a>
                )}
                {member.whatsapp && (
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(
                      `Hi ${member.firstName}! I just read your story on the Namaste Journeys site.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-white transition hover:bg-[#1da851]"
                  >
                    WhatsApp
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-ink-800 ring-1 ring-ink-900/10 transition hover:ring-ink-900/20"
                  >
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG-FORM STORY */}
      <section className="container-wide py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {t("about.story.sectionStory")}
          </h2>
          <div className="divider-ornate mt-4" aria-hidden="true" />

          <div className="mt-8 space-y-5 text-base leading-[1.85] text-ink-800">
            {stories.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <p className="mt-8 font-display text-base italic text-ink-600">
            {t(k("signature"))}
          </p>
        </div>
      </section>

      {/* MEET THE OTHER CO-FOUNDER + CTA */}
      <section className="container-wide pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl bg-cream-100 p-8 md:grid-cols-2 md:p-10">
          <LocaleLink
            href={`/about/team/${other.slug}`}
            className="group flex items-center gap-5 rounded-2xl bg-white p-5 ring-1 ring-ink-900/5 transition hover:-translate-y-0.5 hover:shadow-card"
          >
            <div
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ${
                other.accent === "saffron"
                  ? "ring-saffron-200"
                  : "ring-teal-200"
              }`}
            >
              {other.photo ? (
                <Image
                  src={other.photo}
                  alt={other.fullName}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              ) : (
                <div
                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${other.gradient} text-2xl font-semibold text-white`}
                >
                  {other.firstName.charAt(0)}
                </div>
              )}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                {t("about.story.meetOther")}
              </div>
              <div className="mt-1 font-display text-xl font-semibold text-ink-900">
                {other.fullName}
              </div>
              <div className="mt-0.5 text-xs text-ink-600">
                {t(otherKey("role"))}
              </div>
              <div className="mt-2 text-xs font-semibold text-saffron-700 transition group-hover:translate-x-0.5">
                {t("about.story.readFullStory")}
              </div>
            </div>
          </LocaleLink>

          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-saffron-500 to-teal-600 p-6 text-white">
            <h3 className="font-display text-2xl font-semibold">
              {t("about.story.ctaTitle")}
            </h3>
            <p className="mt-2 text-sm text-white/85">
              {t("about.story.ctaSubtitle")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <LocaleLink
                href="/tours"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 transition hover:bg-cream-50"
              >
                {t("cta.ourTours")}
              </LocaleLink>
              <LocaleLink
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
              >
                {t("cta.sayHello")}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
