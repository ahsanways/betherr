import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Set base to '/REPOSITORY_NAME/' for GitHub Pages project pages, or '/' for custom domain/root deployment.
  base: '/',
});
