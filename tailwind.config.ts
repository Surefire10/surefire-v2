import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))",
        primary: "var(--primary)",
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.017em" }],
        "3xl": ["1.875rem", { lineHeight: "1.333", letterSpacing: "-0.017em" }],
        "4xl": ["2.25rem", { lineHeight: "1.277", letterSpacing: "-0.017em" }],
        "5xl": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.017em" }],
        "6xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.017em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.017em" }],
      },
    },
  },
  plugins: [],
};
export default config;
