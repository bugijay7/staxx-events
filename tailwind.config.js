import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7efe6',
        paper: '#fffaf5',
        plum: '#321c2b',
        coral: '#d88679',
        lavender: '#c9bfd6',
        sunshine: '#e7bd63',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [daisyui],
}
