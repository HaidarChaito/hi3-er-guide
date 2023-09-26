/* eslint-disable @typescript-eslint/no-var-requires */
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
        efire: '#FF6969',
        elight: '#F2BE22',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        night: {
          ...require('daisyui/src/theming/themes')['[data-theme=night]'],
          'neutral-focus': '#F4F4F2',
          'base-300': '#F4F4F2',
        },
      },
      {
        dracula: {
          ...require('daisyui/src/theming/themes')['[data-theme=dracula]'],
          'neutral-focus': '#F4F4F2',
          'base-300': '#F4F4F2',
        },
      },
      {
        winter: {
          ...require('daisyui/src/theming/themes')['[data-theme=winter]'],
          'neutral-focus': '#F4F4F2',
          'base-300': '#0f1729',
        },
        aftereight: {
          primary: '#5AEDBC',
          secondary: '#828df8',
          accent: '#f471b5',
          neutral: '#0D7377',
          'base-100': '#0f1729',
          info: '#0ca6e9',
          success: '#B9ED92',
          warning: '#f4c152',
          error: '#fb6f84',
          'neutral-focus': '#F4F4F2',
          'base-300': '#14FFEC',
        },
        dimare: {
          primary: '#FFA1F5',
          secondary: '#828df8',
          accent: '#f471b5',
          neutral: '#313866',
          'base-100': '#0f1729',
          info: '#0ca6e9',
          success: '#B9ED92',
          warning: '#f4c152',
          error: '#fb6f84',
          'neutral-focus': '#F4F4F2',
          'base-300': '#FFA1F5',
        },
      },
    ],
  },
};
export default config;
