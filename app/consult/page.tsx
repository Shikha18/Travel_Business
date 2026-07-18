import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getLocale, getTranslator } from "@/lib/i18n";
import ValidatedField from "@/components/ValidatedField";
import PhoneField from "@/components/PhoneField";
import FutureDateField from "@/components/FutureDateField";
import ConsultVideo from "@/components/ConsultVideo";

export const metadata: Metadata = {
  title: "Free India Travel Consultation — GoTrustelle",
  description:
    "Have questions about visiting India? Book a free 30-minute call with GoTrustelle — no obligation to book a trip with us. Extended sessions available.",
  keywords: [
    "India travel advice", "India trip consultation", "ask about traveling to India",
    "India travel questions", "Indien Reiseberatung",
  ],
  alternates: {
    canonical: `${siteConfig.url}/consult`,
    languages: {
      en: `${siteConfig.url}/consult`,
      de: `${siteConfig.url}/consult?lang=de`,
    },
  },
};

export default function ConsultPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = getLocale(searchParams);
  const t = getTranslator(locale);

  // Formspree endpoint — submissions are forwarded to gotrustelle@gmail.com.
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdwrraw";

  const { extensions } = siteConfig.consult;

  return (
    <>
      <section id="book" className="container-wide py-8 md:py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Left column: pricing */}
          <div className="flex flex-col gap-5">
            {/* Free tier */}
            <div className="card p-6">
              <span className="chip-saffron">{t("consult.pricing.free.title")}</span>
              <p className="mt-3 font-display text-3xl font-semibold text-ink-900">
                {t("consult.pricing.free.price")}
              </p>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                {t("consult.pricing.free.body")}
              </p>
              <a
                href="#form"
                className="btn-primary mt-5 inline-flex w-full items-center justify-center"
              >
                {t("consult.form.submit")}
              </a>
            </div>

            {/* Paid extensions */}
            {extensions.map((ext) => (
              <div key={ext.minutes} className="card p-6">
                <span className="chip">
                  +{ext.minutes} {t("consult.pricing.perMinutes")}
                </span>
                <p className="mt-3 flex items-baseline gap-0.5 text-3xl font-semibold text-ink-900">
                  <span className="font-sans">€</span>
                  <span className="font-display">{ext.priceEUR}</span>
                </p>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {t("consult.pricing.extra.body")}
                </p>
                {ext.stripeLink ? (
                  <a
                    href={ext.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-5 inline-flex w-full items-center justify-center"
                  >
                    {t("consult.pricing.book")}
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Hi! I'd like to book a ${ext.minutes}-min extended consultation call.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mt-5 inline-flex w-full items-center justify-center text-center text-xs"
                  >
                    {t("consult.pricing.comingSoon")}
                  </a>
                )}
              </div>
            ))}

            <div id="form" className="card flex flex-col p-8 scroll-mt-24">
              <h2 className="font-display text-xl font-semibold text-ink-900">
                {t("consult.form.title")}
              </h2>
              <p className="mt-2 text-sm text-ink-600">{t("consult.form.subtitle")}</p>

              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="mt-6 space-y-5"
              >
                <input type="hidden" name="_subject" value="Free consultation request" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t("consult.form.name")} name="name" required />
                  <ValidatedField
                    label={t("consult.form.email")}
                    name="email"
                    type="email"
                    required
                    errorMessage={t("validation.email")}
                  />
                </div>
                <PhoneField
                  label={t("consult.form.whatsapp")}
                  name="whatsapp"
                  required
                  errorMessage={t("validation.phone")}
                />
                <div>
                  <label className="block text-sm font-medium text-ink-900">
                    {t("consult.form.topic")}
                  </label>
                  <textarea
                    name="topic"
                    rows={3}
                    placeholder={t("consult.form.topicPlaceholder")}
                    className="mt-1.5 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FutureDateField
                    label={t("consult.form.availabilityDate")}
                    name="availabilityDate"
                    required
                    errorMessage={t("validation.futureDate")}
                  />
                  <Field
                    label={t("consult.form.availabilityTime")}
                    name="availabilityTime"
                    placeholder={t("consult.form.availabilityTimePlaceholder")}
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  {t("consult.form.submit")}
                </button>
                <p className="text-xs text-ink-600">{t("consult.form.privacy")}</p>
              </form>
            </div>
          </div>

          {/* Right column: hero text + video */}
          <div className="flex h-full flex-col gap-5">
            <div className="card bg-cream-100 p-6">
              <span className="chip">{t("consult.chip")}</span>
              <h1 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                {t("consult.title")}
              </h1>
              <p className="mt-3 text-ink-600">{t("consult.subtitle")}</p>
            </div>

            <div className="card flex w-full flex-1 flex-col overflow-hidden p-3">
              <div className="flex aspect-[9/16] min-h-[320px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-black md:aspect-auto md:min-h-[420px]">
                <ConsultVideo className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-900">
        {label}
        {required && <span className="ml-0.5 text-saffron-600">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500"
      />
    </div>
  );
}
