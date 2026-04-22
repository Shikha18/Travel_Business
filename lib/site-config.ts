/**
 * Central site configuration.
 * Edit this single file to change brand name, contact info, social links,
 * and SEO defaults across the entire site.
 */

export const siteConfig = {
  // Brand
  name: "Namaste Journeys",
  tagline: "I don't want to show India. I want to explain India.",
  description:
    "Small-group tours across India designed for international travelers. Immersive itineraries, trusted local guides, and seamless end-to-end planning.",

  // URL (update after deploying to Vercel — used for SEO/Open Graph)
  url: "https://namaste-journeys.vercel.app",

  // Contact
  email: "mangal.shikha1997@gmail.com",
  phone: "+91 95897 39723",
  phoneE164: "+919589739723", // no spaces — used in tel: links
  whatsappNumber: "919589739723", // no '+' or spaces — used in wa.me links
  whatsappDefaultMessage:
    "Hi! I'd love to know more about your group tours to India.",

  // Location
  address: "New Delhi, India",

  // Social (brand accounts — currently point to founder's personal IG until brand accounts are made)
  social: {
    instagram: "https://www.instagram.com/backpacker_shikha/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
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
    email: "mangal.shikha1997@gmail.com",
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
    photo: "/images/melissa.jpg", // file lives at /public/images/melissa.jpg
  },

  // Trust signals shown in the footer / about page
  trustBadges: [
    "Small groups (max 12 travelers)",
    "24/7 on-trip support",
    "Handpicked local guides",
    "Safe for solo & female travelers",
  ],

  // Upcoming departures window (shown on home hero)
  season: {
    label: "June – July 2026 Group Departures",
    bookingOpen: true,
  },
};

export type SiteConfig = typeof siteConfig;
