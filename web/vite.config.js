import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow importing legacy CSS/JS/fonts from the repo root
      allow: [fileURLToPath(new URL('..', import.meta.url))],
    },
  },
})
