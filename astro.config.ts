// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ma-6zt.pages.dev/",
  integrations: [react(), compress()],
   adapter: cloudflare({ 
     imageService: "cloudflare"
   }),
  compressHTML: true,
  output: "server",
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["node:path"],
    },
    build: {
      cssCodeSplit: false, // ← Changed to false to bundle all CSS
      minify: "esbuild",
      assetsInlineLimit: 4096, // ← Inline small assets
      rollupOptions: {
        output: {
          inlineDynamicImports: true, // ← Inline everything
        }
      }
    },
    esbuild: {
      target: 'es2022',
      minifyIdentifiers: false,
      minifySyntax: true,
      minifyWhitespace: true,
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  }
});