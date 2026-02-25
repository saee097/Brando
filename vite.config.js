

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
      tailwindcss(),
    react()],
  server: {
    host: true,       // ← MOST IMPORTANT
    port: 5181,       // ← آپ کا port (auto change بھی ہو سکتا ہے)
    strictPort: false,
  },
})
