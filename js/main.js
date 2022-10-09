if(navigator.serviceWorker){
    console.log("Service Worker is supported");
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../sw_cache.js')
        .then(reg => console.log("Service Worker is registered"))
        .catch(err => console.log(err));
    }); 
}