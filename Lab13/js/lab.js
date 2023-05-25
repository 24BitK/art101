// index.js - JavaScript Events and Froms
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.22.2023

//{3: "Fizz", 5: "Buzz", 7: "Boom"}
//loops over the numbers and outputs the number and the matching text 11 
//for factors
function fizzBuzzBoom () {
  // iterate over all of out 200
    for (var num = 1; num < 200; num++) {
    var audi = " ";
    //multiples 7 output
    if (num % 7 == 0){
      audi += "Boom ";
    }//multiples 5 output
    else if (num % 5 == 0){
      audi += "Buzz ";
    }
    //multiples 3 output
    else if (num % 3 == 0){
      audi += "Fizz ";
    } else {
      audi += num + " ";
    }
  }
  return audi;

}

//grab element asssociate with where we wat to store out output
var results = document.getElementById("output");

//create a new paragraph element and store it within outty
var outty = document.createElement("p");

// change innerHTML of outty
outty.innerHTML = fizzBuzzBoom();

//append new paragraph
results.appendChild(outty);