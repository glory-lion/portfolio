import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves under /portfolio/; Vercel (which sets VERCEL=1 at build) serves from the root
  base: process.env.VERCEL ? "/" : "/portfolio/",

})
