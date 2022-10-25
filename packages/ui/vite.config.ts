import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        switch (format) {
          case 'commonjs':
          case 'cjs':
            return '[name].cjs'
          case 'esm':
          case 'es':
          case 'module':
            return '[name].mjs'
          default:
            return `[name].${format}.js`
        }
      },
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue'],
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [
    Dts({
      include: ['src/**/*'],
    }),
    Vue({
      reactivityTransform: true,
    }),
  ],
  logLevel: 'warn',
})
