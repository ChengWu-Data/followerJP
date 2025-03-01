import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // 如果是生产环境，就使用 '/cheng-Ikebana/'，否则用 '/'
  base: isProduction ? '/followerJP/' : '/',
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
      // 明确设置为 false，确保以命名导出方式提供 ReactComponent
      exportAsDefault: false,
    }),
  ],
});
