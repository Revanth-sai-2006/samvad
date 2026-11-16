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
          DEFAULT: '#641B32',
          deep: '#641B32',
          royal: '#7A243D',
          dark: '#42101F',
          light: '#852342',
          surface: '#531629',
          subtle: '#330B17'
        },
        'kl-gold': {
          DEFAULT: '#C5A15A',
          premium: '#C5A15A',
          soft: '#E2CFA5',
          dark: '#A68440',
          light: '#F5EFE1',
          border: 'rgba(197, 161, 90, 0.35)',
          glow: 'rgba(197, 161, 90, 0.15)'
        },
        'kl-ivory': '#FAF8F3',
        'kl-warm-white': '#FFFFFF',
        'kl-light-beige': '#F2EDE4',
        'kl-charcoal': '#292329',
        'kl-muted-grey': '#77717A',
      },
      fontFamily: {
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-subtle': '0 4px 20px -2px rgba(197, 161, 90, 0.15)',
        'maroon-deep': '0 10px 30px -5px rgba(66, 16, 31, 0.35)',
        'institutional': '0 2px 12px rgba(41, 35, 41, 0.06), 0 1px 3px rgba(41, 35, 41, 0.04)',
        'premium': '0 8px 30px rgba(100, 27, 50, 0.08), 0 1px 3px rgba(197, 161, 90, 0.2)',
      },
      backgroundImage: {
        'maroon-gradient': 'linear-gradient(135deg, #42101F 0%, #641B32 50%, #7A243D 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E2CFA5 0%, #C5A15A 50%, #A68440 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F3 100%)',
      }
    },
  },
  plugins: [],
}
