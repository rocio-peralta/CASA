
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#3B3737',
        secondaryColor: '#C8C2AF',
      },
      fontFamily: {
          typographicPrimary: ["Alumni Sans", "sans-serif"],
          typographicSecondary: ["Montserrat", "sans-serif"],
          typographicTertiary: ["Playfair Display", "serif"],
          }
    },
  },
  plugins: [],
}
