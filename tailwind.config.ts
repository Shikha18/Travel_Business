import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  "#fdf8ee",
          100: "#f8eacc",
          200: "#f0cc84",
          300: "#e4aa42",
          400: "#cc8c24",
          500: "#b47018",
          600: "#8e5510",
          700: "#693e0c",
          800: "#462908",
          900: "#251504",
        },
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
        teal: {
          50: "#eef4fc",
          100: "#d5e4f6",
          200: "#a9c6ec",
          300: "#77a4de",
          400: "#4a82cd",
          500: "#2c62b2",
          600: "#224e91",
          700: "#1b3d73",
          800: "#142b53",
          900: "#0c1b36",
        },
        rose: {
          50: "#fdf4f4",
          100: "#fbe0e1",
          200: "#f5b4bb",
          300: "#ec8595",
          400: "#df5a75",
          500: "#c93e5c",
          600: "#a02e49",
          700: "#7b2539",
          800: "#551a28",
          900: "#34101a",
        },
        cream: {
          50:  "#fdf4ec",
          100: "#f5e2c8",
        },
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
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(120, 70, 20, 0.14)",
        card: "0 14px 40px -14px rgba(120, 70, 20, 0.18)",
        glow: "0 20px 60px -20px rgba(205, 89, 48, 0.45)",
        plum: "0 20px 60px -20px rgba(44, 98, 178, 0.38)",
        warm: "0 20px 60px -20px rgba(200, 130, 30, 0.40)",
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #f7c87e 0%, #e07840 30%, #b33f1e 62%, #6a2613 100%)",
        "sunset-gradient":
          "linear-gradient(135deg, #f4a55a 0%, #cd5930 50%, #8e3218 100%)",
        "spice-gradient":
          "linear-gradient(135deg, #fef9ee 0%, #fef0cc 40%, #f7c87e 100%)",
        "haveli-gradient":
          "linear-gradient(135deg, #fef9ee 0%, #fdf3ed 55%, #f8ddcb 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
