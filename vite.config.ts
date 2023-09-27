import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "iife", "umd"],
      name: "optionalClip",
    },
    rollupOptions: {},
    copyPublicDir: false,
    emptyOutDir: false,
  },
  plugins: [
    dts({
      outDir: "dist/types",
    }),
  ],
});
