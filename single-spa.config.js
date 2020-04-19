import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue',
  () => import('./apps/vue/app.js'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./apps/react/app.js'),
  () => location.pathname === "/vue"  ? false : true
);

start();
