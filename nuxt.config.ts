import { repositoryName } from './slicemachine.config.json'
import svgLoader from "vite-svg-loader";
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/prelude";',
        },
      },
    },
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
  alias: {
    '@': path.resolve(__dirname, './'),
    '@store': path.resolve(__dirname, './core/store'),
    '@components': path.resolve(__dirname, './components'),
  },
  devServer: {},
  app: {
    head: {
      title: 'Car Choice',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico', media: '(prefers-color-scheme: dark)' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
      ],
      script: [
        { src: `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_KEY}` },
        { src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=car-choice', async: true, defer: true }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    recaptcha_secret: process.env.RECAPTCHA_SECRET,
    car_query_url: 'https://www.carqueryapi.com/api/0.3',
    public: {
      maps_key: process.env.GOOGLE_API_KEY,
      recaptcha_key: process.env.RECAPTCHA_KEY,
    }
  },

  modules: [
    '@nuxtjs/prismic',
    '@pinia/nuxt'
  ],

  prismic: {
    endpoint: repositoryName,
    preview: '/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
        {
          type: 'service_page',
          path: '/services/:uid',
        }
      ]
    }
  },
  devtools: {
    enabled: true,
  },
})
