/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#305742',
          50: '#f5f7f6',
          100: '#e6eae8',
          200: '#c5d0ca',
          300: '#9db3a8',
          400: '#739084',
          500: '#305742',
          600: '#2a4a3a',
          700: '#243c31',
          800: '#1e2f27',
          900: '#192620',
        },
        secondary: {
          DEFAULT: '#e63946',
          50: '#fdf2f3',
          100: '#fbe6e8',
          200: '#f5d0d4',
          300: '#eeadb3',
          400: '#e47d86',
          500: '#e63946',
          600: '#d11f2d',
          700: '#ae1723',
          800: '#911620',
          900: '#79151c',
        },
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'fox-pattern': "url('/images/fox-logo.svg')",
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 