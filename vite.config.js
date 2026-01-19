import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // O el plugin que estés usando

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'safer-springer-river-inform.trycloudflare.com'
    ]
  }
})
