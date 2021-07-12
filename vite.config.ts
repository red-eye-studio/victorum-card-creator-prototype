import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: './src',
  base: './',
  publicDir: '../public',
  build: {
    outDir: '../build',
    assetsDir: '.',
    emptyOutDir: true
  },
  plugins: [vue()]
})