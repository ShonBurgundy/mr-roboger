//Business Interface
// var convertSentence = function(num) {
//   var mrRobo = [3, 2, 1]
//   var roboReply = ["Won't you be my neighbor?", "Boop!", "Beep!"]
//   var numInput =
  
//   var result = "";

//   //for (var i = 0; i < mrRobo.length; i++) {
    
//   }
    
//   return result;
//};

  var generateRange = function(num) {
  var displayArray = []
  for (var i = 0; i  <= num; i++) {
  displayArray.push(i);
  } if ( i === 1) {
    return  "Beep!"
  }
  return displayArray;
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $("#output").text(generateRange(userInput));
    console.log(userInput)
  });
});