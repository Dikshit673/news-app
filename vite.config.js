import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://newsapi.org',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //       configure: (proxy, options) => {
  //         proxy.on('proxyReq', (proxyReq, req, res) => {
  //           // Add the API key to the request headers
  //           proxyReq.setHeader('Authorization', `Bearer ${process.env.YOUR_NEWS_API_KEY}`);
  //         });
  //       }
  //     }
  //   },
  // }
})
