/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-soft": "#F8F9FB",
        ink: "#171717",
        muted: "#6B7280",
        accent: "#DDE7FF",
        "accent-blue": "#8FADEB",
        lavender: "#E8E0FF",
        line: "#EAEAEA",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        body: ["Inter", "Plus Jakarta Sans", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
