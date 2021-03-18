// Listen for install event, set callback
self.addEventListener('install', function(event) {
    // Perform some task
    console.log("install")
    event.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/style.css", "./images/icon.png"])
        })
    )
});

self.addEventListener('fetch', e => {
    console.log("fetch request...")
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})