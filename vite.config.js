import { defineConfig } from 'vite';
import ts from '@rollup/plugin-typescript'; // Usamos TypeScript para la compilación
import dotenv from 'dotenv';
dotenv.config();

const port = process.env['VITE_PORT'] || 3000;

export default defineConfig({
  root: './src',  // Si defines root, index.html debe estar en ./src
  plugins: [ts()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: './main', // Asegúrate de que este archivo exista (si es main.ts, mejor especificarlo)
      output: {
        dir: 'dist',
        format: 'es',
      },
    },
  },
  server: {
    port: port, // Cambia el puerto si lo deseas
  },
  ssr: {
    // Configuración específica para SSR si es necesario
    entry: './server.ts', // Archivo de entrada específico para SSR
  }
});
