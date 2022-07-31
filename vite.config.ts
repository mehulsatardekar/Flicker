import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import viteCompression from "vite-plugin-compression";

import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2500,
  },
  define: {
    "process.env": {},
  },
  plugins: [react()],
});
