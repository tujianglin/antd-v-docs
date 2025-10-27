import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    base: '.',
    plugins: [vue(), vueJsx(), tailwindcss()],

    build: {
      target: 'es2015',
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'index',
        fileName: 'index',
      },
      esbuild: {
        drop: isBuild ? ['debugger'] : [],
        legalComments: 'none',
      },
    },
    server: {
      host: true,
      port: 3132,
    },
  };
});
