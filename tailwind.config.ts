import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  safelist: [
    'border-elight',
    'border-eice',
    'border-ephys',
    'border-efire',
    'border-primary',
    'border-b-elight',
    'border-b-eice',
    'border-b-ephys',
    'border-b-efire',
    'border-b-primary',
    'text-elight',
    'text-eice',
    'text-ephys',
    'text-efire',
    'text-primary',
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ephys: '#EFB495',
        eice: '#97FFF4',
        efire: '#ED2B2A',
        elight: '#F2BE22',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula'],
  },
};
export default config;
