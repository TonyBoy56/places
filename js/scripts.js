// Front-end //
// Global var //
var places = new Places();

$(document).ready(function() {
  $("#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedCountry = $("#country").val();
    var inputtedCity = $("#city").val();
    var inputtedMonument = $("#monument").val();
    var newDestination = new Destination(inputtedCountry, inputtedCity, inputtedMonument);
    places.addDestination(newDestination)
    displayDestinationDetails(places);
    console.log(newDestination);

  });
});

function displayDestinationDetails(placesToDisplay) {
  var destinationList = $("ul#destinations");
  var htmlForDestinationInfo = "";
  placesToDisplay.destination.forEach(function(destination) {
    htmlForDestinationInfo += "<li id=" + "This summer I visited " + destination.id + ">" + destination.country + " " + destination.city + "</li>";
    });
    destinationList.html(htmlForDestinationInfo);
};



// Back-end //



function Places() {
  this.destination = [],
  this.currentId = 0 
}

Places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destination.push(destination);
}

Places.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}
Places.prototype.findDestinations = function(asdf) {
  for (var i=0; i < this.destination.length; i++) {
    if (this.destination[i]) {
      if (this.destination[i].id == Id) {
        return this.destination[i];
      }
    }
  };
  return false;
}

function Destination(country, city, monument) {
  this.country = country;
  this.city = city;
  this.monument = monument;
}
Destination.prototype.visited = function() {
  return this.country + " " + this.city + " " + this.monument;
}
