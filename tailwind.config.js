/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        'secondary-bg': 'hsl(var(--secondary-bg))',
        'foreground': 'hsl(var(--foreground))',
        // You can define other colors here if needed for your components
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 2s infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};