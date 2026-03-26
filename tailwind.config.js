/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-bg': '#E8EDF6',
                'light-card': '#FFFFFF',
                'light-secondary': '#F0F4FA',
                'accent-blue': '#2563EB',
                'accent-black': '#1a1a1a',
                'text-primary': '#1a1a1a',
                'text-secondary': '#6b7280',
                'text-muted': '#9ca3af',
                'sticky-yellow': '#FEF08A',
                'sticky-yellow-dark': '#FACC15',
                'folder-blue': '#93C5FD',
                'folder-pink': '#F9A8D4',
                'pastel-purple': '#DDD6FE',
                'pastel-blue': '#BFDBFE',
                'pastel-pink': '#FBCFE8',
                'pastel-green': '#BBF7D0',
                'pastel-orange': '#FED7AA',
            },
            fontFamily: {
                'serif': ['Newsreader', 'Georgia', 'serif'],
                'sans': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
        },
    },
    plugins: [],
}
