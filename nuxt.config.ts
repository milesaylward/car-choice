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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
    '@nuxtjs/prismic',
    '@pinia/nuxt'
  ],

  prismic: {
    endpoint: repositoryName,
    preview: '/api/preview',
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
      ]
    }
  },
  devtools: {
    enabled: true,
  },
})
