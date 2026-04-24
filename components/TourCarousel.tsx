"use client";

import { useState, useEffect, useCallback } from "react";
import TourCard from "./TourCard";
import type { Tour } from "@/lib/tours";

export default function TourCarousel({ tours }: { tours: Tour[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const len = tours.length;

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % len), [len]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + len) % len), [len]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Desktop: 3-card layout, center card elevated */}
      <div className="hidden md:flex md:items-center md:gap-5">
        {[-1, 0, 1].map((offset) => {
          const idx = (activeIndex + offset + len) % len;
          const isCenter = offset === 0;
          return (
            <div
              key={`${idx}-${offset}`}
              onClick={() => !isCenter && setActiveIndex(idx)}
              className={`flex-1 transition-all duration-500 ${
                isCenter
                  ? "z-10 scale-[1.04] cursor-default"
                  : "scale-[0.93] opacity-60 cursor-pointer hover:opacity-80"
              }`}
            >
              <TourCard tour={tours[idx]} defaultHover={isCenter} />
            </div>
          );
        })}
      </div>

      {/* Mobile: single card */}
      <div className="md:hidden">
        <TourCard tour={tours[activeIndex]} defaultHover />
      </div>

      {/* Navigation row */}
      <div className="mt-8 flex items-center justify-between px-1 md:justify-center md:gap-8">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous tour"
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-ink-900/8 transition-all duration-200 hover:-translate-x-0.5 hover:bg-saffron-500 hover:shadow-glow hover:ring-saffron-500"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4 text-ink-700 transition group-hover:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2.5">
          {tours.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to tour ${i + 1}`}
              className={`rounded-full transition-all duration-400 ${
                i === activeIndex
                  ? "h-2.5 w-8 bg-gradient-to-r from-saffron-400 to-terracotta-500 shadow-sm"
                  : "h-2.5 w-2.5 bg-ink-900/15 hover:bg-ink-900/35"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next tour"
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-ink-900/8 transition-all duration-200 hover:translate-x-0.5 hover:bg-saffron-500 hover:shadow-glow hover:ring-saffron-500"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4 text-ink-700 transition group-hover:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-400">
        {activeIndex + 1} &nbsp;/&nbsp; {len}
      </p>
    </div>
  );
}
