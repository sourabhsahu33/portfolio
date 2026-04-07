/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", 'monospace'],
        sans: ["'Syne'", 'sans-serif'],
      },
      colors: {
        'theme-bg': '#0c0c0e',
        'theme-surface': '#111114',
        'theme-surface2': '#18181c',
        'theme-border': '#222228',
        'theme-accent': '#00e5a0',
        'theme-accent2': '#5b8fff',
        'theme-muted': '#555566',
        'theme-text': '#c8cad8',
        'theme-bright': '#eeeef4',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
    },
  },
  plugins: [],
}
