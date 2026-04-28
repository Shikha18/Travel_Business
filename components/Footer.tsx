"use client";

import LocaleLink from "./LocaleLink";
import { siteConfig } from "@/lib/site-config";
import { useTranslator } from "@/lib/use-i18n";

export default function Footer() {
  const t = useTranslator();

  return (
    <footer className="border-t border-ink-900/5 bg-ink-900 text-cream-50">
      <div className="container-wide grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex flex-col gap-1">
            <span className="font-display text-3xl font-bold tracking-tight bg-gradient-to-r from-saffron-300 via-cream-50 to-saffron-200 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cream-50/50">
              {t("footer.tagline")}
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-cream-50/70">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-cream-50/20 px-3 py-1 text-xs text-cream-50/80"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-50/60">
            {t("footer.explore")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <LocaleLink href="/tours" className="hover:text-saffron-300">
                {t("footer.exploreAll")}
              </LocaleLink>
            </li>
            <li>
              <LocaleLink
                href="/tours/spiti-summer-expedition"
                className="hover:text-saffron-300"
              >
                Spiti Summer Expedition
              </LocaleLink>
            </li>
            <li>
              <LocaleLink
                href="/tours/paradise-of-kashmir"
                className="hover:text-saffron-300"
              >
                Paradise of Kashmir
              </LocaleLink>
            </li>
            <li>
              <LocaleLink
                href="/tours/golden-triangle-classic"
                className="hover:text-saffron-300"
              >
                Golden Triangle Classic
              </LocaleLink>
            </li>
            <li>
              <LocaleLink href="/about" className="hover:text-saffron-300">
                {t("nav.about")}
              </LocaleLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-50/60">
            {t("footer.contact")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-saffron-300">
                Write to us
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-saffron-300">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-saffron-300"
              >
                {t("footer.waChat")}
              </a>
            </li>
            <li className="text-cream-50/70">{siteConfig.address}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/20 hover:bg-cream-50/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
              </svg>
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/20 hover:bg-cream-50/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M13 22v-8h3l1-4h-4V7c0-1.1.4-2 2-2h2V1h-3c-3 0-5 1.8-5 5v4H6v4h3v8h4z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/20 hover:bg-cream-50/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 7.5a3 3 0 00-2.1-2.1C18.3 5 12 5 12 5s-6.3 0-7.9.4A3 3 0 002 7.5 31 31 0 001.6 12 31 31 0 002 16.5a3 3 0 002.1 2.1C5.7 19 12 19 12 19s6.3 0 7.9-.4a3 3 0 002.1-2.1 31 31 0 00.4-4.5 31 31 0 00-.4-4.5zM10 15V9l5 3-5 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-5 text-xs text-cream-50/60 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t("footer.copyright")}
          </p>
          <p>{t("footer.subline")}</p>
        </div>
      </div>
    </footer>
  );
}
