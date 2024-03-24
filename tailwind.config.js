/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        VazirMatn: "Vazirmatn RD",
      },
      backgroundImage: (theme) => ({
        nwBg: "url('/public/dist/images/Screens.png')",
        radialGradient: "radial-gradient(var(--tw-gradient-stops))",
        nissanLogo: "url(/public/dist/images/nissan.png)",
      }),
      backgroundSize: {
        fullHalf: "20% auto",
      },
    },
  },
  plugins: [],
};
