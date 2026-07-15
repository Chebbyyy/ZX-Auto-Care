import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'three'
            if (id.includes('ogl')) return 'ogl'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('framer-motion')) return 'motion'
            if (
              id.includes('react-dom') ||
              id.includes('react-router') ||
              id.includes('node_modules/react/')
            ) {
              return 'react-vendor'
            }
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['three'],
  },
  server: {
    fs: {
      // Allow importing legacy CSS/JS/fonts from the repo root
      allow: [fileURLToPath(new URL('..', import.meta.url))],
    },
  },
})
