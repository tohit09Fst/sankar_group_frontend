/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#05070B',
          900: '#07090F',
          850: '#0B0F17',
          800: '#101522',
          700: '#182032',
          600: '#26344F',
        },
        sentinel: {
          red: '#EF4444',
          glow: '#FF2A4D',
          darkRed: '#8B0000',
          crimson: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Courier New', 'monospace'],
        cyber: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-red': '0 0 25px -5px rgba(239, 68, 68, 0.5), 0 0 10px -2px rgba(239, 68, 68, 0.4)',
        'neon-red-lg': '0 0 45px -5px rgba(239, 68, 68, 0.6), 0 0 20px -2px rgba(239, 68, 68, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(239, 68, 68, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'radar': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'spin-slow': 'spin-slow 25s linear infinite',
      }
    },
  },
  plugins: [],
}

