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
        "blue-sky-gradient3":
          "linear-gradient(180deg, rgba(19, 117, 183, 0.00) 43.5%, rgba(39, 198, 255, 0.80) 73.73%, #1375B7 100%)",
        "blue-sky-gradient4":
          "linear-gradient(270deg, #E5F8FF 0%, rgba(229, 248, 255, 0.10) 100%)",
        "blue-sky-gradient5":
          "linear-gradient(0deg, rgba(19, 117, 183, 0.80) 0%, rgba(19, 117, 183, 0.80) 100%)",
        "blue-sky-gradient6":
          "linear-gradient(90deg, rgba(39, 198, 255, 0.90) 0%, rgba(19, 117, 183, 0.90) 100%)",
      },
      boxShadow: {
        custom: "0px 2px 4.8px 0px rgba(0, 0, 0, 0.10)",

        custom1: "0px 4px 10px 0px rgba(0, 0, 0, 0.12)",
        custom2: "0px 2px 4.8px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
