import { Config } from 'tailwindcss'

export default <Config>{
    content: [
        'components/**/*.{vue,ts,tsx}',
        'content/**/*.md',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.ts',
        'plugins/**/*.ts',
        'app.vue'
    ],
}

module.exports = {
  darkMode: 'class',
}

