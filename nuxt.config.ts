// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      weatherApiKey: process.env.WEATHER_API_KEY,
      weatherApiBaseUrl: process.env.WEATHER_API_URL
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ]
})