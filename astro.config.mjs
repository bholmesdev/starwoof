import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Starwoof',
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
