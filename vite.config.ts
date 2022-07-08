import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist/',
    emptyOutDir: true
  },
  resolve: {
    alias: [
      {
        find: '@', replacement: path.resolve(__dirname, './src')
      }
    ]
  }
})