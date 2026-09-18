import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Direct Third-Party API calls to remote server
      "/api/apiUserRegister": {
        target: "https://v2.mastertrader.co.in",
        changeOrigin: true,
        secure: false,
      },
      // Direct internal lead management to local backend
      "/api/leads": {
        target: "http://localhost:8000", // Ensure your Express server is running on port 5000
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
