import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { VitePluginRadar } from 'vite-plugin-radar'
import { googleAnalyticsMeasurementId } from './src/site'

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    VitePluginRadar({
      analytics: {
        id: googleAnalyticsMeasurementId,
        config: {
          send_page_view: false,
        },
      },
    }),
  ],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  server: {
    host: true,
  },
})
