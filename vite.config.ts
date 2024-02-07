import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jest from 'vite-plugin-jest'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jest],
})
