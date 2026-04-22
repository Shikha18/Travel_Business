import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "India tours",
    "group tours India",
    "Spiti Valley tour",
    "Kashmir tour",
    "Golden Triangle",
    "India travel for foreigners",
    "India small group tour",
    "June July India travel",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_GUARD_SCRIPT }} />
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
        <main className="min-h-[70vh]">{children}</main>
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
