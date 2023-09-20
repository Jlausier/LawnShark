import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/graphql": {
        target: `http://localhost:${process.env.PORT || 3001}`,
        changeOrigin: false,
        secure: false,
      },
    },
  },
});
