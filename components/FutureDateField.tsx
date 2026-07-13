"use client";

import { useState } from "react";

export default function FutureDateField({
  label,
  name,
  required,
  errorMessage,
}: {
  label: string;
  name: string;
  required?: boolean;
  errorMessage: string;
}) {
  const today = new Date().toISOString().split("T")[0];
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isEmpty = value.trim() === "";
  const isValid = isEmpty ? !required : value >= today;
  const showError = touched && !isValid;

  return (
    <div>
      <label className="block text-sm font-medium text-ink-900">
        {label}
        {required && <span className="ml-0.5 text-saffron-600">*</span>}
      </label>
      <input
        name={name}
        type="date"
        min={today}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        aria-invalid={showError}
        className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
          showError
            ? "border-red-400 focus:border-red-400 focus:ring-red-300"
            : "border-ink-900/10 focus:border-saffron-500 focus:ring-saffron-500"
        }`}
      />
      {showError && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
}
