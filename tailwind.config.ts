import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:  {
        'green-main': '#00FFC4;',
        'green-main-hover': '#00AF78;',
        'white-main' :'#F9FAFF',
        'white-main-light' :'#FFF',
        'gray-main': '#1A1B23',
        'gray-main-icon': '#C6C6C6',
        'background-main-icon': '#182530',
        'gray-main-light': '#23242F',
      },
      backgroundImage: {
        'green-main-gradient': 'linear-gradient(184deg, #00FFC4  0%, #02C989 100%);',
        'green-main-gradient-hover': 'linear-gradient(180deg, #2FFDCE 0%, #00FFC4  100%)',
      },
      boxShadow: {
        'green-main-boxShadow': '5px 5px 19px 0px rgba(0, 254.2159194946289, 172.29911446264663, 0.18)',
        'btn-green-main-boxShadow': '6px -6px 13px 0px rgba(16.844670113496253, 92.58907909998238, 95.79545974731445, 0.18)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '2rem',
          xxl: '2rem',
        },
        screens: {
          // xs: '100%',
          // sm: '540px',
          // md: '720px',
          // lg: '960px',
          xl: '1140px',
          xxl: '1320px',
        },
      },
    },
  },
  plugins: [],
}
export default config
