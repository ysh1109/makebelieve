let cacheData="appMb";

this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/static/media/LEIXO-DEMO.7e5b0ae7.ttf",
                "/static/media/arlrdbd.78ccc3bb.ttf",
                "/static/media/logo_1.b89d42fe.svg",
                "/index.html",
                "/work",
                "/"
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then(result=>{
                if(result)
                {
                    return result
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl)
            })
        )        
    }
})