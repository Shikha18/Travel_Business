"use client";

import { useState, useRef, useEffect } from "react";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import { useLocale, setStoredLocale } from "@/lib/use-i18n";
import type { Locale } from "@/lib/translations";

const LANGUAGE_LABELS: Record<Locale, { short: string; label: string; flag: string }> = {
  en: { short: "EN", label: "English", flag: "🇬🇧" },
  de: { short: "DE", label: "Deutsch", flag: "🇩🇪" },
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  function selectLocale(newLocale: Locale) {
    setStoredLocale(newLocale);
    setOpen(false);
  }

  const current = LANGUAGE_LABELS[locale];

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white/60 px-3 py-1.5 text-sm font-medium text-ink-900 transition hover:bg-cream-100"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {current.flag}
        </span>
        <span>{current.short}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-ink-900/5 bg-white shadow-card"
        >
          {SUPPORTED_LOCALES.map((l) => {
            const info = LANGUAGE_LABELS[l];
            const active = l === locale;
            return (
              <li key={l} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => selectLocale(l)}
                  className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition ${
                    active
                      ? "bg-saffron-50 text-saffron-700 font-semibold"
                      : "text-ink-800 hover:bg-cream-100"
                  }`}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {info.flag}
                  </span>
                  <span>{info.label}</span>
                  {active && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="ml-auto h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
