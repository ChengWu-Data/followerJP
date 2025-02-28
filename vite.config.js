import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // 👇 这一行非常重要，告诉 Vite 生成的静态资源要加上 /cheng-Ikebana/ 前缀
  base: '/cheng-Ikebana/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    svgr({
      svgrOptions: {
        icon: true,
      },
      exportAsDefault: true,
    }),
  ],
});
