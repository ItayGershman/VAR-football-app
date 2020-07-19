if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/expo-service-worker.js', { scope: '/' })
      .then(function (info) {})
      .catch(function (error) {
        console.info('Failed to register service-worker', error);
      });
  });
}
