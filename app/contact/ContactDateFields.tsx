"use client";

import { useState } from "react";

export default function ContactDateFields({
  startLabel,
  endLabel,
  required,
}: {
  startLabel: string;
  endLabel: string;
  required?: boolean;
}) {
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState("");
  const [endError, setEndError] = useState("");

  function handleEndChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (startDate && e.target.value && e.target.value <= startDate) {
      setEndError("End date must be after the start date");
    } else {
      setEndError("");
    }
  }

  return (
    <div className="mt-1.5 grid gap-3 sm:grid-cols-2">
      <div>
        <label className="block text-xs font-medium uppercase tracking-wide text-ink-600">
          {startLabel}
        </label>
        <input
          name="startDate"
          type="date"
          required={required}
          min={today}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500"
        />
      </div>
      <div>
        <label className="block text-xs font-medium uppercase tracking-wide text-ink-600">
          {endLabel}
        </label>
        <input
          name="endDate"
          type="date"
          required={required}
          min={startDate || today}
          onChange={handleEndChange}
          className={`mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
            endError
              ? "border-red-400 focus:border-red-400 focus:ring-red-300"
              : "border-ink-900/10 focus:border-saffron-500 focus:ring-saffron-500"
          }`}
        />
        {endError && (
          <p className="mt-1 text-xs text-red-500">{endError}</p>
        )}
      </div>
    </div>
  );
}
