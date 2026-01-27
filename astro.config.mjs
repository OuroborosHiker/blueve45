import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tudominio.com", // Cambia por tu URL real
  integrations: [react(), svelte(), vue(), mdx(), sitemap()],
  adapter: node({
    mode: "static",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
