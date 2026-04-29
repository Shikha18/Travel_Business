"use client";

import Image from "next/image";
import LocaleLink from "./LocaleLink";
import type { Tour } from "@/lib/tours";
import { useTranslator } from "@/lib/use-i18n";

export default function TourCard({ tour, defaultHover = false }: { tour: Tour; defaultHover?: boolean }) {
  const t = useTranslator();
  return (
    <LocaleLink
      href={`/tours/${tour.slug}`}
      className={`group block card transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(24,20,16,0.35)] ${
        defaultHover ? "-translate-y-1 shadow-[0_30px_60px_-20px_rgba(24,20,16,0.35)]" : ""
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition duration-700 group-hover:scale-105 ${defaultHover ? "scale-105" : ""}`}
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide" style={{ background: "rgba(12,11,9,0.75)", color: "#f2ede6", backdropFilter: "blur(6px)" }}>
            {tour.durationDays}D · {tour.region}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="flex items-center gap-1 text-saffron-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            {tour.region}
          </span>
          <span className="text-ink-700">
            {tour.durationNights}N / {tour.durationDays}D
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">
          {tour.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-600">
          {tour.summary}
        </p>

        <div className="mt-5 flex items-center justify-end border-t border-ink-900/5 pt-4">
          <span className={`rounded-full border px-4 py-2 text-xs font-semibold transition group-hover:border-saffron-500 group-hover:bg-saffron-500 group-hover:text-white ${
            defaultHover
              ? "border-saffron-500 bg-saffron-500 text-white"
              : "border-ink-900/10 text-ink-900"
          }`}>
            {t("cta.viewTrip")}
          </span>
        </div>
      </div>
    </LocaleLink>
  );
}
