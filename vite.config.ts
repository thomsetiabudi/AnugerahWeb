import { defineConfig } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

let app = resolve(__dirname, "index.html");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    watch: {},
    rollupOptions: {
      input: {
        main: app,
      },
    },
  },
});
