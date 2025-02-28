import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // 这一行设置了静态资源的基本路径
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
      // 已移除 exportAsDefault: true 以便使用默认的命名导出 ReactComponent
    }),
  ],
});
