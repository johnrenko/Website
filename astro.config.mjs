import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnrenko.github.io',
  // If deploying to a repo that is not <user>.github.io, uncomment and set base:
  // base: '/<repo-name>',
  image: {
    domains: []
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwind()]
  }
});


