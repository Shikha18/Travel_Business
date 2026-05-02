"use client";

import { useState } from "react";
import type { FaqCategory } from "@/lib/faqs";

export default function FaqTabs({ categories }: { categories: FaqCategory[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const active = categories[activeIndex];

  const handleCategoryChange = (i: number) => {
    setActiveIndex(i);
    setOpenQuestion(0);
  };

  return (
    <div className="grid gap-6 md:grid-cols-[260px_1fr] md:gap-10 lg:grid-cols-[280px_1fr]">

      {/* ── Sidebar / Dropdown category selector ─────────────────────────── */}
      <aside>
        {/* Mobile: styled dropdown */}
        <div className="md:hidden">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink-400">
            Select a topic
          </label>
          <div className="relative">
            <select
              value={activeIndex}
              onChange={(e) => handleCategoryChange(Number(e.target.value))}
              className="w-full appearance-none rounded-2xl border border-saffron-200 bg-white py-3.5 pl-4 pr-10 text-sm font-semibold text-ink-900 shadow-soft focus:outline-none focus:ring-2 focus:ring-saffron-300"
            >
              {categories.map((cat, i) => (
                <option key={i} value={i}>
                  {cat.icon}  {cat.label}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Desktop: vertical sidebar menu */}
        <nav className="hidden md:block">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
            Topics
          </p>
          <ul className="space-y-1">
            {categories.map((cat, i) => (
              <li key={i}>
                <button
                  onClick={() => handleCategoryChange(i)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                    i === activeIndex
                      ? "bg-terracotta-50 text-terracotta-700 ring-1 ring-terracotta-200/60"
                      : "text-ink-600 hover:bg-cream-100 hover:text-ink-900"
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span className="flex-1 leading-snug">{cat.label}</span>
                  {i === activeIndex && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-3.5 w-3.5 shrink-0 text-terracotta-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Question count badge */}
          <p className="mt-5 px-4 text-xs text-ink-400">
            {active.items.length} question{active.items.length !== 1 ? "s" : ""} in this topic
          </p>
        </nav>
      </aside>

      {/* ── FAQ accordion for active category ────────────────────────────── */}
      <div>
        {/* Category heading */}
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-xl">
            {active.icon}
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              {active.label}
            </h2>
            <p className="text-xs text-ink-400">
              {active.items.length} question{active.items.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Questions */}
        <div className="divide-y divide-ink-900/8 overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink-900/5">
          {active.items.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-ink-900 md:text-lg">
                  {faq.q}
                </span>
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    openQuestion === i
                      ? "rotate-45 bg-terracotta-50 text-terracotta-600"
                      : "bg-cream-100 text-ink-500"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3 px-6 pb-6 text-sm leading-relaxed text-ink-600">
                  <p>{faq.a}</p>
                  {faq.bullets && faq.bullets.length > 0 && (
                    <ul className="ml-1 list-disc space-y-1 pl-5 marker:text-saffron-400">
                      {faq.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {faq.after && <p>{faq.after}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
