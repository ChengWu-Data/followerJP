import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// 判断当前是否是生产环境
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // 如果是生产环境，就使用 '/cheng-Ikebana/'，否则用 '/'
  base: isProduction ? '/cheng-Ikebana/' : '/',
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
      // 不再使用 exportAsDefault: true
    }),
  ],
});
