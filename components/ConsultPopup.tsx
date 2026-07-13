"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslator } from "@/lib/use-i18n";
import ValidatedField from "./ValidatedField";

const STORAGE_KEY = "gt_consult_popup_last_shown";
const SUPPRESS_DAYS = 14;
const TIME_TRIGGER_MS = 15000;
const SCROLL_TRIGGER_RATIO = 0.6;

// Formspree endpoint — submissions are forwarded to gotrustelle@gmail.com.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdwrraw";

function shouldShow(): boolean {
  if (typeof window === "undefined") return false;
  const last = localStorage.getItem(STORAGE_KEY);
  if (!last) return true;
  const elapsedDays = (Date.now() - Number(last)) / (1000 * 60 * 60 * 24);
  return elapsedDays >= SUPPRESS_DAYS;
}

export default function ConsultPopup() {
  const pathname = usePathname();
  const t = useTranslator();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Consult page already carries the same offer inline — don't stack a popup on top.
  const isConsultPage = pathname === "/consult";

  useEffect(() => {
    if (isConsultPage || !shouldShow()) return;

    let triggered = false;
    function reveal() {
      if (triggered) return;
      triggered = true;
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
      setOpen(true);
      cleanup();
    }

    const timer = window.setTimeout(reveal, TIME_TRIGGER_MS);

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_TRIGGER_RATIO) reveal();
    }

    function onExitIntent(e: MouseEvent) {
      if (e.clientY <= 0) reveal();
    }

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    window.addEventListener("scroll", onScroll, { passive: true });
    if (isFinePointer) {
      document.addEventListener("mouseout", onExitIntent);
    }

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onExitIntent);
    }

    return cleanup;
  }, [isConsultPage]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    // Lock scroll by pinning the body in place, rather than relying on
    // overflow:hidden alone — focus-driven scrollIntoView can otherwise
    // still move the page behind a position:fixed modal.
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-4 backdrop-blur-[1px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("popup.title")}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-dusk-gradient p-7 text-white shadow-glow motion-safe:animate-[popup-in_450ms_cubic-bezier(0.22,1,0.36,1)]"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t("popup.later")}
          className="absolute right-4 top-4 text-white/60 transition hover:text-white"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="py-6 text-center">
            <p className="font-display text-xl font-semibold">{t("popup.success")}</p>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A1.5 1.5 0 014.5 4h2.1a1.5 1.5 0 011.45 1.11l.9 3.3a1.5 1.5 0 01-.4 1.47l-1.4 1.4a13.5 13.5 0 006.07 6.07l1.4-1.4a1.5 1.5 0 011.47-.4l3.3.9A1.5 1.5 0 0120.5 18v2.1a1.5 1.5 0 01-1.6 1.5C9.6 21.02 2.98 14.4 2.5 6.1A1.5 1.5 0 013 5.5z" />
              </svg>
              {t("popup.chip")}
            </span>

            <h2 className="mt-4 font-display text-2xl font-semibold leading-snug">
              {t("popup.title")}
            </h2>
            <p className="mt-2 text-sm text-white/80">{t("popup.subtitle")}</p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input type="hidden" name="_subject" value="Homepage popup — free consult request" />
              <div>
                <label className="block text-sm font-medium text-white/85">
                  {t("popup.name")}
                  <span className="ml-0.5 text-saffron-300">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
                />
              </div>
              <ValidatedField
                label={t("popup.email")}
                name="email"
                type="email"
                required
                variant="dark"
                errorMessage={t("validation.email")}
              />

              <label className="flex items-start gap-2 text-xs text-white/70">
                <input type="checkbox" name="marketingOptIn" value="yes" className="mt-0.5" />
                {t("popup.consent")}
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-terracotta-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50 disabled:opacity-70"
                >
                  {t("popup.cta")}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/70 underline underline-offset-2 hover:text-white"
                >
                  {t("popup.later")}
                </button>
              </div>

              <p className="pt-1 text-[11px] leading-relaxed text-white/55">{t("popup.privacy")}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
