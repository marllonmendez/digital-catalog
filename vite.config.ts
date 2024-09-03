import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [
    react(),
    {
      name: 'custom-start-message',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          console.log('Starter project is running 🚀')
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
