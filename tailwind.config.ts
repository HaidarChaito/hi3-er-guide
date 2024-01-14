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
        cupcake: {
          ...require('daisyui/src/theming/themes')['cupcake'],
          'neutral-content': '#EEEEEE',
          'base-300': '#291334',
        },
      },
      {
        sunset: {
          ...require('daisyui/src/theming/themes')['sunset'],
          'neutral-content': '#F4F4F2',
          'base-300': '#FF865B',
        },
      },
      {
        night: {
          ...require('daisyui/src/theming/themes')['night'],
          'neutral-content': '#F4F4F2',
          'base-300': '#08D9D6',
        },
      },
      {
        coffee: {
          ...require('daisyui/src/theming/themes')['coffee'],
          'neutral-content': '#F4F4F2',
          'base-300': '#DB924B',
        },
      },
      {
        forest: {
          ...require('daisyui/src/theming/themes')['forest'],
          'neutral-content': '#F4F4F2',
          'base-300': '#1EB854',
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
          'neutral-content': '#F4F4F2',
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
          'neutral-content': '#F4F4F2',
          'base-300': '#FFA1F5',
        },
      },
    ],
  },
};
export default config;
