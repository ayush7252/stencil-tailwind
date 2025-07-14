/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,html}",
    "./src/index.html"
  ],
  theme: {
    extend: {},
  },
  // Important: Add this to ensure styles are properly scoped
  corePlugins: {
    preflight: false, // Disable preflight to prevent style conflicts
  },
  plugins: [],
}