var fb = new Firebase("https://codinghouse.firebaseio.com/queue");

$(function() {
  $("#send-message").submit(function() {
    fb.set({ message: $("#message").val() }, function(error) {
      if (!error) {
        $("#message").val("");
      }
    });
    return false;
  });
});
