/**
 * Central site configuration.
 * Edit this single file to change brand name, contact info, social links,
 * and SEO defaults across the entire site.
 */

export const siteConfig = {
  // Brand
  name: "GoTrustelle",
  tagline: "Feel India, Not Just Visit",
  description:
    "Curated small-group journeys across India — Experience. Trust. Connection. Female-founded, built for international travelers who want depth, not a checklist.",

  // URL (update after deploying to Vercel — used for SEO/Open Graph)
  url: "https://www.gotrustelle.com",

  // Contact
  email: "gotrustelle@gmail.com",
  phone: "+91 95897 39723",
  phoneE164: "+919589739723", // no spaces — used in tel: links
  whatsappNumber: "919589739723", // no '+' or spaces — used in wa.me links
  whatsappDefaultMessage:
    "Hi! I'd love to plan my trip with Gotrustelle ✨\n\nName:\nFrom (Your Location):\nDestination in India:\nTravel Dates:\nNumber of Travelers:\nBudget (approx per person):\nAny Preferences (luxury / culture / adventure / slow travel):",

  // Location
  address: "New Delhi, India",

  // Social (brand accounts — currently point to founder's personal IG until brand accounts are made)
  social: {
    instagram: "https://www.instagram.com/gotrustelle/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://www.linkedin.com/company/117413955/",
  },

  // Team (shown on the About page)
  // Drop the real photo file at /public/shikha.jpg or /public/melissa.jpg.
  // If the file is missing at that path, the card will show a stylish
  // initials placeholder in brand colors.
  founder: {
    name: "Shikha Mangal",
    firstName: "Shikha",
    flag: "🇮🇳",
    instagram: "https://www.instagram.com/backpacker_shikha/",
    instagramHandle: "@backpacker_shikha",
    linkedin: "https://www.linkedin.com/in/shikha-mangal-898945141/",
    email: "gotrustelle@gmail.com",
    whatsapp: "919589739723",
    photo: "/images/shikha.jpg", // file lives at /public/images/shikha.jpg
  },
  partner: {
    name: "Melissa",
    firstName: "Melissa",
    flag: "🇩🇪",
    // Fill these in when Melissa shares them — empty strings hide the button.
    instagram: "",
    instagramHandle: "",
    linkedin: "",
    email: "",
    whatsapp: "",
    photo: "/images/melissa.jpeg", // file lives at /public/images/melissa.jpeg
  },

  // Trust signals shown in the footer / about page
  trustBadges: [
    "Small groups (max 10 travelers)",
    "24/7 on-trip support",
    "Handpicked local guides",
    "Safe for solo & female travelers",
  ],

  // Upcoming departures window (shown on home hero)
  season: {
    label: "June – July 2026 Group Departures",
    bookingOpen: true,
  },

  // 1:1 India travel consultation calls (/consult page)
  // Paste real Stripe Payment Link URLs here once created in the Stripe
  // Dashboard (Payment Links → New). Leave as "" to hide a button.
  consult: {
    freeMinutes: 30,
    extensions: [
      { minutes: 30, priceUSD: 40, stripeLink: "" },
      { minutes: 60, priceUSD: 68, stripeLink: "" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
