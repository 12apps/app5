Firebase.enableLogging(true);
var q = new Firebase('https://codinghouse.firebaseio.com/queue');

q.on("value", function(snapshot) {
  chrome.notifications.create("main", { type: "basic", title: "CodingHouse", iconUrl: "/calculator-16.png",  message: snapshot.val().message }, function() {
    console.log(this);
  });
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
