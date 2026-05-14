/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#030712',
        night: '#07111f',
        panel: '#0c1728',
        cyan: '#43d9ff',
        teal: '#32d6b0',
        violet: '#7c6cff',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(120, 226, 255, 0.12), 0 24px 80px rgba(9, 24, 54, 0.55)',
        card: '0 18px 65px rgba(2, 6, 23, 0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(rgba(67, 217, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(67, 217, 255, 0.08) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3.2s ease-in-out infinite',
        drift: 'drift 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(20px, -20px, 0) rotate(8deg)' },
        },
      },
    },
  },
  plugins: [],
};
