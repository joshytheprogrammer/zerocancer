const CACHE_NAME = 'zero-cancer-app-cache-v1';
const urlsToCache = [
  'https://res.cloudinary.com/dsgvwxygr/video/upload/v1691768919/zerocancer/Zerocancer_video_rchsqf.mp4',
  'https://res.cloudinary.com/dsgvwxygr/video/upload/v1691768919/zerocancer/Zerocancer_video_rchsqf.webm',
  'https://res.cloudinary.com/dsgvwxygr/image/upload/v1691762051/zerocancer/logo_ojnm9f.png',
  'https://res.cloudinary.com/dsgvwxygr/image/upload/v1692189641/zerocancer/poster_r48e44.png',
  '/icons/icon-48x48.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/css/animate.css',
  '/img/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
