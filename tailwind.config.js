/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        mfr: "914px",
      },
      height: {
        nika: "400px",
        nika2: "500px",
      },
      width: {
        gumgum: "400px",
        gum2: "500px",
      },
    },
  },
  plugins: [],
};
