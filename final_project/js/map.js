var tour;
var alexisMap;

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

    var tourCoordinates = [];
    json.venues.forEach( function (venues) {
      var coordinates = new google.maps.LatLng(venues.Latitude, venues.Longitude);
      tourCoordinates.push(coordinates);
    });

    var tourPath = new google.maps.Polyline({
      path: tourCoordinates,
      geodesic: true,
      strokeColor: '#DE9214',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    tourPath.setMap(alexisMap);


  });



}

  function initMap() {
// console.log("initMap()");

    var center = {lat: 42.877742, lng: -97.380979};
    // var alexisMap;

    alexisMap = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 4,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    function calculateCenter() {
      center = alexisMap.getCenter();
    }
    google.maps.event.addDomListener(alexisMap, 'idle', function() {
    calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
    alexisMap.setCenter(center);
  });


    var infoWindow = new google.maps.InfoWindow();
    // console.log(tour.venues.length);
    for (var i = 0; i < tour.venues.length; i++) {
      var tempVenue = tour.venues[i];
      // console.log(tempVenue);
    //   var myLatLng = new google.maps.LatLng(tempVenue.Latitude, tempVenue.Longitude);
    //   var marker = new google.maps.Marker ({
    //     position: myLatLng,
    //     map: alexisMap,
    //     title: tempVenue.title
    // });
    if (tempVenue.Latitude == 25.7793) {
      var pinColor = "009900";
      var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                  new google.maps.Size(21, 34),
                  new google.maps.Point(0,0),
                  new google.maps.Point(10, 34));
      var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                  new google.maps.Size(40, 37),
                  new google.maps.Point(0, 0),
                  new google.maps.Point(12, 35));
      var myLatLng = new google.maps.LatLng(tempVenue.Latitude, tempVenue.Longitude);
      var marker = new google.maps.Marker ({
        icon: pinImage,
        shadow: pinShadow,
        position: myLatLng,
        map: alexisMap,
        title: tempVenue.title


    });

    (function (marker, tempVenue) {

      google.maps.event.addListener(marker, 'click', function (e) {

        infoWindow.setContent('<div id="content">' + '<h1 class="stadium">' + tempVenue.Stadium + '</h1>' + '<h2 class="location">' + tempVenue.Location + '</h2>' + '<div id="bodyContent">' + '<p class="date"><span class="sub-title">Date:</span> ' + tempVenue.Date + '</p><br>' + '<p class="time"><span class="sub-title">Time:</span> ' + tempVenue.Time + '</p><br>' + '<div class="details-box">' + '<p class="address"><span class="sub-title">Address:</span> ' + tempVenue.Address + '</p><br>' + '<p class="number"><span class="sub-title">Phone Number:</span> ' + tempVenue.Number + '</p>' + '<p class="site"><span class="sub-title">Website:</span> <a href="http://' + tempVenue.Website + '" target="_blank">' + tempVenue.Website + '</a></p>' + '</div>' + '</div>' +
        '</div>');
        infoWindow.open(alexisMap, marker);
      });

    })(marker, tempVenue);
    }
    else {
    var pinColor = "ffffff";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));
    var myLatLng = new google.maps.LatLng(tempVenue.Latitude, tempVenue.Longitude);
    var marker = new google.maps.Marker ({
      icon: pinImage,
      shadow: pinShadow,
      position: myLatLng,
      map: alexisMap,
      title: tempVenue.title


    });
    }

    if (tempVenue.Latitude == 42.34) {
    var pinColor = "e60000";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));
    var myLatLng = new google.maps.LatLng(tempVenue.Latitude, tempVenue.Longitude);
    var marker = new google.maps.Marker ({
      icon: pinImage,
      shadow: pinShadow,
      position: myLatLng,
      map: alexisMap,
      title: tempVenue.title


    });
    }
    else {
    var pinColor = "ffffff";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));
    var myLatLng = new google.maps.LatLng(tempVenue.Latitude, tempVenue.Longitude);
    var marker = new google.maps.Marker ({
      icon: pinImage,
      shadow: pinShadow,
      position: myLatLng,
      map: alexisMap,
      title: tempVenue.title


    });
    }




      // console.log(marker);
      // console.log('doc');

      (function (marker, tempVenue) {

        google.maps.event.addListener(marker, 'click', function (e) {

          infoWindow.setContent('<div id="content">' + '<h1 class="stadium">' + tempVenue.Stadium + '</h1>' + '<h2 class="location">' + tempVenue.Location + '</h2>' + '<div id="bodyContent">' + '<p class="date"><span class="sub-title">Date:</span> ' + tempVenue.Date + '</p><br>' + '<p class="time"><span class="sub-title">Time:</span> ' + tempVenue.Time + '</p><br>' + '<div class="details-box">' + '<p class="address"><span class="sub-title">Address:</span> ' + tempVenue.Address + '</p><br>' + '<p class="number"><span class="sub-title">Phone Number:</span> ' + tempVenue.Number + '</p>' + '<p class="site"><span class="sub-title">Website:</span> <a href="http://' + tempVenue.Website + '" target="_blank">' + tempVenue.Website + '</a></p>' + '</div>' + '</div>' +
          '</div>');
          infoWindow.open(alexisMap, marker);
        });

      })(marker, tempVenue);
      $('#tour-info').append(infobox);
    }
  }
