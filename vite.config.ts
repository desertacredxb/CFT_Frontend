import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Intercepts local requests to /api and forwards them to the real server
      '/api': {
        target: 'https://v2.mastertrader.co.in',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
