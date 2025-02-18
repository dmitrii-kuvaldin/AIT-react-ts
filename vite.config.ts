import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/45.2-ts/',
  css: {
    modules: {
      // Настройка формата имен классов
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
});
