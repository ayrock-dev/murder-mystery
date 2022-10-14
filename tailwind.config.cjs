/** @type {import('tailwindcss').Config} */

const color = require('color');
const Coolors = require('coolors-io');
const defaultTheme = require('tailwindcss/defaultTheme');

const PALETTE_URL =
  'https://coolors.co/palette/606c38-283618-fefae0-dda15e-bc6c25';

function buildPalette(paletteUrl = PALETTE_URL) {
  const palette = {};
  const byLuminosity = (a, b) => color(b).luminosity() - color(a).luminosity();
  const colors = Coolors.parse(paletteUrl).sort(byLuminosity);
  ['light', 'primary', 'secondary', 'accent', 'dark'].forEach((key, i) => {
    palette[key] = colors[i];
  });
  return palette;
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Abril Fatface', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        ...buildPalette(
          'https://coolors.co/541388-d90368-f1e9da-2e294e-ffd400'
        ),
      },
    },
  },
  plugins: [],
};
