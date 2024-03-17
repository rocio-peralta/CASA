export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#3B3737',
        secondaryColor: '#C8C2AF',
      },
      fontFamily: {
        typographicPrimary: ['Alumni Sans', 'sans-serif'],
        typographicSecondary: ['Montserrat', 'sans-serif'],
        typographicTertiary: ['Playfair Display', 'serif'],
      },
      keyframes: {
        reveal: {
          '0%': {
            transform: 'translateY(75%)',
            opacity: 0,
          },
        },
      },
      animation: {
        reveal: 'reveal 1.5s linear forwards',
      },
    },
  },
  plugins: [],
}
