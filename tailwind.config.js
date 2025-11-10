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
        inter: ['var(--font-inter)', 'sans-serif'],
        noto: ['var(--font-noto)', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

