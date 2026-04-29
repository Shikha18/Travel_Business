"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import LocaleLink from "./LocaleLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { siteConfig } from "@/lib/site-config";
import { useTranslator } from "@/lib/use-i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslator();

  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/tours", label: t("nav.tours") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  // Rendered via portal into document.body so it's never trapped inside the
  // header's stacking context. Any click ANYWHERE on this overlay calls
  // closeMenu only — nav items are plain buttons with no href.
  const overlay = (
    <div
      className="fixed inset-0 z-[9999]"
      aria-modal="true"
      role="dialog"
      aria-label="Navigation menu"
      onClick={closeMenu}
    >
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Menu card */}
      <div className="relative z-10 mx-4 mt-24 overflow-hidden rounded-2xl bg-cream-50 shadow-2xl ring-1 ring-ink-900/10">
        {/* Header row */}
        <div className="flex items-center justify-between border-b border-ink-900/8 px-5 py-4">
          <span className="font-display text-base font-semibold text-ink-900">Menu</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-100 text-ink-700">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </div>
        </div>

        {/* Nav items — plain buttons, NO navigation; clicking closes menu only */}
        <nav className="flex flex-col p-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-base font-medium text-ink-800 transition-colors hover:bg-cream-100 hover:text-terracotta-600"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
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
              src="/images/gotrustelle-logo.png"
              alt={siteConfig.name}
              width={160}
              height={160}
              className="h-16 w-auto object-contain mix-blend-multiply"
              priority
            />
            <div className="hidden md:flex flex-col items-start leading-none gap-1">
              <span className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-terracotta-600 via-ink-900 to-saffron-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-600">
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

          {/* Mobile: language switcher + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="rounded-full p-2 text-ink-900 hover:bg-cream-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={t("nav.toggleMenu")}
              aria-expanded={open}
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
      </header>

      {/* Portal: renders directly into document.body, outside ALL stacking contexts */}
      {mounted && open && createPortal(overlay, document.body)}
    </>
  );
}
