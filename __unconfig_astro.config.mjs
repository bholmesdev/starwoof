
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
const __unconfig_default =  defineConfig({
  integrations: [
    starlight({
      title: 'Starwoof',
      tableOfContents: false,
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      customCss: [
        '@fontsource/atkinson-hyperlegible',
        '/src/fonts.css'
      ],
      locales: {
        root: {
          lang: 'en',
          label: 'English',
        },
        es: {
          lang: 'es',
          label: 'Español',
        }
      },
      sidebar: [
        {
          label: 'Pets',
          autogenerate: { directory: 'pets' },
        }
      ]
    }),
  ],
});

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;