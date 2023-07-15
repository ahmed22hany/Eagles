/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#24738C',
        'white': '#FFFFFF',
        'secondary': '#EEFBF4',
        'footer': '#24738C',
      },
      fontFamily: {
        cairo: 'cairo',
      },
      dropShadow: {
        'shadow': '0 4px 4px 0 rgba(0, 0, 0, .25)',
      },
      screens: {
        'xs': '400px',
      }
    },
  },
  plugins: [],
}
