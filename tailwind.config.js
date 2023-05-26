/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      minWidth: {
        '4': '1.25rem',
      },
      colors: {
        "beige": "#EEEAED",
        "roseRed": "#FE0435",
        "kindaBlack": "#181E27",
        "darkGreen": "#00272B",
      },
    },
  },
  plugins: [],
};
