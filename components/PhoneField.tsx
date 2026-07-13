"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  type CountryCode,
} from "libphonenumber-js";

function flagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

const regionNames =
  typeof Intl !== "undefined" && "DisplayNames" in Intl
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

const COUNTRIES: { code: CountryCode; name: string; dial: string }[] = getCountries()
  .map((code) => ({
    code,
    name: regionNames?.of(code) ?? code,
    dial: getCountryCallingCode(code),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function PhoneField({
  label,
  name,
  required,
  errorMessage,
  variant = "light",
  defaultCountry = "IN",
}: {
  label: string;
  /** Name of the hidden field that carries the full E.164 number (e.g. "+919876543210") to the form backend. */
  name: string;
  required?: boolean;
  errorMessage: string;
  /** "dark" is for use on dark/gradient backgrounds (e.g. the consult popup). */
  variant?: "light" | "dark";
  defaultCountry?: CountryCode;
}) {
  const [country, setCountry] = useState<CountryCode>(defaultCountry);
  const [number, setNumber] = useState("");
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isEmpty = number.trim() === "";
  const isValid = isEmpty ? !required : isValidPhoneNumber(number, country);
  const showError = touched && !isValid;

  const fullNumber = useMemo(() => {
    if (isEmpty) return "";
    return `+${getCountryCallingCode(country)}${number.replace(/[^\d]/g, "")}`;
  }, [country, number, isEmpty]);

  // Native constraint validation can't run country-aware format checks via a
  // `pattern` attribute, so we set it imperatively — this still lets the
  // browser block form submission (and show its own tooltip) on bad input,
  // not just our own touched-state message.
  useEffect(() => {
    inputRef.current?.setCustomValidity(isValid ? "" : errorMessage);
  }, [isValid, errorMessage]);

  const labelClass =
    variant === "dark" ? "block text-sm font-medium text-white/85" : "block text-sm font-medium text-ink-900";

  const controlClass =
    variant === "dark"
      ? `border-white/25 bg-white/10 text-white placeholder:text-white/40 focus-within:border-white/50 focus-within:ring-white/40 ${
          showError ? "!border-red-300 focus-within:!border-red-300 focus-within:!ring-red-300" : ""
        }`
      : `border-ink-900/10 bg-white focus-within:border-saffron-500 focus-within:ring-saffron-500 ${
          showError ? "!border-red-400 focus-within:!border-red-400 focus-within:!ring-red-300" : ""
        }`;

  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="ml-0.5 text-saffron-600">*</span>}
      </label>
      <div
        className={`mt-1.5 flex overflow-hidden rounded-xl border text-sm focus-within:outline-none focus-within:ring-1 ${controlClass}`}
      >
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value as CountryCode)}
          aria-label="Country code"
          className={`shrink-0 border-r py-3 pl-3 pr-1.5 text-sm focus:outline-none ${
            variant === "dark"
              ? "border-white/25 bg-transparent text-white"
              : "border-ink-900/10 bg-transparent text-ink-900"
          }`}
        >
          {COUNTRIES.map((c) => (
            // Region display names can render slightly differently between the
            // server's ICU data and the browser's (e.g. "Falkland Islands" vs.
            // "Falkland Islands (Islas Malvinas)") — suppress that mismatch
            // rather than let it force a full client re-render.
            <option key={c.code} value={c.code} className="text-ink-900" suppressHydrationWarning>
              {flagEmoji(c.code)} {c.name} (+{c.dial})
            </option>
          ))}
        </select>
        <input
          ref={inputRef}
          type="tel"
          inputMode="tel"
          required={required}
          placeholder="98765 43210"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onBlur={() => setTouched(true)}
          onInvalid={() => setTouched(true)}
          aria-invalid={showError}
          className={`w-full bg-transparent px-3 py-3 focus:outline-none ${
            variant === "dark" ? "placeholder:text-white/40" : ""
          }`}
        />
      </div>
      <input type="hidden" name={name} value={fullNumber} />
      {showError && (
        <p className={`mt-1 text-xs ${variant === "dark" ? "text-red-200" : "text-red-500"}`}>{errorMessage}</p>
      )}
    </div>
  );
}
