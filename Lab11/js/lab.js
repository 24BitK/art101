// index.js - JavaScript Events and Froms
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.17.2023

//Find the section you want to add the button to
$("#challenges").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");


//Create the button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button

//Give it a text label


$("#c-button").click(function(){
  // find the section, toggle a class
  // $("#challenge").toggleClass("special");

  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})




    