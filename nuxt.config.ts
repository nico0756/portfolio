// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nicolas Cecco | Full Stack Developer',
      htmlAttrs: {
        lang: 'en',
      },
      //to fix android mobile bug: page height is bigger at page load
      viewport: 'width=device-width, initial-scale=1.0, interactive-widget=resizes-content',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' },
        { rel: 'icon', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'description', content: 'Full stack developer based in Italy. Check out my work and contact me!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Nicolas Cecco | Full Stack Developer' },
      ],
      script: [{
        src: "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
      }]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  compatibilityDate: '2025-05-20',
  devtools: { enabled: false },
  modules: ['@nuxt/icon']
})