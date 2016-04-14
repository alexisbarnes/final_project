var tour;

jQuery(document).ready(function(){
  loadData();

});

function loadData(){
  // console.log("loadData()");
  $.getJSON("tour.json", function(json){
    tour = json;
    // console.log(tour);
    // console.log(tour.venues[0].Location);
    initMap();

  });

}

  function initMap() {
// console.log("initMap()");

    var center = {lat: 42.877742, lng: -97.380979};
    var alexisMap;

    alexisMap = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.TERRAIN
    });


    var infoWindow = new google.maps.InfoWindow();
    // console.log(tour.venues.length);
    for (var i = 0; i < tour.venues.length; i++) {
      var tempVenue = tour.venues[i];
      // console.log(tempVenue);
      var myLatLng = new google.maps.LatLng(tempVenue.Latitude, tempVenue.Longitude);
      var marker = new google.maps.Marker ({
        position: myLatLng,
        map: alexisMap,
        title: tempVenue.title
      });

    
      // console.log(marker);
      // console.log('doc');

      (function (marker, tempVenue) {

        google.maps.event.addListener(marker, 'click', function (e) {

          infoWindow.setContent('<div id="content">' + '<h1 class="stadium">' + tempVenue.Stadium + '</h1>' + '<h2 class="location">' + tempVenue.Location + '</h2>' + '<div id="bodyContent">' + '<p class="date"><span class="sub-title">Date:</span> ' + tempVenue.Date + '</p><br>' + '<p class="time"><span class="sub-title">Time:</span> ' + tempVenue.Time + '</p><br>' + '<div class="details-box">' + '<p class="address"><span class="sub-title">Address:</span> ' + tempVenue.Address + '</p><br>' + '<p class="number"><span class="sub-title">Phone Number:</span> ' + tempVenue.Number + '</p>' + '<p class="site"><span class="sub-title">Website:</span> <a href="http://' + tempVenue.Website + '" target="_blank">' + tempVenue.Website + '</a>' + '</div>' + '</div>' +
          '</div>');
          infoWindow.open(alexisMap, marker);
        });

      })(marker, tempVenue);

    }
  }