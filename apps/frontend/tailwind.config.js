const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-Montserrat)'],
        serif: ['var(--font-Montserrat)'],
        mono: ['var(--font-Montserrat)'],
        display: ['var(--font-Montserrat)'],
        body: ['var(--font-Montserrat)'],
      },
    },
  },
  plugins: [],
};
