import { defineConfig } from 'vite'
/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ]
})
