// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://catgo.xoproduction.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
});
