/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#071a13',
          900: '#0c281e',       // Deepest luxury forest green
          800: '#113a2d',       // Primary brand forest
          700: '#194d3d',
          600: '#236350',
          500: '#327d66',
          100: '#e4eee9',
          50: '#f2f7f4',
        },
        lime: {
          DEFAULT: '#cbe346',    // Signature Chartreuse / Pasture Lime
          hover: '#b5cc36',
          pale: '#eef5c4',
          subtle: '#f5fad6',
        },
        stone: {
          canvas: '#f4f1ea',     // Professional outer frame canvas
          card: '#ffffff',
          surface: '#faf8f2',
          border: '#e4dfd3',
          divider: '#ede8dd',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(12, 40, 30, 0.08), 0 4px 12px -4px rgba(12, 40, 30, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(12, 40, 30, 0.16), 0 8px 20px -6px rgba(12, 40, 30, 0.08)',
        'billboard': '0 25px 60px -20px rgba(12, 40, 30, 0.22)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 20px 8px rgba(37, 211, 102, 0.25)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' }
        }
      },
      animation: {
        'float': 'float 3.5s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeReverse 28s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite',
        'shine': 'shine 2.5s infinite',
      }
    },
  },
  plugins: [],
}
