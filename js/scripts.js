//Business Interface
var convertSentence = function(num) {
  var mrRobo = [3, 2, 1]

  var result = []

  for (var i = 0; i < userInput.length; i++)
  //console.log();
}









$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $("#output").text(convertSentence(userInput));
  });
});