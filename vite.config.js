import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep CRA's output folder so vercel.json's distDir still matches
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
