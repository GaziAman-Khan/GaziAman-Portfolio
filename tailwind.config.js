/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F1E8',
          50: '#FBF9F4',
          100: '#F5F1E8',
          200: '#EDE7D6',
        },
        charcoal: {
          DEFAULT: '#202020',
          50: '#6B6B6B',
          100: '#4A4A4A',
          200: '#2E2E2E',
          300: '#202020',
        },
        burgundy: {
          DEFAULT: '#6B2638',
          50: '#8B3848',
          100: '#6B2638',
          200: '#5A1F2E',
          300: '#4A1824',
        },
        beige: {
          DEFAULT: '#D8CFC0',
          50: '#E8E2D5',
          100: '#D8CFC0',
          200: '#C4BAA8',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'fluid-hero': 'clamp(2.75rem, 9vw, 8rem)',
        'fluid-section': 'clamp(2rem, 5vw, 4rem)',
        'fluid-sub': 'clamp(1.25rem, 2.5vw, 2rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
