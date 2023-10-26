// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@vite-pwa/nuxt'],

  tailwindcss :{
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.ts',
  },

  pwa : {
    manifest : {
      name : 'smkcoding',
      short_name : 'smkcoding',
      theme_color : '#fff',
      background_color : '#fff',
      display : 'standalone',
      orientation : 'portrait',
      scope : '/',
      start_url : '/',
      icons: [
        {
          src : 'images/icons/icons-144x144.png',
          sizes : '144x144',
          type: 'image/png',
        },
      ]
    },
    devOptions :{
      enabled: true,
    }
  }
})
