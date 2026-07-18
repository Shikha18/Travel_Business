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
      <section className="bg-cream-100">
        <div className="container-wide py-10 md:py-14">
          <span className="chip">{t("consult.chip")}</span>
          <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            {t("consult.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-ink-600">{t("consult.subtitle")}</p>
        </div>
      </section>

      <section id="book" className="container-wide py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* Left column: pricing */}
          <div className="order-2 flex flex-col gap-5 md:order-1">
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
          </div>

          {/* Middle column: compact video, vertically centered against the two side columns */}
          <div className="order-1 flex justify-center md:order-2 md:h-full md:items-center">
            <div className="card w-full max-w-[240px] overflow-hidden p-2 md:w-[240px]">
              <div className="aspect-[9/16] overflow-hidden rounded-xl bg-black">
                <ConsultVideo className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className="order-3 md:order-3 md:h-full">
            <div id="form" className="card flex h-full flex-col p-8 scroll-mt-24">
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
