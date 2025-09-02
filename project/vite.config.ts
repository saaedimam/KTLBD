import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Expose the dev server on all network interfaces.
    // This enables access from external devices and cloud previews (Replit/Vercel).
    host: true,

    // Keep the default dev port; CLI flags (e.g. `--port 5174`) will override this in CI.
    port: 5173,
    strictPort: true,

    // Allow known preview hostnames to pass Vite's host check when tunneling or in cloud IDEs.
    // Leading dots mean "any subdomain of" (e.g., .vercel.app matches *.vercel.app).
    // Set to `true` to disable checks entirely, but we prefer an allowlist for safety.
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.vercel.app',
      '.repl.co',
      '.id.repl.co',
    ],
  },
  // Set base to root for Vercel deployment
  base: '/',
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    // Ensure assets are properly copied and optimized
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|mp4|webm|ogg|mp3|wav|flac|aac|woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
