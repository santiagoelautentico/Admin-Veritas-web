import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // o 'hybrid' si solo algunas páginas son SSR
  adapter: node({
    mode: 'standalone'
  }),
});