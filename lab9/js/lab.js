// index.js - JavaScript for the web
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.10.2023

document.getElementsById("p2")
document.getElementsByClassName("my-class")
document.getElementById("my-id")
document.getElementsById("outputEl")


var targetEl = 
document.getElementById("bio");

var newEl = 
document.createElement("div");


targetEl.appendChild(newEl);

window.onload = function () {

    // your script here

   // Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
   var outputEl = document.getElementById("output");
   console.log("outputEl: ", outputEl);
   
   // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
   var new1El = document.createElement("p");

   // Change the html attribute of new1El to say "something new.""
   new1El.innerHTML = "Wass good withit.";
   new1El.id = "new-one";

   // Create a new element with document.createElement("p") and assign it to a variable new1El
   var new2El = document.createElement("p");
   new1El.id = "new-two";

   // Change the html attribute of new1El to say "something else.""
   new2El.innerHTML = "Aight be smoove.";

   // Append both new elements one at a time using appendChild() (step 3)
   outputEl.appendChild(new1El);
   outputEl.appendChild(new2El);

   // Change the css attributes of at least two elements of your page
   // we do some stuff
   // new1El.style.color = "blue";
   // outputEl.style.border = "dashed 1px red";
   outputEl.className = "changed";

}