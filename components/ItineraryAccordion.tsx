"use client";
import { useState } from "react";
import type { JourneyDay } from "@/lib/journeys";

export default function ItineraryAccordion({ days }: { days: JourneyDay[] }) {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? days : days.slice(0, 4);

  return (
    <div className="w-full min-w-0">
      <div className="w-full overflow-hidden rounded-2xl border border-ink-900/8 bg-white divide-y divide-ink-900/5">
        {visible.map((day) => {
          const isOpen = openDay === day.day;
          return (
            <div key={day.day} className="w-full min-w-0 overflow-hidden">
              <button
                onClick={() => setOpenDay(isOpen ? null : day.day)}
                className="flex w-full min-w-0 items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-cream-50/70 sm:gap-4 sm:px-5"
              >
                {/* Day label — fixed width, never shrinks */}
                <span className="mt-0.5 w-9 shrink-0 text-xs font-semibold text-ink-400 sm:w-10">
                  Day {day.day}
                </span>

                {/* Content — must shrink with min-w-0 so text wraps */}
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="break-words text-[14px] font-semibold leading-snug text-ink-900 sm:text-[15px]">
                    {day.title}
                  </p>
                  {!isOpen && (
                    <p className="mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-ink-500">
                      {day.description}
                    </p>
                  )}
                  {isOpen && (
                    <div className="mt-3">
                      <p className="break-words text-sm leading-relaxed text-ink-700">
                        {day.description}
                      </p>
                      {(day.overnight || day.highlight) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {day.overnight && (
                            <span className="flex items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1 text-xs text-ink-600">
                              🏠 {day.overnight}
                            </span>
                          )}
                          {day.highlight && (
                            <span className="flex items-center gap-1.5 rounded-full bg-saffron-50 px-3 py-1 text-xs text-saffron-700">
                              ✨ {day.highlight}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Toggle icon — fixed, never shrinks */}
                <span className="mt-0.5 w-5 shrink-0 text-center text-xl leading-none text-ink-400">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {days.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-soft transition-colors hover:bg-cream-50"
        >
          {showAll ? "Show less" : `See all ${days.length} days`}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}
