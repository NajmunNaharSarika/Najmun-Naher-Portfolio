import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        sage: {
          50: "#f4f7f5",
          100: "#e8efea",
          200: "#d2e0d6",
          300: "#abc5b5",
          400: "#7f9f8d",
          500: "#5e7a6b",
          600: "#4a6456",
          700: "#3c5046",
          800: "#32413a",
          900: "#2a3630",
        },
        clay: {
          50: "#faf6f2",
          100: "#f4ece3",
          200: "#e8d8c8",
          300: "#d9beaa",
          400: "#c4a48a",
          500: "#b89379",
          600: "#9d765d",
          700: "#7e5d48",
          800: "#674d3d",
          900: "#543f33",
        },
        linen: {
          50: "#fdfcfb",
          100: "#f7f4ef",
          200: "#efe8de",
          300: "#e4d8c7",
          400: "#d5c4ad",
          500: "#c5ad91",
        },
        charcoal: {
          50: "#f5f6f6",
          100: "#e5e8e8",
          200: "#ced4d5",
          300: "#aab5b7",
          400: "#7e8f92",
          500: "#5e6d70",
          600: "#4c595c",
          700: "#3e494c",
          800: "#364144",
          900: "#232c2e",
          950: "#171e20",
        },
        slate: {
          850: "#131b2e",
          950: "#080c16",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(94, 122, 107, 0.35)",
        "glow-lg": "0 0 45px -10px rgba(94, 122, 107, 0.45)",
        "glow-dark": "0 0 35px -5px rgba(244, 63, 94, 0.25)",
        card: "0 10px 30px -10px rgba(35, 44, 46, 0.07)",
        "card-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(circle at 50% 0%, rgba(244, 63, 94, 0.15), transparent 45%), radial-gradient(circle at 100% 50%, rgba(99, 102, 241, 0.1), transparent 40%)",
        "mesh-light": "radial-gradient(circle at 50% 0%, rgba(94, 122, 107, 0.12), transparent 45%), radial-gradient(circle at 100% 50%, rgba(196, 164, 138, 0.14), transparent 40%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
