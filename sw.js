// Сборка c518b72c6335. Файл создан при сборке, руками не правится.
const CACHE = "lbl-c518b72c6335";
const SCOPE = "/little-by-little/";
const FILES = ["/little-by-little/","/little-by-little/art/probe/d2/bakery3.webp","/little-by-little/art/probe/d2/cat.webp","/little-by-little/art/probe/d2/spruce.webp","/little-by-little/art/probe/d2/tree.webp","/little-by-little/art/probe/d3/bakery3.webp","/little-by-little/art/probe/d3/cat.webp","/little-by-little/art/probe/d3/spruce.webp","/little-by-little/art/probe/d3/tree.webp","/little-by-little/art/probe/index.json","/little-by-little/assets/Cache-CTROkX_m.js","/little-by-little/assets/CanvasPool-DzuCm1vb.js","/little-by-little/assets/Filter-vpEaIMwd.js","/little-by-little/assets/GCManagedHash-DCvVepMX.js","/little-by-little/assets/GraphicsContext-48tzdr3Q.js","/little-by-little/assets/RenderTargetSystem-BK2ifv01.js","/little-by-little/assets/browserAll-Cpnvm4oK.js","/little-by-little/assets/canvasUtils-U4WZZEj-.js","/little-by-little/assets/getTexelRangeRects-Bdv1rQ51.js","/little-by-little/assets/getTextureBatchBindGroup-CEQHRttu.js","/little-by-little/assets/index-C5QrxEnC.css","/little-by-little/assets/index-Dq-ek42l.js","/little-by-little/assets/init-DoUXYMOj.js","/little-by-little/assets/nunito-cyrillic-700-normal-DP36NgGt.woff2","/little-by-little/assets/nunito-cyrillic-800-normal-D3igD7Kl.woff2","/little-by-little/assets/nunito-cyrillic-ext-700-normal-BuR0mlCG.woff2","/little-by-little/assets/nunito-cyrillic-ext-800-normal-B-cvGohL.woff2","/little-by-little/assets/nunito-latin-700-normal-Dort48En.woff2","/little-by-little/assets/nunito-latin-800-normal-Dz8SOQK_.woff2","/little-by-little/assets/nunito-latin-ext-700-normal-BWeMsAzO.woff2","/little-by-little/assets/nunito-latin-ext-800-normal-CtU8tJOV.woff2","/little-by-little/assets/pangolin-cyrillic-400-normal-DXBky3Ii.woff2","/little-by-little/assets/pangolin-cyrillic-ext-400-normal-CFvbqLpR.woff2","/little-by-little/assets/pangolin-latin-400-normal-Cx-z2UDT.woff2","/little-by-little/assets/pangolin-latin-ext-400-normal-DrUaq5ce.woff2","/little-by-little/assets/webworkerAll-Du3OKYkd.js","/little-by-little/icons/apple-touch-icon.png","/little-by-little/icons/icon-192.png","/little-by-little/manifest.webmanifest"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("lbl-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin || !u.pathname.startsWith(SCOPE) || u.pathname.startsWith(SCOPE + 'probe/')) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(SCOPE, copy)); }
      return res;
    }).catch(() => caches.match(SCOPE).then(m => m || Response.error())));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
    if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
    return res;
  })));
});
