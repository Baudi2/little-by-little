// Сборка b57e06a79c0e. Файл создан при сборке, руками не правится.
const CACHE = "lbl-b57e06a79c0e";
const SCOPE = "/little-by-little/";
const FILES = ["/little-by-little/","/little-by-little/art/opis.json","/little-by-little/assets/Cache-CTROkX_m.js","/little-by-little/assets/CanvasPool-DzuCm1vb.js","/little-by-little/assets/Filter-Df5X-QNT.js","/little-by-little/assets/GCManagedHash-Bo4PzOgF.js","/little-by-little/assets/GraphicsContext-B4Vuf2rj.js","/little-by-little/assets/RenderTargetSystem-CNY34ah4.js","/little-by-little/assets/browserAll-B_ICnuWD.js","/little-by-little/assets/canvasUtils-U4WZZEj-.js","/little-by-little/assets/getTexelRangeRects-IEiH1ojj.js","/little-by-little/assets/getTextureBatchBindGroup-CEQHRttu.js","/little-by-little/assets/index-7JvOfFgC.js","/little-by-little/assets/index-DGYfloYW.css","/little-by-little/assets/init-C8aL04aT.js","/little-by-little/assets/nunito-cyrillic-700-normal-DP36NgGt.woff2","/little-by-little/assets/nunito-cyrillic-800-normal-D3igD7Kl.woff2","/little-by-little/assets/nunito-cyrillic-ext-700-normal-BuR0mlCG.woff2","/little-by-little/assets/nunito-cyrillic-ext-800-normal-B-cvGohL.woff2","/little-by-little/assets/nunito-latin-700-normal-Dort48En.woff2","/little-by-little/assets/nunito-latin-800-normal-Dz8SOQK_.woff2","/little-by-little/assets/nunito-latin-ext-700-normal-BWeMsAzO.woff2","/little-by-little/assets/nunito-latin-ext-800-normal-CtU8tJOV.woff2","/little-by-little/assets/pangolin-cyrillic-400-normal-DXBky3Ii.woff2","/little-by-little/assets/pangolin-cyrillic-ext-400-normal-CFvbqLpR.woff2","/little-by-little/assets/pangolin-latin-400-normal-Cx-z2UDT.woff2","/little-by-little/assets/pangolin-latin-ext-400-normal-DrUaq5ce.woff2","/little-by-little/assets/webworkerAll-a-bdVY_V.js","/little-by-little/icons/apple-touch-icon.png","/little-by-little/icons/icon-192.png","/little-by-little/manifest.webmanifest"];
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
