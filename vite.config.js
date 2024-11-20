import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/weatherapp/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Assets folder
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // This generates hashed asset filenames
      }
    }
  }
})

