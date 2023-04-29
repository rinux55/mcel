// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-chatgpt'],
    chatgpt: {
      apiKey: process.env.OPENAI_API_KEY,
    },
})
