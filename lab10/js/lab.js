// index.js - JavaScript Events and Froms
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.15.2023

// Create a basic "Hello, World!" page.
// Add a button (id="my-button") to the Hello World page.
function sortMe(str) {
	return str.split('').sort().join('');
}

var buttonEl = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
  // prompt the user to input their name with the prompt() function. 
  //var name = prompt("What is your name?");
  var name = document.getElementById("getit").value;
  var nameStr = "Hello " + sortMe(name) + ", " + "Dis ya new Name!!";
  // change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
  var helloEl = document.getElementById("hello-world");
  helloEl.innerHTML = nameStr;
  
})




    