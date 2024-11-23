import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

config();

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": {
        target:
          process.env.VITE_MODE === "production"
            ? process.env.VITE_PROD_SERVER
            : process.env.VITE_DEV_SERVER,
      },

      "/admin": {
        target: "http://localhost:8081/",
      },
    },
  },
});
