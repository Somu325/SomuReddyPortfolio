import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize for production with esbuild (faster, no extra dependencies)
    minify: "esbuild",
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps disabled for smaller build
    sourcemap: false,
    // Target modern browsers for smaller output
    target: "es2015",
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
