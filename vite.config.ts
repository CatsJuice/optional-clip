import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'iife', 'umd'],
      name: 'optional-clip',
    },
    copyPublicDir: false,
    emptyOutDir: false,
  },
})
