"use client";

import Image from "next/image";
import LocaleLink from "./LocaleLink";
import type { Journey } from "@/lib/journeys";
import { useTranslator } from "@/lib/use-i18n";

export default function JourneyCard({ journey, defaultHover = false }: { journey: Journey; defaultHover?: boolean }) {
  const t = useTranslator();
  return (
    <LocaleLink
      href={`/journeys/${journey.slug}`}
      className={`group block card transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(24,20,16,0.35)] ${
        defaultHover ? "-translate-y-1 shadow-[0_30px_60px_-20px_rgba(24,20,16,0.35)]" : ""
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={journey.heroImage}
          alt={journey.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition duration-700 group-hover:scale-105 ${defaultHover ? "scale-105" : ""}`}
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-900">
            {journey.durationDays}D · {journey.region}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="flex items-center gap-1 text-terracotta-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            {journey.region}
          </span>
          <span className="text-ink-700">
            {journey.durationNights}N / {journey.durationDays}D
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">
          {journey.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-600">
          {journey.summary}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-ink-900/5 pt-4">
          {(() => {
            const usdPrices = journey.pricing.map((p) => p.priceUSD).filter((p) => p > 0);
            const minUSD = usdPrices.length > 0 ? Math.min(...usdPrices) : 0;
            const minINR = Math.min(...journey.pricing.map((p) => p.priceINR).filter((p) => p > 0));
            return (
              <div className="text-sm">
                <span className="text-xs text-ink-500">from </span>
                {minUSD > 0 ? (
                  <span className="font-semibold text-ink-900">${minUSD.toLocaleString()} pp</span>
                ) : (
                  <span className="font-semibold text-ink-900">₹{minINR.toLocaleString()} pp</span>
                )}
              </div>
            );
          })()}
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
