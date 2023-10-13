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
      "body": "var(--body-font)",
    },
    extend: {
      colors: {
        "primary": "#337D5E",
        "primary-light": "#DBEFE7",
        "foreground-grey": "#8C8D8D",
        "background-grey": "#F3F3F3"
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    require('@tailwindcss/forms')
  ],
}

