// index.js - JSON and APIs (XKCD comic!)
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 6.1.2023

// Using the core $.ajax() method
function getStuff(){
  console.log("Clicked!");
  $.ajax({
    // The URL for the request (from the API docs)
    url: "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY",
    // The data to send (will be converted to a query string)
    data: { 
      // Any required data for the API goes here (check the API docs)
      id: "3542519",
      api_key: "t6NfaNdd62lDmrhvXiYsOhHVbjjraudzJGFGALFP"
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What to do when the API call is successful
    success: function(data) {
      // Access the properties of the response data and perform operations
      console.log(data.name);
      console.log(data.designation);
      console.log(data.absolute_magnitude_h);
      var name = data.name;
      var designation = data.designation;
      var absolute_magnitude_h = data.absolute_magnitude;
      $("#output").append("name:" + " " + name + "<br>");
      $("#output").append("designation:" + " " + designation + "<br>");
    }
  })
}
$("#active").click(getStuff);
