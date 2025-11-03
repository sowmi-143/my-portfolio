import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/table-content-form/', // 👈 matches your repo name
  plugins: [react()],
  
});