declare module 'vitest/config' {
  import type { UserConfig as ViteUserConfig } from 'vite';

  interface VitestUserConfig extends ViteUserConfig {
    test?: {
      environment?: string;
      globals?: boolean;
      setupFiles?: string | string[];
    };
    resolve?: {
      alias?: Record<string, string>;
    };
    esbuild?: {
      jsx?: "automatic" | "transform" | "preserve";
    };
    cacheDir?: string;
  }

  export function defineConfig(config: VitestUserConfig): VitestUserConfig;
}
