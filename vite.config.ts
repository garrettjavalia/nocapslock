import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  server: {
    host: true,
  },
})
