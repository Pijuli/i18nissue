import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/devtools', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Spanish',
        file: 'es.json',
      },
    ],
  },
});
