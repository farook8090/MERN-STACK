/** @type {import('tailwindcss').Config} */
const plugin = require("tw-elements/plugin.cjs");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin],
};
