/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#faf7f2',
          dark: '#f0ebe1',
        },
        warm: {
          50: '#fdfbf7',
          100: '#f8f3ea',
          200: '#efe5d4',
          300: '#e2d3ba',
          400: '#d1bd9a',
          500: '#c4a878',
          600: '#b08d5e',
          700: '#8f6f48',
          800: '#6b5439',
          900: '#4a3a28',
        },
        sage: {
          50: '#f5f7f3',
          100: '#e8eee5',
          200: '#d0dcc9',
          300: '#aac3a0',
          400: '#84a574',
          500: '#5d8a4d',
          600: '#4a6f3c',
          700: '#3a5830',
          800: '#2e4526',
          900: '#243820',
        },
        clay: {
          50: '#fdf6f3',
          100: '#faeae3',
          200: '#f4d2c5',
          300: '#ecb09e',
          400: '#e0886f',
          500: '#d26a4d',
          600: '#b85134',
          700: '#933f28',
          800: '#6e2f1e',
          900: '#4a1f14',
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
      },
    },
  },
  plugins: [],
};
