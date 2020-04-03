//Business Interface
var convertSentence = function(num) {
  var mrRobo = [3, 2, 1]
  var roboReply = ["Won't you be my neighbor?", "Boop!", "Beep!"]
  
  
  var result = "";

  for (var i = 0; i < mrRobo.length; i++) {
    
  }
    
  return result;
};



 // for (var i = 0; i  <= userInput; i++)





$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $("#output").text(convertSentence(userInput));
    for (var i = 0; i  <= userInput; i++)
    console.log(result)
  });
});