
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/task-calendar/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/task-calendar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 75171, hash: 'ab65f1c4dc32f219b252fde102e3014c6a3166508cd7359d3140d62b31822091', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17095, hash: 'ed3b8e1d6931e92e61680460cada56f1ba4c3db660c316bc632067abbe1b05a8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 142584, hash: 'c86a2b86992ab74132ef6c6ddb91616797ec5d5786b4cb9dbd35b3bf70fa0ba0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LOBZUZQA.css': {size: 59541, hash: 'kl+qFA47l9A', text: () => import('./assets-chunks/styles-LOBZUZQA_css.mjs').then(m => m.default)}
  },
};
