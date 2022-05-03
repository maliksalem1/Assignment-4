var GHPATH = "/github-page-pwa"
var APP_PREFIX = "gppwa_"
var VERSION = "version_001"
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/style.css`,
  `${GHPATH}/android-chrome-512x512.png`,
  `${GHPATH}/js/script.js`,
]

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      }
      )
    })
  )
})