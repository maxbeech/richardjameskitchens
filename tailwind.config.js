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
          DEFAULT: '#6eaf9f',
          50: '#f5f9f8',
          100: '#e6f1ef',
          200: '#c5e0db',
          300: '#9dcbc2',
          400: '#90c5b9',
          500: '#6eaf9f',
          600: '#528b7d',
          700: '#447267',
          800: '#3a5c53',
          900: '#314b45',
        },
        secondary: {
          DEFAULT: '#c3694c',
          50: '#fcf8f6',
          100: '#f9f0ed',
          200: '#f2e0d8',
          300: '#edc9bc',
          400: '#e5b3a0',
          500: '#d98f76',
          600: '#c3694c',
          700: '#a34e3b',
          800: '#874334',
          900: '#6f3b30',
        },
        accent: {
          DEFAULT: '#fa7c15',
          50: '#fffaf4',
          100: '#fff4e9',
          200: '#ffe8d2',
          300: '#ffd8b0',
          400: '#ffbd7d',
          500: '#ff9e4a',
          600: '#fa7c15',
          700: '#d55e09',
          800: '#ac4c0c',
          900: '#8c4010',
        },
        neutral: {
          DEFAULT: '#f4f1eb',
          50: '#fbfaf8',
          100: '#f4f1eb',
          200: '#e6dfd3',
          300: '#d3c7b3',
          400: '#bba990',
          500: '#a48f73',
          600: '#8d775c',
          700: '#75624d',
          800: '#614f40',
          900: '#504237',
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
        'fade': 'fade 10s infinite',
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
        fade: {
          '0%, 100%': { opacity: 0 },
          '16.67%, 83.33%': { opacity: 1 },
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