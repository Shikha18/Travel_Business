"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  alt: string;
}

export default function HeroImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);
  const len = images.length;

  const next = useCallback(() => setCurrent((i) => (i + 1) % len), [len]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + len) % len), [len]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : `${alt} — view ${i + 1}`}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {len > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "h-2 w-6 bg-white" : "h-2 w-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
