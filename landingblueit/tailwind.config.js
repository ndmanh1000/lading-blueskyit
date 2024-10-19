/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-sky-gradient1":
          "linear-gradient(90deg, #27C6FF 0%, #1375B7 100%)",
        "blue-sky-gradient2":
          "linear-gradient(180deg, #27C6FF 0%, #1D95BF 100%)",
      },
      boxShadow: {
        custom: "0px 2px 4.8px 0px rgba(0, 0, 0, 0.10)",

        custom1: "0px 4px 10px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
