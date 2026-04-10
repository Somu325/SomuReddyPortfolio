import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    // Optimize for production with esbuild (faster, no extra dependencies)
    minify: "esbuild",
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
        // Optimize chunk file names
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
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
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // Enable minification
    cssMinify: true,
    // Optimize dependencies
    reportCompressedSize: false, // Faster builds
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  // Performance optimizations
  esbuild: {
    drop: ["console", "debugger"], // Remove console.log in production
    legalComments: "none",
  },
});