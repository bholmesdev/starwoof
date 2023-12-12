import { defineConfig } from "astro/config";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlight from "@astrojs/starlight";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/static";
const env = loadEnv("", process.cwd(), "ALGOLIA");

// https://astro.build/config
export default defineConfig({
  site: "https://starwoof.vercel.app",
  integrations: [
    starlight({
      title: "Starwoof",
      social: {
        github: "https://github.com/bholmesdev/starwoof",
      },
      tableOfContents: false,
      plugins: [
        starlightDocSearch({
          appId: env.ALGOLIA_APP_ID,
          apiKey: env.ALGOLIA_API_KEY,
          indexName: env.ALGOLIA_INDEX_NAME,
        }),
      ],
      customCss: ["@fontsource/atkinson-hyperlegible", "/src/fonts.css"],
      locales: {
        root: {
          lang: "en",
          label: "English",
        },
        es: {
          lang: "es",
          label: "Español",
        },
      },
      sidebar: [
        {
          label: "Pets",
          autogenerate: {
            directory: "pets",
          },
        },
      ],
    }),
  ],
  adapter: vercel(),
});
