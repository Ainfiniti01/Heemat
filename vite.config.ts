import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import tsconfigPaths from 'vite-tsconfig-paths';
import { addRenderIds } from './plugins/addRenderIds';
import { aliases } from './plugins/aliases';
import consoleToParent from './plugins/console-to-parent';
import { layoutWrapperPlugin } from './plugins/layouts';
import { loadFontsFromTailwindSource } from './plugins/loadFontsFromTailwindSource';
import { nextPublicProcessEnv } from './plugins/nextPublicProcessEnv';
import { restart } from './plugins/restart';
import { restartEnvFileChange } from './plugins/restartEnvFileChange';

export default defineConfig({
  base: "/", // Vercel root
  root: ".",

  envPrefix: "NEXT_PUBLIC_",

  optimizeDeps: {
    include: ["fast-glob", "lucide-react"],
    exclude: ["fsevents", "lightningcss"],
  },

  plugins: [
    nextPublicProcessEnv(),
    restartEnvFileChange(),

    babel({
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: /node_modules/,
      babelConfig: { babelrc: false, configFile: false, plugins: ["styled-jsx/babel"] },
    }),

    restart({
      restart: [
        "src/**/page.jsx",
        "src/**/page.tsx",
        "src/**/layout.jsx",
        "src/**/layout.tsx",
        "src/**/route.js",
        "src/**/route.ts",
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
      lodash: "lodash-es",
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },

  build: {
  outDir: 'build/client',
  emptyOutDir: true, // optional
  rollupOptions: {
    input: 'src/main.jsx' // Use src/main.jsx as the entry point
  }
},

  server: {
    host: "0.0.0.0",
    port: 4000,
    allowedHosts: true,
    hmr: { overlay: false },
  },
});
