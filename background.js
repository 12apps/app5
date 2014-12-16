chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
  setTimeout(function() {
    chrome.notifications.create("main", { type: "basic", title: "Ready", iconUrl: "calculator-16.png",  message: "It's Ready" }, function() {
      console.log(this);
    });
  }, 4000);
});
