// Service worker mínimo: no cachea nada todavía, pero su sola presencia
// (con un listener de fetch) es uno de los requisitos que pide Chrome en
// Android para ofrecer el banner automático de "Instalar app".
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // Paso a través normal — sin caché por ahora.
  event.respondWith(fetch(event.request));
});
