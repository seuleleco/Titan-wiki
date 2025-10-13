// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@bootstrap-vue-next/nuxt"],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  devtools: { enabled: true },

  vite: {},
});
