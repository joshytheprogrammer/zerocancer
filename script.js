const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

let deferredPrompt;
  
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;
  
  const addToHomeButton = document.getElementById('add-to-home-button');
  addToHomeButton.style.display = 'block';
});

const addToHomeButton = document.getElementById('add-to-home-button');
  
addToHomeButton.addEventListener('click', () => {
  // Show the deferred installation prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation prompt');
      } else {
        console.log('User dismissed the installation prompt');
      }
      
      // Reset the deferred prompt
      deferredPrompt = null;
    });
  }
});