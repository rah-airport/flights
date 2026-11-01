var C='flights-v1';
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);
if(u.hostname==='www.gstatic.com'||u.hostname==='fonts.gstatic.com'||u.hostname==='fonts.googleapis.com'){
e.respondWith(caches.open(C).then(function(c){return c.match(r).then(function(m){return m||fetch(r).then(function(n){c.put(r,n.clone());return n})})}));return}
if(u.origin===location.origin){
e.respondWith(fetch(r).then(function(n){var cp=n.clone();caches.open(C).then(function(c){c.put(r,cp)});return n}).catch(function(){return caches.match(r)}))}});
