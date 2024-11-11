import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
