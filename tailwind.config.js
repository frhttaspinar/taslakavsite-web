/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./config/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Lüks koyu gri / antrasit zemin tonları (slate ölçeği — kasvetsiz)
        night: {
          DEFAULT: "#0F172A", // slate-900
          800: "#1E293B", // slate-800
          700: "#334155", // slate-700
          600: "#475569", // slate-600
        },
        // Keskin metin tonları: başlıklar tam beyaz, gövde açık gri
        mist: {
          DEFAULT: "#FFFFFF",
          400: "#CBD5E1", // slate-300
          500: "#94A3B8", // slate-400
        },
        // Canlı ama asil altın vurgular
        gold: {
          DEFAULT: "#D8B878",
          300: "#EBD3A0",
          600: "#B4934F",
        },
        // Gümüş ikincil vurgular
        silver: {
          DEFAULT: "#C9D0DE",
          400: "#AEB7CA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "scroll-cue": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "45%": { transform: "scaleY(1)", transformOrigin: "top" },
          "55%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        "scroll-cue": "scroll-cue 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function hoverFineVariant({ addVariant }) {
      addVariant(
        "hover-fine",
        "@media (hover: hover) and (pointer: fine)"
      );
    },
  ],
};
