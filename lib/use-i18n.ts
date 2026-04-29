/**
 * Client-only i18n hooks.
 * For server-side helpers, import from lib/i18n.
 */

"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  getTranslator,
} from "./i18n";
import type { Locale } from "./translations";

const LOCALE_KEY = "gt_locale";

export function getStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = localStorage.getItem(LOCALE_KEY);
  return (SUPPORTED_LOCALES as string[]).includes(stored ?? "")
    ? (stored as Locale)
    : DEFAULT_LOCALE;
}

export function setStoredLocale(locale: Locale) {
  localStorage.setItem(LOCALE_KEY, locale);
  window.dispatchEvent(new Event("locale-change"));
}

export function useLocale(): Locale {
  const searchParams = useSearchParams();
  const urlLang = searchParams?.get("lang");
  const urlLocale = (SUPPORTED_LOCALES as string[]).includes(urlLang ?? "")
    ? (urlLang as Locale)
    : null;

  const [locale, setLocale] = useState<Locale>(urlLocale ?? DEFAULT_LOCALE);

  useEffect(() => {
    // On mount: prefer localStorage, fall back to URL param
    setLocale(urlLocale ?? getStoredLocale());

    function handleChange() {
      setLocale(getStoredLocale());
    }
    window.addEventListener("locale-change", handleChange);
    return () => window.removeEventListener("locale-change", handleChange);
  }, [urlLocale]);

  return locale;
}

export function useTranslator() {
  const locale = useLocale();
  return getTranslator(locale);
}
