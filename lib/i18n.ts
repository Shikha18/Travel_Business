/**
 * Server-safe i18n helpers (pure functions, no React).
 * For client hooks (`useLocale`, `useTranslator`), import from lib/use-i18n.
 */

import { translations, type Locale, type TranslationKey } from "./translations";

export const SUPPORTED_LOCALES: Locale[] = ["en", "de", "fr", "es", "it", "pt", "nl"];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * Derive locale from a `searchParams` object (e.g., Next.js page props).
 */
export function getLocale(searchParams?: {
  lang?: string | string[];
}): Locale {
  const raw =
    typeof searchParams?.lang === "string" ? searchParams.lang : undefined;
  return (SUPPORTED_LOCALES as string[]).includes(raw ?? "")
    ? (raw as Locale)
    : DEFAULT_LOCALE;
}

/**
 * Returns a `t(key)` translator function for the given locale.
 * Falls back to the default locale then to the key itself.
 */
export function getTranslator(locale: Locale) {
  const dict = translations[locale] ?? translations[DEFAULT_LOCALE];
  const fallback = translations[DEFAULT_LOCALE];
  return (key: TranslationKey): string => {
    return (
      (dict as Record<string, string>)[key] ??
      (fallback as Record<string, string>)[key] ??
      key
    );
  };
}

/**
 * Build an href that preserves the current locale as `?lang=`.
 */
export function buildLocaleHref(href: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return href;
  const separator = href.includes("?") ? "&" : "?";
  return `${href}${separator}lang=${locale}`;
}
