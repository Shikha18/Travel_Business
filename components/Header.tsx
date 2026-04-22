"use client";

import { useState } from "react";
import LocaleLink from "./LocaleLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { siteConfig } from "@/lib/site-config";
import { useTranslator } from "@/lib/use-i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslator();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/tours", label: t("nav.tours") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-cream-50/90 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        <LocaleLink href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-gradient text-white shadow-soft">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </LocaleLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <LocaleLink
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-800 transition hover:bg-cream-100 hover:text-ink-900"
            >
              {link.label}
            </LocaleLink>
          ))}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-full p-2 text-ink-900 hover:bg-cream-100"
            onClick={() => setOpen(!open)}
            aria-label={t("nav.toggleMenu")}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-900/5 bg-cream-50">
          <nav className="container-wide flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-800 hover:bg-cream-100"
              >
                {link.label}
              </LocaleLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
