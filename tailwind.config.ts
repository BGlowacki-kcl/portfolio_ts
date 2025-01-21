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
        dark: "#2A3663",
        light: "#FAF6E3",
        primary: "#B59F78",
        secondary: "#D8DBBD",
        black: "#000000",
        white: '#ffffff',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(to right, #00000010 1px, transparent 1px), linear-gradient(to bottom, #00000010 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
