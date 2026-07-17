/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Calm steel-blue accent (industrial / engineering trust)
        accent: {
          50: '#eaf1f9',
          100: '#d3e2f2',
          200: '#aecbe6',
          300: '#83acd6',
          400: '#5f97cc',
          500: '#3f7cbb',
          600: '#2f6fb3',
          700: '#245a92',
          800: '#1f4a78',
          900: '#1d4066',
          DEFAULT: '#2f6fb3',
        },
        // Deep steel navy base (dark sections + footer)
        ink: {
          50: '#f4f6f9',
          100: '#e6eaf1',
          200: '#c9d2e0',
          300: '#9fadC5',
          400: '#6b7c9c',
          500: '#495b7d',
          600: '#334263',
          700: '#233250',
          800: '#16213c',
          900: '#0b1220',
          950: '#060a14',
          DEFAULT: '#0b1220',
        },
        // Cool steel-blue secondary (accents / process / industries)
        steel: {
          400: '#5b7ba8',
          500: '#3f5f8a',
          600: '#2f496d',
        },
      },
      fontFamily: {
        primary: ['Sora', 'system-ui', 'sans-serif'],
        secondary: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-slow': 'marquee-slow 45s linear infinite',
        'fade-in': 'fade-in 1s ease forwards',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(11, 18, 32, 0.18)',
        'card-hover': '0 24px 60px -14px rgba(11, 18, 32, 0.30)',
      },
      backgroundImage: {
        'steel-grid':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
