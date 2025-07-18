const CACHE_NAME = "bhumi-birthday-v1"
const urlsToCache = [
  "/",
  "/countdown",
  "/celebration",
  "/video-messages",
  "/playlist",
  "/favorites",
  "/loading-card",
  "/card-preview",
  "/opened-card",
  "/manifest.json",
  "/icons/app-icon.png",
  "/images/bhumi-profile.png",
]

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Background sync for offline actions
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    console.log("Background sync triggered")
  }
})

// Push notifications (for future birthday reminders)
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "Happy Birthday Bhumi! 🎉",
    icon: "/icons/app-icon-192.png",
    badge: "/icons/app-icon-72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "View Celebration",
        icon: "/icons/app-icon-48.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "/icons/app-icon-48.png",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification("Bhumi's Birthday", options))
})

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"))
  }
})
