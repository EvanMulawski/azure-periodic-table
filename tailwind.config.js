/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-red': '#ff0000', // Replace with your desired red color
        'theme-gray': '#888888', // Replace with your desired gray color
        'theme-blue': '#0000ff', // Replace with your desired blue color
        'theme-green': '#00ff00', // Replace with your desired green color
        'theme-yellow': '#ffff00', // Replace with your desired yellow color
        'theme-orange': '#ff8000', // Replace with your desired orange color
        'theme-purple': '#8000ff', // Replace with your desired purple color
        'theme-pink': '#ff00ff', // Replace with your desired pink color
      },
    },
  },
  plugins: [],
};
