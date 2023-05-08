// index.js - Anon Functions and Callbacks
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.8.2023

function isEven(x){
    return(x % 2 == 0);
}
// test function
console.log("Is 1 even", isEven(1));
console.log("Is 2 even", isEven(2));

array = [20, 34, 16, 128, 230, 96, 1892]
console.log("My array", array)

var result = array.map(isEven);
//Should return all True
console.log("Test my array", result);

var resultn = array.map(function(x){
    return x ** 0.4;
})

console.log("squareroot of array", result)

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = mapResults; // put your results here