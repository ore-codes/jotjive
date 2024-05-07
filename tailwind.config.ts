import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/chunks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F23636',
        light: '#fcf4f4',
        dark: '#201F1E',
      },
      animation: {
        landingGradient: 'landingGradient 20s infinite',
      },
      backgroundImage: {
        'landing-gradient':
          'radial-gradient(circle, #ffffff 0%, #fcf4f4 15%, #dea5a5 100%)',
        'landing-gradient-dark':
          'radial-gradient(circle, rgba(47,66,79,1) 0%, rgba(48,49,50,1) 35%, rgba(0,0,0,1) 100%)',
      },
      keyframes: {
        landingGradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
          },
          '50%': {
            'background-size': '100% 100%',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
