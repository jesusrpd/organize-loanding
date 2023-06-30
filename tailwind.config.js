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
        'tablet': "url('/bg-img/bg-tablet.png')"
      },
      boxShadow:{
        'button': '4px 4px 20px 0px rgba(0, 0, 0, 0.15), -4px -4px 20px 0px rgba(0, 0, 0, 0.08) inset, -4px -4px 20px 0px rgba(0, 0, 0, 0.15)'
      },
      colors:{
        'purple': '#C891A2',
        'green': '#5AA291',
        'text': '#425F55'
      }
    },
  },
  plugins: [],
}
