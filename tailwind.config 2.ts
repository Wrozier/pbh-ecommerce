import type { Config } from "tailwindcss";
import fontFamily from "tailwindcss/defaultTheme";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        lightOrange: "#fca99b",
        lightBlue: "#7688db",
        darkBlue: "#6c7fd8",
        darkText: "#686e7d",
        lightBg: "#f8f8fb",
        background: "hsl(var(--background))", // Define bg-background
        foreground: "hsl(var(--foreground))", // Define text-foreground
        border: "hsl(var(--border))", // Define border-border
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;