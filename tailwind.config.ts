import { Config } from 'tailwindcss'
const plugin = require("tailwindcss/plugin");

export default <Config>{
    darkMode: 'class',
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

