// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@ant-design-vue/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  devtools: { enabled: true },
  features: {
    inlineStyles: false,
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^(ant-design-vue)(?!\/(es|dist))/,
          replacement: 'ant-design-vue/es',
        },
        {
          find: /^ant-design-vue\/dist$/,
          replacement: 'ant-design-vue/dist',
        },
        {
          find: /^ant-design-vue\/es$/,
          replacement: 'ant-design-vue/es',
        },
      ],
    },
  },
  eslint: {
    config: {
      typescript: true,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
})
