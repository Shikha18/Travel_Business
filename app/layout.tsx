import type { Metadata } from "next";
import { Fraunces, Inter, Dancing_Script } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import IntroMap from "@/components/IntroMap";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Small-group tours across India`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // English
    "India tours", "small group tours India", "group tours India 2026",
    "Spiti Valley tour", "Kashmir tour", "Ladakh tour", "Golden Triangle India",
    "India travel for Europeans", "female founded travel company India",
    "customisable India tours", "private tours India", "India tour operator",
    "Himalaya tours", "India travel 2026", "best India tour operator",
    // German
    "Indien Reise", "Indien Gruppenreise", "Kleingruppe Indien",
    "Ladakh Reise", "Kaschmir Reise", "Spiti Tal Reise",
    "Indien Rundreise 2026", "Indien Tour für Deutsche",
    "private Indien Reise", "individuelle Indien Reise",
    "Himalaya Reise", "Indien Reiseveranstalter",
  ],
  authors: [{ name: "Shikha Mangal", url: siteConfig.url }],
  creator: "GoTrustelle",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Small-group tours across India`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Small-group tours across India`,
    description: siteConfig.description,
    creator: "@gotrustelle",
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en": siteConfig.url,
      "de": `${siteConfig.url}?lang=de`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Inline pre-hydration script: synchronously adds `html.nj-no-intro`
// when the intro should be suppressed (already played this session or
// prefers-reduced-motion). The CSS hides .intro-overlay when that class
// is present, which prevents the overlay from flashing on repeat visits.
// Kept as a string so Next.js renders it as a <script> in the document
// head and it runs before React hydrates.
const INTRO_GUARD_SCRIPT = `
(function(){
  try {
    var prm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var played = sessionStorage.getItem('nj-intro-played') === '1';
    if (prm || played) {
      document.documentElement.classList.add('nj-no-intro');
    }
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${dancingScript.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_GUARD_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}/images/gotrustelle.png`,
              foundingDate: "2026",
              founders: [{ "@type": "Person", name: siteConfig.founder.name }],
              areaServed: { "@type": "Country", name: "India" },
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Delhi",
                addressCountry: "IN",
              },
              sameAs: [siteConfig.social.instagram],
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className="font-sans bg-cream-50 text-ink-900 antialiased">
        {/*
         * Landing intro: plays once per session (globe → fly to India),
         * then fades out. Rendered on first paint so the user sees the
         * map before any site content — the inline guard script above
         * hides it synchronously if it has already played this session.
         */}
        <IntroMap />
        {/*
         * Suspense boundaries are required because Header / Footer / WhatsAppButton
         * read the current URL search params (useSearchParams) to persist the
         * `?lang=` locale selection.
         */}
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="min-h-[50vh]">{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  );
}
