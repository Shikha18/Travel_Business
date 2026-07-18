"use client";

import { useRef, useState } from "react";

export default function ConsultVideo({
  className = "aspect-[9/16] w-full object-cover",
}: {
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const start = () => {
    setHasStarted(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src="/videos/consult-intro.mp4"
        poster="/images/consult-intro-poster.jpg"
        controls={hasStarted}
        playsInline
        preload="none"
        onEnded={() => {
          videoRef.current?.load();
          setHasStarted(false);
        }}
        className={className}
      />
      {!hasStarted && (
        <button
          type="button"
          onClick={start}
          aria-label="Play video"
          className="group absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-7 w-7 text-ink-900"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
