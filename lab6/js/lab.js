// index.js - Arrays and Objects
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.1.2023

// Define Varibales
myTransport = ["Cadilac Escalade", "Metro", "Bike", "Skatebaord"];

// Create an object for main ride
var myMainRide = { 
  make: "Cadilac",
  model: "Escalade",
  color: "Black",
  year: "2021",
  age : function() {
      return 2023 - this.year;
      
      }    
  }
// let's get this party started
document.writeln("Getting around" + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");