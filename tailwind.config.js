/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts with Material
  },
};

