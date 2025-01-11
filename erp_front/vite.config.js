import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Use polling instead of native file system watchers
      interval: 100,    // Adjust the polling interval (default is 300 ms)
      ignored: ['**/node_modules/**'], // Ignore large directories
    },
  },
});
