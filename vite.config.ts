import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Situs dilayani dari root (repo: anggiwdntr29.github.io),
// jadi base tetap '/'.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
