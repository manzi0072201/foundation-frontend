/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'srms-ink': '#1c1b1f',
        'srms-ink-soft': '#4b4a4f',
        'srms-sand': '#f7f1e9',
        'srms-amber': '#f08a5d',
        'srms-forest': '#3a5a40',
        'srms-clay': '#d9c3a3'
      },
      boxShadow: {
        srms: '0 24px 60px rgba(20, 14, 10, 0.12)'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
}