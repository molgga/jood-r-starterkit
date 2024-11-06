import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@apps/ui', replacement: path.resolve(__dirname, '../ui/src') },
      {
        find: '@jood/my-some-module',
        replacement: path.resolve(
          __dirname,
          '../../packages/my-some-module/src'
        ),
      },
    ],
  },
});
