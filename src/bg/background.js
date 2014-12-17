Firebase.enableLogging(true);
var q = new Firebase('https://codinghouse.firebaseio.com/queue');

var i = 0;
q.on("value", function(snapshot) {
  console.log("H", snapshot, snapshot.val());
  chrome.notifications.create("main-" + i , { type: "basic", title: "CodingHouse", iconUrl: "/calculator-16.png",  message: snapshot.val().message }, function() {
    console.log(this);
  });
  i = i +1;
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
