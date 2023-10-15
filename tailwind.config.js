/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    colors: {
      // Configure your color palette here
      background: '#282938',
      red: '#ff0000',
      barColor: '#474E68',
      gray: {
        400: '#343651',
      },
      blue: {
        200: '#00B2FF'
      },
      pink: {
        500: '#DC1569'
      },
      green: {
        300: '#15DC4D'
      }
    },
    extend: {},
  },
  plugins: [],
}