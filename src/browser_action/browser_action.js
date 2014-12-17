Firebase.enableLogging(true);
var q = new Firebase('https://codinghouse.firebase.io/queue');
console.log(q);

var button = document.getElementById("q-fb-button");
console.log(button);
button.addEventListener("click", queueMessage, false);

function queueMessage(e) {
  e.preventDefault();
  console.log("qM", this);
  return false;
};
