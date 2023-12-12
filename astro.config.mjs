import { defineConfig } from "astro/config";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlight from "@astrojs/starlight";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "ALGOLIA");

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Starwoof",
      tableOfContents: false,
      plugins: [
        starlightDocSearch({
          appId: env.ALGOLIA_APP_ID,
          apiKey: env.ALGOLIA_API_KEY,
          indexName: env.ALGOLIA_INDEX_NAME,
        }),
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
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
          autogenerate: { directory: "pets" },
        },
      ],
    }),
  ],
});
