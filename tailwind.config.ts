import type { Config } from "tailwindcss";

/**
 * Namaste Journeys — "Dal Lake & Jodhpur" theme
 *
 * Blue-dominant palette inspired by Kashmir's Dal Lake, the painted blue
 * houses of Jodhpur, peacock feathers, and the Himalayan glacial rivers —
 * grounded with warm sandstone-clay accents so it still feels India-warm.
 *
 * saffron   → Dal Lake aqua · Kashmir water · peacock feather (PRIMARY)
 * terracotta→ Jaipur brick · Sun-baked clay · sandstone warmth (warm accent)
 * teal      → Jodhpur Indigo · peacock navy · midnight Rajasthan sky
 * rose      → Jaipur Pink · Lotus · Bengali sari blush
 * cream     → Khadi · Handspun ivory · Mineral sandstone
 * ink       → Warm navy-earth · Antique-manuscript
 */

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // DAL LAKE AQUA — primary brand color. Kept under "saffron" key
        // for backward-compat with existing components.
        saffron: {
          50: "#eefbfc",
          100: "#cff3f6",
          200: "#9fe6ec",
          300: "#63d2dc",
          400: "#2fb8c5",
          500: "#0f9ab1", // primary brand aqua — Dal Lake, Kashmir water
          600: "#0a7c92",
          700: "#0b6074",
          800: "#0d4654",
          900: "#0a2c37",
        },
        // CLAY — warm sandstone-terracotta that grounds the palette.
        // Kept as warm counter-accent to the blues.
        terracotta: {
          50: "#fdf3ed",
          100: "#f8ddcb",
          200: "#eeaf89",
          300: "#de7f52",
          400: "#cd5930",
          500: "#b33f1e",
          600: "#8e3218",
          700: "#6a2613",
          800: "#471b10",
          900: "#2a1008",
        },
        // JODHPUR INDIGO — deep navy-blue of the Blue City and peacock.
        // Kept under "teal" key for backward-compat.
        teal: {
          50: "#eef4fc",
          100: "#d5e4f6",
          200: "#a9c6ec",
          300: "#77a4de",
          400: "#4a82cd",
          500: "#2c62b2", // Jodhpur blue
          600: "#224e91",
          700: "#1b3d73",
          800: "#142b53",
          900: "#0c1b36",
        },
        // ROSE — Jaipur Pink · Lotus · sari blush. A new soft accent.
        rose: {
          50: "#fdf4f4",
          100: "#fbe0e1",
          200: "#f5b4bb",
          300: "#ec8595",
          400: "#df5a75",
          500: "#c93e5c", // bold Jaipur pink
          600: "#a02e49",
          700: "#7b2539",
          800: "#551a28",
          900: "#34101a",
        },
        // KHADI — warmer handspun ivory.
        cream: {
          50: "#fdf9f0",
          100: "#f8ecd2",
        },
        // EARTH — warm dark brown instead of cool near-black.
        ink: {
          50: "#f7f2e9",
          100: "#ece3d1",
          200: "#d4c5a7",
          300: "#b29e73",
          400: "#948055",
          500: "#6e5d3d",
          600: "#544630",
          700: "#3e3524",
          800: "#2a2318",
          900: "#1a140e",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Slightly cool earth shadows — work on both blue and warm content.
        soft: "0 8px 30px -12px rgba(20, 43, 83, 0.18)",
        card: "0 14px 40px -14px rgba(20, 43, 83, 0.28)",
        // Signature glows for hero/CTA accents.
        glow: "0 20px 60px -20px rgba(15, 154, 177, 0.45)", // aqua glow
        plum: "0 20px 60px -20px rgba(44, 98, 178, 0.38)", // Jodhpur blue glow
      },
      backgroundImage: {
        // Aqua → indigo with warm clay highlight in the middle.
        "warm-gradient":
          "linear-gradient(135deg, #9fe6ec 0%, #0f9ab1 35%, #2c62b2 70%, #142b53 100%)",
        "sunset-gradient":
          "linear-gradient(135deg, #0f9ab1 0%, #2c62b2 55%, #142b53 100%)",
        "spice-gradient":
          "linear-gradient(135deg, #eefbfc 0%, #9fe6ec 40%, #2fb8c5 100%)",
        "haveli-gradient":
          "linear-gradient(135deg, #eefbfc 0%, #fbe0e1 55%, #9fe6ec 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
