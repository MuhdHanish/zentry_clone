/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "zentry": ["zentry", "sans-serif"],
        "general": ["general", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "circluar-web": ["circluar-web", "sans-serif"],
      }
    },
  },
  plugins: [],
}

