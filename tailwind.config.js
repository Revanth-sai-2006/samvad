/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kl-maroon': {
          DEFAULT: '#500D22',
          deep: '#500D22',      // Deep KL Maroon
          burgundy: '#380A19',  // Dark Burgundy
          dark: '#280612',      // Darkest Maroon Background
          royal: '#64132E',
          surface: '#3F0A1B',
          subtle: '#1F040D'
        },
        'kl-gold': {
          DEFAULT: '#C5A052',
          antique: '#C5A052',   // Antique Gold
          champagne: '#E3CCA0', // Champagne Gold
          soft: '#E3CCA0',
          dark: '#9E7E36',
          light: '#F5ECE0',
          border: 'rgba(197, 160, 82, 0.35)',
          glow: 'rgba(197, 160, 82, 0.15)'
        },
        'kl-ivory': '#FAF8F5',
        'kl-warm-white': '#FFFFFF',
        'kl-light-beige': '#F5EFE6',
        'kl-charcoal': '#1F1A1E',
        'kl-muted-grey': '#6B646D',
      },
      fontFamily: {
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-subtle': '0 4px 20px -2px rgba(197, 160, 82, 0.18)',
        'maroon-deep': '0 10px 30px -5px rgba(40, 6, 18, 0.45)',
        'institutional': '0 2px 12px rgba(31, 26, 30, 0.06), 0 1px 3px rgba(31, 26, 30, 0.04)',
        'premium': '0 8px 30px rgba(80, 13, 34, 0.08), 0 1px 3px rgba(197, 160, 82, 0.25)',
      },
      backgroundImage: {
        'maroon-gradient': 'linear-gradient(135deg, #280612 0%, #380A19 40%, #500D22 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E3CCA0 0%, #C5A052 50%, #9E7E36 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
      }
    },
  },
  plugins: [],
}
