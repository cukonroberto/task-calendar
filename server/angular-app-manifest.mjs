
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 75157, hash: 'a8adcc4647eb6c72c9f876936013eec9202abd580c4cddf5b433928332dd2ac9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17081, hash: '3fd9d9f2721cc029934d1ef80777d874bc330f918a80beeb9e10fe3a38502a5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 142570, hash: '45a83ec5233971a00023556d141ce2951452e5b7511da7b0b6b69efa258dace8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LOBZUZQA.css': {size: 59541, hash: 'kl+qFA47l9A', text: () => import('./assets-chunks/styles-LOBZUZQA_css.mjs').then(m => m.default)}
  },
};
