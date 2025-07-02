import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.relative(__dirname, "./src"),
      },
    },
  };
});
