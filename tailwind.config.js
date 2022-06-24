const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'content/**/*.md',
        'layouts/**/*.html',
        'assets/**/*.{js,css}',
    ],
    theme: {
        screens: {
            'xs': '360px',
            ...defaultTheme.screens,
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
