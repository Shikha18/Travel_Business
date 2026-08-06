"use client";

import { useState } from "react";
import Image from "next/image";
import type { JourneyDay } from "@/lib/journeys";

const PREVIEW_DAYS = 2;

interface Props {
  itinerary: JourneyDay[];
  showFullLabel: string;
  showLessLabel: string;
}

export default function ItineraryList({ itinerary, showFullLabel, showLessLabel }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visibleDays = expanded ? itinerary : itinerary.slice(0, PREVIEW_DAYS);
  const hasMore = itinerary.length > PREVIEW_DAYS;

  return (
    <>
      <ol className="mt-6 space-y-4">
        {visibleDays.map((day) => (
          <li
            key={day.day}
            className="relative overflow-hidden rounded-2xl border border-ink-900/5 bg-white shadow-soft"
          >
            {day.image && (
              <div className="relative h-48 w-full sm:h-56">
                <Image
                  src={day.image}
                  alt={day.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-warm-gradient text-lg font-semibold text-white">
                  {day.day}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {day.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                    {day.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-ink-600">
                    {day.overnight && (
                      <span className="rounded-full bg-cream-100 px-3 py-1">
                        🏠 {day.overnight}
                      </span>
                    )}
                    {day.highlight && (
                      <span className="rounded-full bg-saffron-100 px-3 py-1 text-saffron-700">
                        ✨ {day.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-cream-100"
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
