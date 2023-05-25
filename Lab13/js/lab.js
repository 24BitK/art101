// index.js - JavaScript Events and Froms
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.22.2023

//{3: "Fizz", 5: "Buzz", 7: "Boom"}
//loops over the numbers and outputs the number and the matching text 11 
//for factors
function fizzBuzzBoom (maxNums, factorobj) {
  // iterate over all of out numbers
    for (var num=0; num<maxNums; num++) {
      // reset output string
      var outputStr = "";
      // iterate over the factors we got from the html
      for (var factor in factorObj) {
        // check to see if this num is a multiple of factor
        if (num % factor == 0) {
        //now if yes, than add the text to output string
        outputStr += factorObj[factor];
        }
      }
    }    
    //now if we have words in outputstr, format it like this " - FizzBuzz!"
    if (outputstr) {
    outputstr = " - " + outputstr + "!";
    }
    outputToPage (num.tostring() + outputStr)
  }
  function reportError(str){
  outputEl.innerHTML = "«div class='error'>" + str + "</div»";
  }