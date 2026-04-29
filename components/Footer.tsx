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
            {t("footer.contact")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-saffron-300">
                Write to us
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
