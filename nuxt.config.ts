// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  app: {
    baseURL: '/WeatherWidgetVueJS/', 
  },
  runtimeConfig: {
    public: {
      weatherApiKey: process.env.WEATHER_API_KEY,
      weatherApiBaseUrl: 'https://api.weatherapi.com/v1',
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