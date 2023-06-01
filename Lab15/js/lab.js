// index.js - AJax
// Author: Kali Daniels <kamdanie@ucsc.edu>
// Date: 5.31.2023

function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://swapi.dev/api/planets/1/",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		console.log(data.climate);
    console.log(data.population);
    var climate = data.climate;
    var population = data.population;
    $("#output").html("<h2>" + data.name + "</h2><p>" + data.climate + "<br>" + population);
   // $("#output").html("<p>" + climate);
    //$("#output").append("<p>" + population);
    
  })
}

$("#active").click(getStuff);