/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1877F2',
          cyan: '#00D6FF',
          dark: '#0F5FD7',
        },
        accent: {
          green: '#00C853',
          orange: '#FF6B35',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'accent': ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(24, 119, 242, 0.3)'
          },
          '50%': { 
            'box-shadow': '0 0 30px rgba(24, 119, 242, 0.6)'
          },
        },
        slideInUp: {
          'from': { 
            transform: 'translateY(30px)',
            opacity: '0'
          },
          'to': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        fadeInScale: {
          'from': { 
            transform: 'scale(0.9)',
            opacity: '0'
          },
          'to': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1877F2 0%, #00D6FF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00C853 0%, #00D6FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(24, 119, 242, 0.3)',
        'glow-hover': '0 0 30px rgba(24, 119, 242, 0.6)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [],
}