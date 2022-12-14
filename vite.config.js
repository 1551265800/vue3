import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy: {
      '^/api': {
       target: 'http://iwenwiki.com', // 后端服务实际地址
       changeOrigin: true, //开启代理
       rewrite: (path) => path.replace(/^\/api/, '')
       }
      }
  }
})
