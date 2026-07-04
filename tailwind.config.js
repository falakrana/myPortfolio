/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark design system tokens
                'bg':           'hsl(var(--bg))',
                'surface':      'hsl(var(--surface))',
                'text-primary': 'hsl(var(--text))',
                'muted':        'hsl(var(--muted))',
                'stroke':       'hsl(var(--stroke))',
                // Keep old tokens for any references
                'accent-blue':  '#89AACC',
            },
            fontFamily: {
                'body':    ['Inter', 'sans-serif'],
                'display': ['"Instrument Serif"', 'serif'],
                // Keep old keys so nothing breaks
                'serif':   ['"Instrument Serif"', 'Georgia', 'serif'],
                'sans':    ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'xl':  '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            animation: {
                'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
                'role-fade-in': 'role-fade-in 0.4s ease-out',
                'gradient-shift': 'gradient-shift 6s ease infinite',
            },
            keyframes: {
                'scroll-down': {
                    '0%':   { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(200%)' },
                },
                'role-fade-in': {
                    '0%':   { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%':      { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
