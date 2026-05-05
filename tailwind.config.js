/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        // === Paleta złota ===
        gold: {
          DEFAULT: '#D4A76A',
          deep:    '#B8915A',
          light:   '#E0BE8A',
        },
        // === Tła i powierzchnie ===
        'warm-white':  '#FFFBF5',
        cream:         '#FDF8F2',
        'beige-light': '#F5EDE3',
        sand:          '#EAD9C8',
        'warm-sand':   '#E0CDB8',
        // === Akcenty ===
        'rose-beige':  '#C9A898',
        bronze:        '#A67C5B',
        // === Teksty ===
        brown: {
          deep:  '#3D2B1F',
          warm:  '#6B5244',
          muted: '#8C7B6B',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Lora', 'Georgia', 'serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
