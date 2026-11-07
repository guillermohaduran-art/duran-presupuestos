const C="duran-v5",PDFLIB="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(async c=>{await c.addAll(["./","./index.html","./manifest.webmanifest","./privacidad.html"]);try{await c.put(PDFLIB,await fetch(PDFLIB,{mode:"no-cors"}))}catch(x){}}))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=e.request.url;
  if(u===PDFLIB){   // generador de PDF: primero lo guardado, así funciona sin internet
    e.respondWith(caches.match(PDFLIB).then(m=>m||fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(PDFLIB,c));return r})));return}
  if(new URL(u).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r})
    .catch(()=>caches.match(e.request).then(m=>m||caches.match("./index.html"))))});
