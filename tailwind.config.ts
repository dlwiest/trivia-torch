import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/@dlwiest/taila/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate')
  ],
}
export default config
