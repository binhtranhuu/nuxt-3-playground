// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/styles.css"],
  runtimeConfig: {
    runtimeConfig: {
      // Private config that is only available on the server
      apiSecret: "123",
      // Config within public will be also exposed to the client
      public: {
        apiBase: "/api",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "es-ES",
        iso: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "vi-Vn",
        iso: "vi-Vn",
        name: "Việt Nam",
        file: "vi-Vn.json",
      },
    ],
    defaultLocale: "vi-Vn",
    vueI18n: "./i18n.config.ts",
  },
});
