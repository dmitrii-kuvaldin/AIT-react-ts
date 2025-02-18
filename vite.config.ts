import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AIT-react-ts/',
  css: {
    modules: {
      // Настройка формата имен классов
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
});
