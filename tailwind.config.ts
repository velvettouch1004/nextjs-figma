import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        finalChapterGray: "#E5E5E5",
        finalChapterBlack: "#0C0C0C",
        finalChapterDarkGray: "#1B1B1B",
        finalChapterLightGray: "#757575",
        // Add more custom colors here
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxHeight: {
        "712": "712px",
        "850": "850px",
      },
      width: {
        "1800": "1800px",
        "545": "545px",
        "328": "328px",
      },
      height: {
        "328": "328px",
      },
      maxWidth: {
        "545": "445px",
      },
      minWidth: {
        "200": "173px",
      },
      backgroundColor: {
        "111111": "rgba(251, 253, 255, 0.05)",
        "222": "rgb(205 156 156 / 20%);",
        dark: "#111111",
        fbfdff: "#FBFDFF",
      },
      textColor: {
        fbfdff: "#afafaf",
        d1d1d1: "#d1d1d1",
        111: "#111",
      },
      lineHeight: {
        heavy: "88px",
      },
      top: {
        "130": "130px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
} satisfies Config;

export default config;
