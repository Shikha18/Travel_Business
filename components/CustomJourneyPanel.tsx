"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const CUSTOMISE_OPTIONS = [
  { icon: "📍", label: "Any destination in India" },
  { icon: "📅", label: "Your dates & duration" },
  { icon: "👥", label: "2 – 20 travellers" },
  { icon: "🎒", label: "Adventure, culture or luxury" },
  { icon: "💶", label: "Any budget" },
  { icon: "✈️", label: "Solo, couple or group" },
];

const STEPS = [
  {
    n: "1",
    title: "Tell us your idea",
    desc: "Drop us a WhatsApp or email with your rough idea — destination, dates, group size. Even \"I want 10 days in the mountains, not sure where\" works perfectly.",
  },
  {
    n: "2",
    title: "We design your itinerary",
    desc: "Within 48 hours we send a full day-by-day itinerary, accommodation suggestions, and a price breakdown — all tailored to you.",
  },
  {
    n: "3",
    title: "Tweak until it's perfect",
    desc: "Change anything. Swap a location, adjust the pace, add an experience. We iterate until the trip feels exactly right.",
  },
  {
    n: "4",
    title: "We handle everything",
    desc: "Bookings, permits, transfers, guides — all sorted. You just show up.",
  },
];

const waMessage = encodeURIComponent(
  "Hi! I'd like to build a custom journey with GoTrustelle ✨\n\nName:\nFrom (Your Location):\nDestination(s) in mind:\nTravel Dates / Flexibility:\nNumber of Travellers:\nBudget per person (approx):\nTravel style (adventure / cultural / luxury / slow travel):\nAnything else:"
);

export default function CustomJourneyPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-saffron-200 bg-gradient-to-br from-cream-50 to-saffron-50 shadow-soft">
      {/* Always-visible header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-6 py-6 md:px-8 md:py-7 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="chip-saffron">Custom Journey</span>
            <span className="text-xs text-ink-500 font-medium">Fully personalised · Any dates · Any group</span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink-900 md:text-3xl">
            Not seeing the perfect trip?{" "}
            <span className="text-terracotta-600">Build your own.</span>
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-600 leading-relaxed">
            Every destination, date, and detail — customised around you. Tell us your idea and we'll design the whole thing.
          </p>
        </div>

        {/* Expand chevron */}
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-soft border border-saffron-100 text-ink-700 transition-transform duration-300 group-hover:border-saffron-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Expandable body */}
      {open && (
        <div className="border-t border-saffron-100 px-6 pb-7 pt-6 md:px-8">
          {/* What you can customise */}
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3">
            What you can customise
          </p>
          <div className="flex flex-wrap gap-2 mb-7">
            {CUSTOMISE_OPTIONS.map((o) => (
              <span
                key={o.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-saffron-200 px-3 py-1.5 text-xs font-medium text-ink-800 shadow-soft"
              >
                {o.icon} {o.label}
              </span>
            ))}
          </div>

          {/* How it works */}
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4">
            How it works
          </p>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-7">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-3 rounded-2xl bg-white border border-saffron-100 p-4 shadow-soft">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-terracotta-300 to-terracotta-600 text-xs font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <div className="font-semibold text-sm text-ink-900">{s.title}</div>
                  <p className="mt-1 text-xs text-ink-600 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start on WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=Custom Journey Enquiry&body=Hi GoTrustelle,%0A%0AI'd like to plan a custom journey.%0A%0AName:%0AFrom (My Location):%0ADestination(s) in mind:%0ATravel Dates / Flexibility:%0ANumber of Travellers:%0ABudget per person (approx):%0ATravel style (adventure / cultural / luxury / slow travel):%0AAnything else:`}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send us a brief
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
