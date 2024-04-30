/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff9f00",
        secondary: "#ffa91a",
      },
      backgroundImage: {
        ayam1: 'url("/src/assets/images/ayambakar.jpg")',
        ayam2: 'url("/src/assets/images/ayambakar1.jpg")',
        ayam3: 'url("/src/assets/images/ayambakar2.jpg")',
        ayam4: 'url("/src/assets/images/ayambakar4.jpg")',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-sarif"],
        dmsans: ["DM Sans", "sans-sarif"],
        protest: ["Protest Strike", "sans-sarif"],
        nanum: "Nanum Gothic",
        kanit: "Kanit",
        lexend: "Lexend Deca",
        encode: "Encode Sans",
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1780px",
      "4xl": "2160px", // only need to control product grid mode in ultra 4k device
    },
  },
  plugins: [],
};
