/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#00BFFF',
        'light-primary-color': '#80c8ff',
        'secondary-color': '#0B3D91',
        'third-color': '#32CD32',
        'primary-black': '#1C1C1C',
        'secondary-black': '#0A0A0A',
        'tertiary-black': '#2E2E2E',
        'clear-white': 'rgba(255, 255, 255, 0.8)',
      },
      keyframes: {
        float: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
            '100%': { transform: 'translateY(0)' },
        },
    },
      animation: {
          float: 'float 3s ease-in-out infinite',
    },
    },
  },
  plugins: [],
}