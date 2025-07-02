import { defineConfig, loadEnv } from 'vite';
import { wrapperEnv } from './build/uitls';
import { createVitePlugins } from './build/vite/index';

export default defineConfig(({ command, mode }) => {
  const root = process.cwd();
  const isBuild = command === 'build';
  const rawEnv = loadEnv(mode, root);
  const env = wrapperEnv(rawEnv);
  return {
    plugins: createVitePlugins(rawEnv, mode),
    build: {
      target: 'es2015',
      rollupOptions: {
        output: {
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'jse/index-[name]-[hash].js',
        },
      },
      esbuild: {
        drop: isBuild ? ['debugger'] : [],
        legalComments: 'none',
      },
    },
    server: {
      host: true,
      port: env.VITE_PORT,
      warmup: {
        // 预热文件
        clientFiles: ['./index.html', './src/main.ts', './src/{views,layouts,router,store,api,adapter}/*'],
      },
    },
  };
});
