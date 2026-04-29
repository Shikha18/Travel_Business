import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GOLDEN AMBER — primary accent on dark theme
        saffron: {
          50:  "#1a1200",
          100: "#2e1f00",
          200: "#5c3f00",
          300: "#a07010",
          400: "#c8920a",
          500: "#e4aa42", // primary gold — pops on dark
          600: "#efc060",
          700: "#f5d080",
          800: "#f9e4b0",
          900: "#fdf3da",
        },
        // CLAY / TERRACOTTA — warm orange accent
        terracotta: {
          50: "#180a04",
          100: "#2e1008",
          200: "#5a200e",
          300: "#8e3218",
          400: "#b34020",
          500: "#cd5930",
          600: "#de7f52",
          700: "#e9a07a",
          800: "#f2c4a6",
          900: "#fae4d4",
        },
        // JODHPUR BLUE — cool accent
        teal: {
          50: "#050c1a",
          100: "#0c1b36",
          200: "#142b53",
          300: "#1b3d73",
          400: "#224e91",
          500: "#2c62b2",
          600: "#4a82cd",
          700: "#77a4de",
          800: "#a9c6ec",
          900: "#d5e4f6",
        },
        // ROSE — soft pink accent
        rose: {
          50: "#140508",
          100: "#270a12",
          200: "#4e1422",
          300: "#7b2539",
          400: "#a02e49",
          500: "#c93e5c",
          600: "#df5a75",
          700: "#ec8595",
          800: "#f5b4bb",
          900: "#fbe0e1",
        },
        // DARK SURFACE — replaces cream (page bg, section bands)
        cream: {
          50:  "#0c0b09",   // page background — near-black warm
          100: "#161512",   // elevated section bands
        },
        // INK — inverted for dark theme (900 = off-white text, low = dark surface)
        ink: {
          50:  "#121110",
          100: "#1a1816",
          200: "#262320",
          300: "#38342f",
          400: "#504b46",
          500: "#6e6862",
          600: "#96908a",
          700: "#b8b0a6",
          800: "#d8d0c5",
          900: "#f2ede6",   // primary text — warm off-white
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(0, 0, 0, 0.6)",
        card: "0 14px 40px -14px rgba(0, 0, 0, 0.7)",
        glow: "0 20px 60px -20px rgba(228, 170, 66, 0.4)",
        plum: "0 20px 60px -20px rgba(44, 98, 178, 0.38)",
        warm: "0 20px 60px -20px rgba(205, 89, 48, 0.45)",
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #c8920a 0%, #b34020 35%, #8e3218 65%, #2e1008 100%)",
        "sunset-gradient":
          "linear-gradient(135deg, #e4aa42 0%, #cd5930 50%, #8e3218 100%)",
        "spice-gradient":
          "linear-gradient(135deg, #0c0b09 0%, #1a1816 40%, #262320 100%)",
        "haveli-gradient":
          "linear-gradient(135deg, #0c0b09 0%, #161512 55%, #1a1816 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
