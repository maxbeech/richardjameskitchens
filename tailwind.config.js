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
          DEFAULT: '#3a4a5a', // Rich navy blue
          50: '#f4f6f8',
          100: '#e2e6ec',
          200: '#c5d0db',
          300: '#9cafc2',
          400: '#7490aa',
          500: '#587594',
          600: '#3a4a5a', // Main color
          700: '#334353',
          800: '#283542',
          900: '#1f2937',
        },
        secondary: {
          DEFAULT: '#b5967a', // Warm wood tone
          50: '#fbf8f5',
          100: '#f5efe8',
          200: '#ecdecf',
          300: '#dec8b1',
          400: '#ceb194',
          500: '#b5967a', // Main color
          600: '#a07e60',
          700: '#84674f',
          800: '#6e5642',
          900: '#5c4938',
        },
        accent: {
          DEFAULT: '#cad2c5', // Soft sage green
          50: '#f8faf8',
          100: '#edf1ec',
          200: '#dbe3d8',
          300: '#cad2c5', // Main color
          400: '#b2bfaa',
          500: '#97a88c',
          600: '#7e9171',
          700: '#67775c',
          800: '#55614c',
          900: '#455040',
        },
        neutral: {
          DEFAULT: '#f8f7f5', // Warm off-white
          50: '#fefefe',
          100: '#f8f7f5', // Main color
          200: '#eae6e1',
          300: '#d7d0c8',
          400: '#bbb0a4',
          500: '#a39283',
          600: '#8a7767',
          700: '#726156',
          800: '#5e5047',
          900: '#4d423b',
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
        'scale': 'scale 12s infinite ease-in-out',
        'gradient-x': 'gradient-x 15s ease infinite',
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
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'fox-pattern': "url('/images/fox-logo.svg')",
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.06)',
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
} 