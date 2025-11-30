import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import tsconfigPaths from 'vite-tsconfig-paths';
import { addRenderIds } from './plugins/addRenderIds.ts';
import { aliases } from './plugins/aliases.ts';
import consoleToParent from './plugins/console-to-parent.ts';
import { layoutWrapperPlugin } from './plugins/layouts.ts';
import { loadFontsFromTailwindSource } from './plugins/loadFontsFromTailwindSource.ts';
import { nextPublicProcessEnv } from './plugins/nextPublicProcessEnv.ts';
import { restart } from './plugins/restart.ts';
import { restartEnvFileChange } from './plugins/restartEnvFileChange.ts';

export default defineConfig({
  // Vercel uses /
  base:"/",
  root: '.', // Explicitly set the root to the current directory

  // Keep them available via import.meta.env.NEXT_PUBLIC_*
  envPrefix: 'NEXT_PUBLIC_',

  optimizeDeps: {
    include: ['fast-glob', 'lucide-react'],
    exclude: [
      'fsevents',
      'lightningcss',
    ],
  },

  logLevel: 'info',

  plugins: [
    nextPublicProcessEnv(),
    restartEnvFileChange(),

    babel({
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: /node_modules/,
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: ['styled-jsx/babel'],
      },
    }),

    restart({
      restart: [
        'src/**/page.jsx',
        'src/**/page.tsx',
        'src/**/layout.jsx',
        'src/**/layout.tsx',
        'src/**/route.js',
        'src/**/route.ts',
      ],
    }),

    consoleToParent(),
    loadFontsFromTailwindSource(),
    addRenderIds(),

    reactRouter(),

    tsconfigPaths(),
    aliases(),
    layoutWrapperPlugin(),
  ],

  resolve: {
    alias: {
      lodash: 'lodash-es',
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },

  clearScreen: false,

  build: {
    outDir: 'build',
    rollupOptions: {
      // Vite will automatically use index.html in the root as the entry point
      // if not specified, and build it to build/client/index.html.
      // Since the root index.html was deleted and user only wants build/client/index.html,
      // we remove this input.
    },
  },

  server: {
    allowedHosts: true,
    host: '0.0.0.0',
    port: 4000,
    hmr: {
      overlay: false,
    },
    warmup: {
      clientFiles: ['./src/app/**/*', './src/app/root.tsx', './src/app/routes.ts'],
    },
  },
});
