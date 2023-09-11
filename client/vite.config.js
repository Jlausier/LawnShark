import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        changeOrigin: false,
        secure: false,
      },
    },
  },
});
