"use client";

import { useState } from "react";
import TourCard from "./TourCard";
import type { Tour } from "@/lib/tours";

export default function TourCarousel({ tours }: { tours: Tour[] }) {
  const [centerIndex, setCenterIndex] = useState(1);

  const len = tours.length;
  const prevIdx = (centerIndex - 1 + len) % len;
  const nextIdx = (centerIndex + 1) % len;

  const slides = [
    { tour: tours[prevIdx], position: "prev" },
    { tour: tours[centerIndex], position: "center" },
    { tour: tours[nextIdx], position: "next" },
  ] as const;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {slides.map(({ tour, position }) => (
          <div
            key={tour.slug}
            className={`transition-all duration-500 ${
              position === "center"
                ? "z-10 md:scale-[1.03]"
                : "opacity-90 md:scale-100"
            }`}
          >
            <TourCard tour={tour} defaultHover={position === "center"} />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setCenterIndex((centerIndex - 1 + len) % len)}
          aria-label="Previous tour"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-soft transition hover:border-saffron-500 hover:bg-saffron-500 hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {tours.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIndex(i)}
              aria-label={`Go to tour ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === centerIndex
                  ? "w-6 bg-saffron-500"
                  : "w-2 bg-ink-900/20 hover:bg-ink-900/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCenterIndex((centerIndex + 1) % len)}
          aria-label="Next tour"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-soft transition hover:border-saffron-500 hover:bg-saffron-500 hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
