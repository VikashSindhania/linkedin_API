import { defineConfig } from 'wxt'
import react from '@vitejs/plugin-react'

export default defineConfig({
  manifest: {
    host_permissions: ['https://www.linkedin.com/*'],
  },
  vite: () => ({
    plugins: [react()],
  }),
})