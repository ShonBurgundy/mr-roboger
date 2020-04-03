//Business Interface
var convertSentence = function(num) {
  var



}









$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $("#output").text(convertSentence(userInput));
  });
});