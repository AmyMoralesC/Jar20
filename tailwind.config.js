/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ─── Design tokens ───────────────────────────────────────────
      colors: {
        // Warm wood palette
        wood: {
          darkest: '#1a0d04',
          dark:    '#2e1a0e',
          mid:     '#5c3a1e',
          light:   '#8b5e3c',
          pale:    '#c4935a',
        },
        // Accent metals
        gold:   '#d4af37',
        silver: '#a8a9ad',
        // Parchment text
        parchment: '#f5e6c8',
        // Atmospheric tavern dark
        tavern: {
          dark: '#0d0604',
        },
        // Decorative ribbon
        ribbon: '#8b1a1a',
        // D20 advantage / disadvantage
        adv: '#3a9e3a',
        dis: '#9e2020',
      },

      fontFamily: {
        // Phase 1: system fallback. Phase 5: replace with downloaded fonts.
        display: ['"Cinzel"', '"Palatino Linotype"', 'serif'],
        body:    ['"Lato"', 'system-ui', 'sans-serif'],
      },

      // ─── Animations ──────────────────────────────────────────────
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(-50%, -50%) rotate(-2deg)' },
          '25%':       { transform: 'translate(-52%, -48%) rotate(1deg)' },
          '75%':       { transform: 'translate(-48%, -52%) rotate(-1deg)' },
        },
        floatOrb: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        ribbonWave: {
          '0%':   { transform: 'scaleX(1)' },
          '50%':  { transform: 'scaleX(1.5)' },
          '100%': { transform: 'scaleX(1)' },
        },
        resultPop: {
          '0%':   { opacity: '0', transform: 'scale(0.8)' },
          '60%':  { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%':      { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        wiggle:      'wiggle 0.6s ease-in-out infinite',
        floatOrb:    'floatOrb 2s ease-in-out infinite',
        ribbonWave:  'ribbonWave 0.4s ease-in-out',
        resultPop:   'resultPop 0.4s ease-out forwards',
        sparkle:     'sparkle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
