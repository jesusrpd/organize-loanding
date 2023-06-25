/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'purple': '#C891A2',
        'green': '#5AA291',
        'green-light': '#B5D2C8'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        'button': '4px 4px 20px 0px rgba(0, 0, 0, 0.15), -4px -4px 20px 0px rgba(0, 0, 0, 0.08) inset, -4px -4px 20px 0px rgba(0, 0, 0, 0.15)'
      },
      colors:{
        'purple': '#C891A2',
      }
    },
  },
  plugins: [],
}
