// index.js - JavaScript Events and Froms
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.22.2023


//return Gryfindor, Ravenclaw, Slytherin, an Hefflepuff
function sortingHat(str)  {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Ravenclaw"
  }
  else if (mod == 1) {
    return "Hifflepuff"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Gryffindor"
  }
}
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has decided!! You are house of " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})