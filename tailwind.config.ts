/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "960px",
        lg: "1280px",
      },
      colors: {
        // primary: "#AE0101",
        // "primary-dark": "#620410",
        // secondary: "#1A1313",
        // "secondary-dark": "#390101",
        // border: "#C7C7C7",
      },
      fontFamily: {
        primary: ["var(--roboto)"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
