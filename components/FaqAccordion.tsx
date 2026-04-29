"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
  bullets?: string[];
  after?: string;
}

const VISIBLE = 4;

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, VISIBLE);

  return (
    <>
      <div className="mt-6 divide-y divide-ink-900/10 rounded-3xl bg-cream-50 shadow-soft">
        {visible.map((faq, i) => (
          <details
            key={i}
            className="group px-6 py-5"
            {...(i === 0 ? { open: true } : {})}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-semibold text-ink-900 md:text-lg">
              <span>{faq.q}</span>
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 text-ink-900 transition group-open:rotate-45">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-600">
              <p>{faq.a}</p>
              {faq.bullets && faq.bullets.length > 0 && (
                <ul className="ml-1 list-disc space-y-1 pl-5 marker:text-saffron-500">
                  {faq.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
              {faq.after && <p>{faq.after}</p>}
            </div>
          </details>
        ))}
      </div>

      {items.length > VISIBLE && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-soft transition hover:bg-cream-100 hover:text-terracotta-600"
          >
            {expanded ? "See less" : `See ${items.length - VISIBLE} more questions`}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
