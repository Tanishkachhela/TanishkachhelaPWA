    self.addEventListener("install", function (event) { 
   event.waitUntil(preLoad());
});

   self.addEventListener("fetch", function (event) { 
  event.respondWith(checkResponse(event.request).catch(function () {
   console.log("Fetch from cache successful!") 
   return 
   returnFromCache(event.request);
 }));
console.log("Fetch successful!") 
event.waitUntil(addToCache(event.request));
});

self.addEventListener('sync', event => 
{ if (event.tag === 'syncMessage') {
  console.log("Sync successful!")
}
});
self.addEventListener('push', function   (event)   { 
  if (event && event.data) {
   var data = event.data.json();
    if (data.method == "pushMessage") 
     { console.log("Push notiﬁcation sent");
    event.waitUntil(self.registration.showNotiﬁcation("Omkar Sweets Corner", { body: data.message
     }))
    } 
   }
  })
  
  
  
  var ﬁlesToCache = [ '/',
  '/menu', 
  '/contactUs', 
  '/ofﬂine.html',
  ];
  
