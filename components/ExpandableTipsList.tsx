"use client";

import { useState } from "react";

const PREVIEW_COUNT = 3;

interface Props {
  tips: string[];
  showFullLabel: string;
  showLessLabel: string;
}

export default function ExpandableTipsList({ tips, showFullLabel, showLessLabel }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visibleTips = expanded ? tips : tips.slice(0, PREVIEW_COUNT);
  const hasMore = tips.length > PREVIEW_COUNT;

  return (
    <>
      <ul className="mt-4 space-y-2.5">
        {visibleTips.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-ink-800">
            <span className="text-saffron-600">•</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-cream-100"
        >
          {expanded ? showLessLabel : showFullLabel}
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </>
  );
}
