const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/img/Ompro-Hero.jpg')",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)", // Bayangan kecil
        DEFAULT: "0 2px 4px var(--tw-shadow-color)", // Bayangan default
        lg: "0 8px 16px var(--tw-shadow-color)", // Bayangan besar
        none: "none",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          // 'text-shadow-sm', 'text-shadow-DEFAULT', dll.
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
