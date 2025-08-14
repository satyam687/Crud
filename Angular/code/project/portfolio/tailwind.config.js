// tailwind.config.js
 
 module.exports = {
  theme: {
    extend: {
      animation: {
        'scroll-bg': 'scroll-bg 20s linear infinite',
      },
      keyframes: {
        'scroll-bg': {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '-100% 0' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
};