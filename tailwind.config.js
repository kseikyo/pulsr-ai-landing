module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#5AADFF",
        "light-purple": "#CA94FF",
        gray: "#626575",
      },
      fontFamily: {
        body: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
