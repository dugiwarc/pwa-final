self.addEventListener("install", (evt) => {
	caches.open("lpdwca-PWA").then((cache) => {
		cache.addAll(["/", "index.html", "main.js", "server.php", "style.css"]);
	});
});

self.addEventListener("activate", (evt) => {
	console.log(evt);
});

self.addEventListener("fetch", (evt) => {
	if (!navigator.onLine) {
		evt.respondWith(new Response("Pas de connexion internet"));
	}
	console.log(evt.request.url);
	// ******************* if (!(evt.request.url.indexOf('http') === 0)) return;
	evt.respondWith(
		caches.match(evt.request).then((rep) => {
			if (rep) {
				console.log("rep existe");
				return rep;
			} // si la pge existe on la retourne

			// si elle n'existe pas on utilise la meth. network fallback pour ouvrir l'instance de cache
			return fetch(evt.request).then((newResponse) => {
				caches
					.open(CACHE_NAME)
					.then((cache) => cache.put(evt.request, newResponse));
				// puisqu'une reponse ne peut etre utiliséee 2 fois, pour l'utiliser on doit la cloner
				return newResponse.clone();
			});
		})
	);
});

self.addEventListener("sync", function (event) {
	// if (event.tag == "myFirstSync") {
	// event.waitUntil(doSomeStuff());
	// }
	console.log(event);
});
