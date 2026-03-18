/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a192f', // Navy Blue
          light: '#112240',
          dark: '#020c1b',
        },
        secondary: {
          DEFAULT: '#8892b0', // Light Blue/Gray
          light: '#a8b2d1',
        },
        accent: {
          DEFAULT: '#64ffda', // Light Green
          hover: '#4cd6b8',
        },
        gold: {
          DEFAULT: '#d4af37', // Gold accents
          light: '#f3e5ab',
          dark: '#aa8c2c',
        },
        background: {
          DEFAULT: '#ffffff',
          alt: '#f8fafc', // Very light gray-blue for alternate sections
        },
        text: {
          main: '#334155', // Slate 700 for better readability
          light: '#64748b', // Slate 500
          dark: '#0f172a', // Slate 900 for headings
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
