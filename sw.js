// Сборка 89c77f828dc9. Файл создан при сборке, руками не правится.
const CACHE = "lbl-89c77f828dc9";
const SCOPE = "/little-by-little/";
const FILES = ["/little-by-little/","/little-by-little/art/opis.json?v=8e90ef761c2a","/little-by-little/assets/Cache-CTROkX_m.js","/little-by-little/assets/CanvasPool-DzuCm1vb.js","/little-by-little/assets/Filter-Df5X-QNT.js","/little-by-little/assets/GCManagedHash-Bo4PzOgF.js","/little-by-little/assets/GraphicsContext-B4Vuf2rj.js","/little-by-little/assets/RenderTargetSystem-CNY34ah4.js","/little-by-little/assets/browserAll-55biqegR.js","/little-by-little/assets/canvasUtils-U4WZZEj-.js","/little-by-little/assets/getTexelRangeRects-IEiH1ojj.js","/little-by-little/assets/getTextureBatchBindGroup-CEQHRttu.js","/little-by-little/assets/index-CKWdnXo7.css","/little-by-little/assets/index-MYQ6mTlc.js","/little-by-little/assets/init-C8aL04aT.js","/little-by-little/assets/nunito-cyrillic-700-normal-DP36NgGt.woff2","/little-by-little/assets/nunito-cyrillic-800-normal-D3igD7Kl.woff2","/little-by-little/assets/nunito-cyrillic-ext-700-normal-BuR0mlCG.woff2","/little-by-little/assets/nunito-cyrillic-ext-800-normal-B-cvGohL.woff2","/little-by-little/assets/nunito-latin-700-normal-Dort48En.woff2","/little-by-little/assets/nunito-latin-800-normal-Dz8SOQK_.woff2","/little-by-little/assets/nunito-latin-ext-700-normal-BWeMsAzO.woff2","/little-by-little/assets/nunito-latin-ext-800-normal-CtU8tJOV.woff2","/little-by-little/assets/pangolin-cyrillic-400-normal-DXBky3Ii.woff2","/little-by-little/assets/pangolin-cyrillic-ext-400-normal-CFvbqLpR.woff2","/little-by-little/assets/pangolin-latin-400-normal-Cx-z2UDT.woff2","/little-by-little/assets/pangolin-latin-ext-400-normal-DrUaq5ce.woff2","/little-by-little/assets/webworkerAll-upN-yz6O.js","/little-by-little/icons/apple-touch-icon.png","/little-by-little/icons/icon-192.png","/little-by-little/manifest.webmanifest"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(async keys => {
    // Предыдущая открытая вкладка может ещё запросить JS со старым хешем.
    const previous = keys.filter(k => k.startsWith("lbl-") && k !== CACHE);
    const open = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (!open.some(client => new URL(client.url).pathname.startsWith(SCOPE))) {
      await Promise.all(previous.map(k => caches.delete(k)));
    }
    await self.clients.claim();
  }));
});
self.addEventListener('message', e => {
  if (e.data?.type !== 'cache-art' || !Array.isArray(e.data.urls)) return;
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const paths = e.data.urls.filter(p => typeof p === 'string' && new URL(p, location.origin).origin === location.origin
      && new URL(p, location.origin).pathname.startsWith(SCOPE + 'art/'));
    try {
      for (let i = 0; i < paths.length; i += 4) {
        await Promise.all(paths.slice(i, i + 4).map(async p => {
          if (!await cache.match(p)) await cache.add(p);
        }));
      }
      e.ports[0]?.postMessage({ ok: true });
    } catch { e.ports[0]?.postMessage({ ok: false }); }
  })());
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin || !u.pathname.startsWith(SCOPE) || u.pathname.startsWith(SCOPE + 'probe/')) return;
  if (u.pathname === SCOPE + 'version.json') {
    e.respondWith(fetch(r, {cache: 'no-store'}));
    return;
  }
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (r.mode === 'navigate') {
      try {
        const res = await fetch(r);
        if (res.ok) await cache.put(SCOPE, res.clone());
        return res;
      } catch { return await cache.match(SCOPE) || Response.error(); }
    }
    const hit = await cache.match(r);
    if (hit) return hit;
    if (u.pathname.startsWith(SCOPE + 'assets/') || (u.pathname.startsWith(SCOPE + 'art/') && u.searchParams.has('v'))) {
      const prior = await caches.match(r);
      if (prior) return prior;
    }
    try {
      const res = await fetch(r);
      if (res.ok && res.type === 'basic') await cache.put(r, res.clone());
      return res;
    } catch {
      const prior = await caches.match(r);
      if (prior) return prior;
      // На ×3 общий вид обычно запрашивает ×2. Без сети используем ту же клетку из прогретой плотности.
      if (u.pathname.startsWith(SCOPE + 'art/d2/world/')) {
        const tile = await caches.match(u.pathname.replace('/d2/world/', '/d3/world/'));
        if (tile) return tile;
      }
      return Response.error();
    }
  })());
});
