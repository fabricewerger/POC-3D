module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        scaleIn: {
          from: { transform: 'scale(1.2)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
        slideIn: {
          from: { transform: 'translateY(5px)', opacity: 0 },
          to: { transform: 'translateY(0px)', opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '60%': { transform: 'rotate(215deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        jump: {
          '0%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        drop: {
          '0%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shake: {
          '0%': { transform: 'translateY(0px)' },
          '10%': { transform: 'translateY(-5px)' },
          '20%': { transform: 'translateX(-5px)' },
          '30%': { transform: 'translateY(5px)' },
          '40%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateX(-5px)' },
          '70%': { transform: 'translateY(5px)' },
          '80%': { transform: 'translateX(5px)' },
          '90%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        stretch: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        drawerLeftIn: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        drawerLeftOut: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        drawerRightIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        drawerRightOut: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        drawerDownIn: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        drawerDownOut: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' },
        },
      },
      animation: {
        fadein: 'fadeIn 150ms ease-in',
        fadeout: 'fadeOut 150ms ease-in',
        scalein: 'scaleIn 120ms ease-out',
        slidein: 'slideIn 130ms ease-in',
        wiggle: 'wiggle 150ms ease-in',
        rotate: 'rotate 650ms ease-in-out',
        jump: 'jump 650ms ease-in-out',
        drop: 'drop 650ms ease-in-out',
        shake: 'shake 650ms ease-in-out',
        stretch: 'stretch 650ms ease-in-out',
        radixDown: 'slideDown 300ms ease-out',
        radixUp: 'slideUp 300ms ease-out',
        drawerLeftIn: 'drawerLeftIn 150ms ease-out',
        drawerLeftOut: 'drawerLeftOut 150ms ease-out',
        drawerRightIn: 'drawerRightIn 150ms ease-out',
        drawerRightOut: 'drawerRightOut 150ms ease-out',
        drawerDownIn: 'drawerDownIn 150ms ease-out',
        drawerDownOut: 'drawerDownOut 150ms ease-out',
      },
    },
  },
  plugins: [],
}
