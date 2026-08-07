import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://matching50s.pages.dev',
  output: "hybrid",
  adapter: cloudflare()
});