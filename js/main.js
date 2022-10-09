
// Register a service worker
if(navigator.serviceWorker){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw_cache.js')
        .then(reg => console.log("Service Worker is registered"))
        .catch(err => console.log('error: ${err}'))
    }); 
}