self.addEventListener('install', e => {
  e.waitUntil(caches.open('journal-v1')
    .then(cache => cache.addAll(['index.html','manifest.json','logo.png','icon.png'])));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
