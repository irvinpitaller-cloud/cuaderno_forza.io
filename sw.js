const CACHE = 'forza-taller-v2.1.0';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './css/theme.css', './css/base.css', './css/components.css', './css/views.css',
  './js/app.js',
  './js/core/utils.js', './js/core/db.js', './js/core/state.js',
  './js/data/perfiles.js', './js/data/configs.js', './js/data/precios.js', './js/data/marca.js',
  './js/engine/formulas.js', './js/engine/calcular.js', './js/engine/validar.js',
  './js/ui/toast.js', './js/ui/modal.js', './js/ui/marca.js',
  './js/views/inicio.js', './js/views/proyectos.js', './js/views/proyecto.js',
  './js/views/camara.js', './js/views/galeria.js', './js/views/precios.js', './js/views/menu.js'
];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>
      Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
    ).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e=>{
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached) return cached;
      return fetch(e.request).then(res=>{
        if(!res || res.status !== 200 || res.type !== 'basic') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, clone));
        return res;
      });
    })
  );
});
