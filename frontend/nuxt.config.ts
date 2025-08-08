// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  css: ["@/assets/css/reset.css", "@/assets/css/tailwind.css"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@pinia/nuxt", "@tailwindcss/postcss"],
});
