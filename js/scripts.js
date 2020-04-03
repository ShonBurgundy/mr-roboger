
//Business
//takes in user input
  var generateRange = function(num) {
  var name = $("#user-name").val();
  var displayArray = [] //initializes empty array
  for (var i = 0; i  <= num; i++) { //for loop that increments index by 1 till <= user input
    //want to look at index value
    if (i.toString().includes("3")) { // this is looking if the i contains a 3
      //if its a 3 return wont.
      displayArray.push("Won't you be my neighbor?")
      //if 2 return boop
    } else if (i.toString().includes("2")) {// this is looking if the i contains a 2
      displayArray.push("Boop!")
      //if 1 return beep
    } else if (i.toString().includes("1")) {// this is looking if the i contains a 1
      displayArray.push("Beep!")
    } else {
      displayArray.push(i);
    }
    //if its multiple digits from about highest value number take priority
     //adds value of index to displayArray
  }

  if (i % 3 === 0) {
    displayArray.push("Won't you be my neighbor," + "#user-name" + "?")
  }
  return displayArray; // the result
}






//UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $("#output").text(generateRange(userInput));
    //console.log(userInput)
  });
});