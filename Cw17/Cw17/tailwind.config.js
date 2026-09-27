/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#111C3F',
          50: '#EEF0F7',
          100: '#D6DAEB',
          200: '#AEB6D6',
          300: '#7E8AB9',
          400: '#4E5D9C',
          500: '#2C3A76',
          600: '#1C2A5C',
          700: '#151F49',
          800: '#111C3F',
          900: '#0B1230',
          950: '#070B1E',
        },
        rust: {
          DEFAULT: '#E07A1F',
          50: '#FDF3E9',
          100: '#FAE3C8',
          200: '#F4C48D',
          300: '#EEA553',
          400: '#E68A2E',
          500: '#E07A1F',
          600: '#C1620E',
          700: '#96490B',
          800: '#6C3408',
          900: '#452005',
        },
        maroon: {
          DEFAULT: '#7C1D2C',
          50: '#F8E9EB',
          100: '#ECC3C9',
          200: '#D98795',
          300: '#B65468',
          400: '#992F45',
          500: '#7C1D2C',
          600: '#661724',
          700: '#4F121C',
          800: '#390D14',
          900: '#22080C',
        },
        cream: {
          DEFAULT: '#FBF6EC',
          soft: '#F5EEE0',
        },
        gold: '#C79A45',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'var(--font-noto-serif-dev)', 'ui-serif', 'serif'],
        body: ['var(--font-manrope)', 'var(--font-noto-sans-dev)', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(17, 28, 63, 0.35)',
        card: '0 12px 30px -14px rgba(17, 28, 63, 0.28)',
      },
      backgroundImage: {
        'vessel-lines': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.06' stroke-width='1.4'%3E%3Cpath d='M20 0 L20 200'/%3E%3Cpath d='M60 0 L60 200'/%3E%3Cpath d='M100 0 L100 200'/%3E%3Cpath d='M140 0 L140 200'/%3E%3Cpath d='M180 0 L180 200'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
