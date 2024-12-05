import type { Config } from "tailwindcss";

export default {
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
        primary: "var(--primary-color)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },

      backgroundImage: {
        img: "url('/icons/ellipse-bg.svg')",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
