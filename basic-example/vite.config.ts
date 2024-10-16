import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Fullstack } from "fullstack-vite";
import { server } from "./src/server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Fullstack({
      server,
    }),
  ],
});
