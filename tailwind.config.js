/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          900: '#2a0614',
          700: '#5a0f2e',
          DEFAULT: '#2a0614',
        },
        gold: {
          500: '#c9a24b',
          300: '#e6cf8f',
          DEFAULT: '#c9a24b',
        },
        ivory: '#f7f1e3',
        ink: '#1c1216',
        'text-muted': '#d9c9b8',
        // Backward-compatibility aliases
        'kl-maroon': {
          DEFAULT: '#5a0f2e',
          deep: '#2a0614',
          burgundy: '#3a081c',
          dark: '#2a0614',
          royal: '#5a0f2e',
          surface: '#3a081c',
          subtle: '#1f040d'
        },
        'kl-gold': {
          DEFAULT: '#c9a24b',
          antique: '#c9a24b',
          champagne: '#e6cf8f',
          soft: '#e6cf8f',
          dark: '#a88338',
          light: '#f7f1e3',
          border: 'rgba(201, 162, 75, 0.3)',
          glow: 'rgba(201, 162, 75, 0.15)'
        },
        'kl-ivory': '#f7f1e3',
        'kl-warm-white': '#ffffff',
        'kl-light-beige': '#f7f1e3',
        'kl-charcoal': '#1c1216',
        'kl-muted-grey': '#5c4e52',
      },
      fontFamily: {
        logo: ['"Cinzel"', 'Georgia', 'serif'],
        academic: ['"Cinzel"', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', '"Noto Sans Telugu"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Inter"', '"Noto Sans Telugu"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-subtle': '0 4px 20px -2px rgba(201, 162, 75, 0.2)',
        'maroon-deep': '0 10px 30px -5px rgba(42, 6, 20, 0.45)',
        'domain': '0 8px 24px -4px rgba(201, 162, 75, 0.15)',
        'club-hover': '0 12px 28px -6px rgba(0, 0, 0, 0.35), 0 0 16px rgba(201, 162, 75, 0.15)',
      }
    },
  },
  plugins: [],
}
