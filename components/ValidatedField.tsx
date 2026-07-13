"use client";

import { useState } from "react";

const PATTERNS: Record<string, RegExp> = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  tel: /^\+?[0-9\s\-()]{7,20}$/,
};

export default function ValidatedField({
  label,
  name,
  type,
  required,
  placeholder,
  errorMessage,
  variant = "light",
}: {
  label: string;
  name: string;
  type: "email" | "tel";
  required?: boolean;
  placeholder?: string;
  /** Localized message shown when the value doesn't match the expected format. */
  errorMessage: string;
  /** "dark" is for use on dark/gradient backgrounds (e.g. the consult popup). */
  variant?: "light" | "dark";
}) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isEmpty = value.trim() === "";
  const isValid = isEmpty ? !required : PATTERNS[type].test(value.trim());
  const showError = touched && !isValid;

  const labelClass =
    variant === "dark" ? "block text-sm font-medium text-white/85" : "block text-sm font-medium text-ink-900";

  const inputClass =
    variant === "dark"
      ? `mt-1.5 w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 ${
          showError
            ? "border-red-300 focus:border-red-300 focus:ring-red-300"
            : "border-white/25 focus:border-white/50 focus:ring-white/40"
        }`
      : `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
          showError
            ? "border-red-400 focus:border-red-400 focus:ring-red-300"
            : "border-ink-900/10 focus:border-saffron-500 focus:ring-saffron-500"
        }`;

  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="ml-0.5 text-saffron-600">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        aria-invalid={showError}
        className={inputClass}
      />
      {showError && (
        <p className={`mt-1 text-xs ${variant === "dark" ? "text-red-200" : "text-red-500"}`}>{errorMessage}</p>
      )}
    </div>
  );
}
