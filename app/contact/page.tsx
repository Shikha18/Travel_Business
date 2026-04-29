import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getLocalizedTours } from "@/lib/tours";
import { getLocale, getTranslator } from "@/lib/i18n";
import ContactDateFields from "./ContactDateFields";

export const metadata: Metadata = {
  title: "Contact GoTrustelle — plan your India trip",
  description:
    "Get in touch with GoTrustelle to plan your India trip. WhatsApp us for the fastest reply — we respond within a few hours (Indian Standard Time). Custom itineraries available.",
  keywords: [
    "contact GoTrustelle", "plan India trip", "India tour enquiry",
    "custom India itinerary", "WhatsApp India tour",
    "Indien Reise anfragen", "GoTrustelle kontaktieren",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
    languages: {
      en: `${siteConfig.url}/contact`,
      de: `${siteConfig.url}/contact?lang=de`,
    },
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);
  const localizedTours = getLocalizedTours(locale);

  // Formspree endpoint — Shikha, replace FORM_ID with your own free Formspree endpoint.
  // Sign up at https://formspree.io, create a new form pointing to mangal.shikha1997@gmail.com,
  // then paste the URL here (e.g., https://formspree.io/f/xxxxxxx).
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  return (
    <>
      <section className="bg-cream-100">
        <div className="container-wide py-10 md:py-14">
          <span className="chip">{t("contact.chip")}</span>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-ink-600">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="container-wide grid gap-8 py-8 md:grid-cols-5 md:py-12">
        <div className="md:col-span-3">
          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="card space-y-5 p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("contact.form.name")} name="name" required />
              <Field label={t("contact.form.email")} name="email" type="email" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label={t("contact.form.country")}
                name="country"
                placeholder={t("contact.form.countryPlaceholder")}
              />
              <Field
                label={t("contact.form.whatsapp")}
                name="whatsapp"
                placeholder="+91…"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-900">
                {t("contact.form.tour")}
              </label>
              <select
                name="tour"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-100 text-ink-900 px-4 py-3 text-sm focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                defaultValue=""
              >
                <option value="" disabled>
                  {t("contact.form.tourSelect")}
                </option>
                {localizedTours.map((tour) => (
                  <option key={tour.slug}>{tour.title}</option>
                ))}
                <option>{t("contact.form.tourCustom")}</option>
                <option>{t("contact.form.tourUnsure")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-900">
                {t("contact.form.dates")}
              </label>
              <ContactDateFields
                startLabel={t("contact.form.startDate")}
                endLabel={t("contact.form.endDate")}
              />
            </div>
            <div>
              <Field
                label={t("contact.form.travelers")}
                name="travelers"
                placeholder={t("contact.form.travelersPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-900">
                {t("contact.form.message")}
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder={t("contact.form.messagePlaceholder")}
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-100 text-ink-900 px-4 py-3 text-sm focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              {t("cta.sendInquiry")}
            </button>
            <p className="text-xs text-ink-600">
              {t("contact.form.privacy")}
            </p>
          </form>
        </div>

        <aside className="md:col-span-2 space-y-5">
          <div className="card p-6">
            <h3 className="font-display text-xl font-semibold">
              {t("contact.sidebar.fastest.title")}
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              {t("contact.sidebar.fastest.body")}
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full bg-[#25D366] hover:bg-[#1da851]"
            >
              {t("cta.openWhatsApp")}
            </a>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-xl font-semibold">
              {t("contact.sidebar.email.title")}
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-terracotta-50 px-4 py-2 text-sm font-semibold text-terracotta-700 ring-1 ring-terracotta-200 transition hover:bg-terracotta-100"
            >
              Send us an email →
            </a>
            <p className="mt-3 text-sm text-ink-600">
              {t("contact.sidebar.phone")}:{" "}
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="text-ink-900 hover:underline"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p className="mt-1 text-sm text-ink-600">
              {t("contact.sidebar.basedIn")} {siteConfig.address}
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-xl font-semibold">
              {t("contact.sidebar.hours.title")}
            </h3>
            <p className="mt-2 whitespace-pre-line text-sm text-ink-600">
              {t("contact.sidebar.hours.body")}
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  compact,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  /** Smaller secondary label — used for the start/end date inputs that
   *  already sit under a shared "Approximate travel dates" heading. */
  compact?: boolean;
}) {
  return (
    <div>
      <label
        className={
          compact
            ? "block text-xs font-medium uppercase tracking-wide text-ink-600"
            : "block text-sm font-medium text-ink-900"
        }
      >
        {label}
        {required && <span className="ml-0.5 text-saffron-600">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`${
          compact ? "mt-1" : "mt-1.5"
        } w-full rounded-xl border border-white/10 bg-ink-100 text-ink-900 px-4 py-3 text-sm focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500`}
      />
    </div>
  );
}
