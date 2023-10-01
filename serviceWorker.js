self.addEventListener ("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./index.html", "./style.css", "./modegame.html", "./modegame.css", "./jeu.html", "./jeu.css", "./responsivejeu.css", "./logo/logo192all.png", "./logo/logo512all.png"]);
        })
    );
});

self.addEventListener ("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
