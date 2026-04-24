/**
 * Central site configuration.
 * Edit this single file to change brand name, contact info, social links,
 * and SEO defaults across the entire site.
 */

export const siteConfig = {
  // Brand
  name: "GoTrustelle",
  tagline: "Travel Experiences in India · by a woman, for you",
  description:
    "Curated small-group tours across India — Experience. Trust. Connection. Female-founded, built for international travelers who want depth, not a checklist.",

  // URL (update after deploying to Vercel — used for SEO/Open Graph)
  url: "https://gotrustelle.vercel.app",

  // Contact
  email: "mangal.shikha1997@gmail.com",
  phone: "+91 95897 39723",
  phoneE164: "+919589739723", // no spaces — used in tel: links
  whatsappNumber: "919589739723", // no '+' or spaces — used in wa.me links
  whatsappDefaultMessage:
    "Hi! I'd love to know more about GoTrustelle group tours to India.",

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
    photo: "/images/melissa.jpeg", // file lives at /public/images/melissa.jpeg
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
