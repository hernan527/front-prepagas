
import { defineConfig } from 'vite';
import ts from '@rollup/plugin-typescript'; // Usamos TypeScript para la compilación

export default defineConfig({
  plugins: [ts()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: './src/main.ts', // Cambia a tu archivo principal
      output: {
        dir: 'dist',
        format: 'es',
      },
    },
  },
  server: {
    port: 4200, // Cambia el puerto si lo deseas
  },
  ssr: {
    // Configuración específica para SSR si es necesario
  }
});
