import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'palistory': {
          'black': '#0B0B0B',
          'beige': '#E8DDCF',
          'red': '#C62828',
          'olive': '#4B5D3A',
          'gold': '#C8A96B',
          'white': '#FAFAFA',
          'dark-gray': '#1A1A1A',
          'charcoal': '#2A2A2A',
        },
      },
      fontFamily: {
        'display': ['Clash Display', 'Neue Montreal', 'sans-serif'],
        'body': ['Inter', 'Satoshi', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(200, 169, 107, 0.3)',
        'glow-red': '0 0 30px rgba(198, 40, 40, 0.2)',
        'inset-glow': 'inset 0 0 20px rgba(200, 169, 107, 0.1)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'count': 'count 2.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(200, 169, 107, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 30px rgba(200, 169, 107, 0.5)' },
        },
        count: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
