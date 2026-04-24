"use client";

/**
 * IntroMap — landing-page intro animation (pure SVG + CSS, no tile server).
 *
 * First visit of a session: a full-viewport overlay that plays a
 * 4-phase mini-film:
 *   1. space    — a small rotating Earth globe sits in a starfield
 *   2. descent  — the globe plunges toward the camera (scales up 3x)
 *                 while its rotation accelerates
 *   3. india    — Earth fades out and a stylised India silhouette
 *                 fades in with a pulsing pin on "GoTrustelle"
 *   4. fading   — the whole overlay fades out to reveal the site
 *
 * No external tile servers, no Leaflet, no API keys — everything is
 * inline SVG and CSS so it works reliably on every deployment and every
 * network. Total runtime: ~6.5s. Overridden by:
 *   - sessionStorage "nj-intro-played" (played once per session)
 *   - prefers-reduced-motion
 *   - the "Skip" button
 *
 * The pre-hydration script in `app/layout.tsx` sets `html.nj-no-intro`
 * before React even mounts, which prevents any flash of the overlay on
 * repeat navigation.
 */

import { useEffect, useState } from "react";

const STORAGE_KEY = "nj-intro-played";

type Phase = "space" | "descent" | "india" | "fading";

export default function IntroMap() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("space");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === "1";

    if (prefersReducedMotion || alreadyPlayed) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, "1");

    // Phase timeline — feel free to tune these if you want it faster/slower.
    const t1 = setTimeout(() => setPhase("descent"), 2000); // globe starts zooming
    const t2 = setTimeout(() => setPhase("india"), 4500);   // india silhouette fades in
    const t3 = setTimeout(() => setPhase("fading"), 5800);  // overlay starts fading
    const t4 = setTimeout(() => setVisible(false), 6700);   // overlay removed

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, []);

  function handleSkip() {
    setPhase("fading");
    setTimeout(() => setVisible(false), 500);
  }

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay intro-overlay--${phase}`}
      role="dialog"
      aria-label="Welcome animation"
    >
      {/* Starfield — painted in CSS */}
      <div className="intro-overlay__stars" aria-hidden="true" />

      {/* Globe stage */}
      <div className="intro-stage" aria-hidden="true">
        <div className="intro-globe-halo" />

        <div className="intro-globe">
          {/* Ocean base */}
          <div className="intro-globe__ocean" />

          {/* Continents — repeated twice inside a 200%-wide strip and
              translated leftward to fake a seamless rotation. Shapes
              are stylised silhouettes, not geographically precise — the
              point is "planet with land on it", not a real map. */}
          <div className="intro-globe__continents">
            <ContinentsSVG />
            <ContinentsSVG />
          </div>

          {/* Cloud whisps drift across at a different speed for depth */}
          <div className="intro-globe__clouds" />

          {/* Glossy highlight + rim shading */}
          <div className="intro-globe__gloss" />
        </div>

        {/* India silhouette — hidden until phase=india */}
        <div className="intro-india">
          <IndiaSVG />
        </div>
      </div>

      {/* Copy */}
      <div className="intro-overlay__copy">
        <span className="intro-overlay__eyebrow">
          {phase === "india" || phase === "fading"
            ? "Welcome to"
            : phase === "descent"
            ? "Descending to"
            : "From space, home to"}
        </span>
        <span className="intro-overlay__title">India</span>
        <span className="intro-overlay__sub">
          GoTrustelle · travel experiences in India, by a woman, for you
        </span>
      </div>

      <button
        type="button"
        onClick={handleSkip}
        className="intro-overlay__skip"
        aria-label="Skip intro"
      >
        Skip
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-3.5 w-3.5"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

/* -----------------------------------------------------------------
 * SVG helpers — inlined so the component has zero asset dependencies.
 * ----------------------------------------------------------------- */

/** A 1000×1000 strip of stylised continents, sized to fit one half of
 *  the 200%-wide rotator. Rendered twice for a seamless loop. */
function ContinentsSVG() {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="intro-globe__continents-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7f8f55" />
          <stop offset="55%" stopColor="#6a7a46" />
          <stop offset="100%" stopColor="#4a5a34" />
        </linearGradient>
        <linearGradient id="landGradWarm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8895a" />
          <stop offset="100%" stopColor="#8a5a36" />
        </linearGradient>
      </defs>

      {/* Northern landmass (Eurasia-like) */}
      <path
        d="M 90 240
           C 160 200, 260 180, 360 200
           C 450 215, 520 200, 600 215
           C 680 230, 760 230, 830 260
           C 900 290, 940 330, 920 370
           C 900 410, 840 430, 770 420
           C 700 415, 640 430, 560 420
           C 470 410, 400 420, 320 405
           C 240 390, 160 380, 110 340
           C 75 310, 70 270, 90 240 Z"
        fill="url(#landGrad)"
        opacity="0.92"
      />

      {/* India-peninsula suggestion jutting south */}
      <path
        d="M 560 420
           C 580 460, 585 500, 578 540
           C 572 580, 555 610, 540 620
           C 528 610, 518 580, 518 545
           C 518 510, 530 470, 555 430 Z"
        fill="url(#landGradWarm)"
        opacity="0.95"
      />

      {/* Africa-like blob */}
      <path
        d="M 420 470
           C 470 460, 520 475, 540 510
           C 555 555, 545 610, 520 670
           C 500 720, 475 755, 445 765
           C 420 770, 400 740, 395 700
           C 390 650, 395 600, 395 550
           C 395 520, 405 480, 420 470 Z"
        fill="url(#landGrad)"
        opacity="0.9"
      />

      {/* South-east Asia archipelago hints */}
      <ellipse cx="735" cy="510" rx="28" ry="10" fill="url(#landGradWarm)" opacity="0.85" />
      <ellipse cx="780" cy="535" rx="22" ry="8" fill="url(#landGradWarm)" opacity="0.8" />
      <ellipse cx="820" cy="560" rx="18" ry="6" fill="url(#landGradWarm)" opacity="0.75" />

      {/* Australia-like blob */}
      <path
        d="M 790 680
           C 830 670, 870 680, 895 705
           C 910 725, 905 755, 880 770
           C 845 785, 800 780, 770 760
           C 750 745, 755 715, 770 695
           C 777 688, 783 683, 790 680 Z"
        fill="url(#landGradWarm)"
        opacity="0.88"
      />

      {/* Small ice caps at top */}
      <path
        d="M 100 120
           C 300 100, 600 95, 900 120
           C 920 135, 880 160, 700 165
           C 500 170, 300 165, 120 155
           C 95 150, 90 135, 100 120 Z"
        fill="#e7eef5"
        opacity="0.55"
      />
    </svg>
  );
}

/** Stylised India outline with a pulsing pin on roughly Delhi's lat/lng.
 *  Not a geographically precise border — it's a recognisable silhouette
 *  of the subcontinent tuned for the hero moment. */
function IndiaSVG() {
  return (
    <svg
      viewBox="0 0 400 480"
      xmlns="http://www.w3.org/2000/svg"
      className="intro-india__svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="indiaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4a55a" />
          <stop offset="55%" stopColor="#d97833" />
          <stop offset="100%" stopColor="#8f3e1a" />
        </linearGradient>
        <radialGradient id="indiaGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="rgba(255, 200, 140, 0.55)" />
          <stop offset="100%" stopColor="rgba(255, 200, 140, 0)" />
        </radialGradient>
      </defs>

      {/* Soft glow behind the silhouette */}
      <ellipse cx="200" cy="230" rx="200" ry="230" fill="url(#indiaGlow)" />

      {/* Stylised India silhouette (simplified, recognisable) */}
      <path
        d="M 120 40
           C 160 35, 210 40, 255 55
           C 295 68, 325 80, 345 95
           C 355 105, 345 120, 325 120
           C 305 118, 290 115, 275 120
           C 268 130, 275 145, 280 160
           C 290 175, 295 190, 290 205
           C 280 225, 260 235, 255 250
           C 252 275, 260 300, 255 330
           C 248 360, 232 390, 212 420
           C 202 435, 192 445, 180 445
           C 170 442, 168 428, 170 412
           C 172 390, 168 370, 160 352
           C 150 328, 135 310, 130 285
           C 128 260, 138 240, 130 215
           C 120 195, 100 185, 90 165
           C 80 145, 85 128, 100 115
           C 110 105, 102 92, 95 80
           C 92 65, 102 48, 120 40 Z"
        fill="url(#indiaFill)"
        stroke="#fff2e0"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Pulsing pin — roughly over Delhi / northern India */}
      <g className="intro-india__pin">
        <circle cx="186" cy="120" r="24" fill="rgba(255, 255, 255, 0.18)" />
        <circle cx="186" cy="120" r="16" fill="rgba(255, 255, 255, 0.35)" />
        <circle cx="186" cy="120" r="9" fill="#ffffff" />
        <circle cx="186" cy="120" r="5" fill="#d9681b" />
      </g>
    </svg>
  );
}
