/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(100%)', opacity: '0' }
        },
        glitch: {
          '0%, 100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transform: 'translate(0)',
            textShadow: '0 0 0 rgba(0, 255, 0, 0)'
          },
          '20%': {
            clipPath: 'polygon(0 15%, 100% 15%, 100% 85%, 0 85%)',
            transform: 'translate(-2px)',
            textShadow: '2px 0 1px rgba(0, 255, 0, 0.7), -2px 0 1px rgba(255, 0, 0, 0.7)'
          },
          '40%': {
            clipPath: 'polygon(0 10%, 100% 10%, 100% 90%, 0 90%)',
            transform: 'translate(2px)',
            textShadow: '-2px 0 1px rgba(0, 255, 0, 0.7), 2px 0 1px rgba(255, 0, 0, 0.7)'
          },
          '60%': {
            clipPath: 'polygon(0 20%, 100% 20%, 100% 80%, 0 80%)',
            transform: 'translate(-2px)',
            textShadow: '2px 0 1px rgba(0, 255, 0, 0.7), -2px 0 1px rgba(255, 0, 0, 0.7)'
          },
          '80%': {
            clipPath: 'polygon(0 5%, 100% 5%, 100% 95%, 0 95%)',
            transform: 'translate(2px)',
            textShadow: '-2px 0 1px rgba(0, 255, 0, 0.7), 2px 0 1px rgba(255, 0, 0, 0.7)'
          }
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(0, 255, 0, 0.7)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.7)'
          }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        scanline: 'scanline 4s linear infinite',
        glitch: 'glitch 2s infinite',
        pulse: 'pulse 2s infinite',
        blink: 'blink 1s steps(1) infinite'
      }
    },
  },
  plugins: [],
}; 