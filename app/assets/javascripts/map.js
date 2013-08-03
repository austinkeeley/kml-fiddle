/*
 * map.js
 */

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(38.89, -77.03),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}