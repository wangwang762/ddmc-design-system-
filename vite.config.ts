import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(async ({ command }) => {
  // Dev mode: serve the playground app
  if (command === 'serve') {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
    }
  }

  // Build mode: library output
  const dts = (await import('vite-plugin-dts')).default
  return {
    plugins: [
      react(),
      dts({
        include: ['src'],
        exclude: ['src/dev'],
        insertTypesEntry: true,
        rollupTypes: true,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'DDMCDesignSystem',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          // Preserve CSS separate from JS
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'style.css'
            return assetInfo.name ?? 'assets/[name][extname]'
          },
        },
      },
      sourcemap: true,
      // Don't minify for readability in the dist
      minify: false,
    },
    css: {
      postcss: './postcss.config.js',
    },
  }
})
