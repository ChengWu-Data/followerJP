import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    svgr({
      svgrOptions: {
        icon: true, // 启用 SVG 图标优化
      },
      exportAsDefault: true, // 默认导出 SVG
    }),
  ],
});
