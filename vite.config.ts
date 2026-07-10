import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // Catch any requests starting with /api
  //     '/api': {
  //       target: 'https://v2.mastertrader.co.in',
  //       changeOrigin: true,
  //       secure: false, // helps if there's any certificate mismatch on the target
  //     }
  //   }
  // }
});
