export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ["@nuxtjs/tailwindcss",'@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  }
})
