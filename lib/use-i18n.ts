/**
 * Client-only i18n hooks.
 * For server-side helpers, import from lib/i18n.
 */

"use client";

import { useSearchParams } from "next/navigation";
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  getTranslator,
} from "./i18n";
import type { Locale } from "./translations";

export function useLocale(): Locale {
  const searchParams = useSearchParams();
  const raw = searchParams?.get("lang");
  return (SUPPORTED_LOCALES as string[]).includes(raw ?? "")
    ? (raw as Locale)
    : DEFAULT_LOCALE;
}

export function useTranslator() {
  const locale = useLocale();
  return getTranslator(locale);
}
