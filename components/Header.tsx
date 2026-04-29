"use client";

import { useState } from "react";
import Image from "next/image";
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
    <header
      className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md"
      style={{
        borderBottom: "1px solid rgba(180, 130, 40, 0.15)",
        boxShadow: "0 2px 20px -6px rgba(140, 90, 10, 0.12)",
      }}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        {/* Logo + Brand */}
        <LocaleLink href="/" className="flex items-center gap-3">
          <Image
            src="/images/gotrustelle.png"
            alt={siteConfig.name}
            width={120}
            height={48}
            className="h-14 w-auto object-contain mix-blend-multiply"
            priority
          />
          <div className="hidden md:flex flex-col items-start leading-none gap-1">
            <span className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-terracotta-600 via-ink-900 to-saffron-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
              Where Trust Leads Travel
            </span>
          </div>
        </LocaleLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <LocaleLink
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-cream-100 hover:text-terracotta-600"
            >
              {link.label}
            </LocaleLink>
          ))}
          <div className="ml-3 pl-3 border-l border-ink-900/10">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-full p-2 text-ink-900 hover:bg-cream-100"
            onClick={() => setOpen(!open)}
            aria-label={t("nav.toggleMenu")}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer — absolute so it doesn't push page content */}
      <div
        className={`absolute inset-x-0 top-full z-30 md:hidden border-t border-ink-900/8 bg-cream-50 shadow-lg transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="container-wide flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <LocaleLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-800 hover:bg-cream-100 hover:text-terracotta-600"
            >
              {link.label}
            </LocaleLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
