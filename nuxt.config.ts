export default defineNuxtConfig({
  extends: "content-wind",
  modules: ["@nuxtjs/sitemap", "@nuxthq/studio"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "sitemap.xml"],
      ignore: ["/tak", "/konfiguration", "/checkout"],
    },
  },
  site: {
    url: "https://ferryops.dev/",
  },
  sitemap: {
    sources: ["/content/"],
  },
});
