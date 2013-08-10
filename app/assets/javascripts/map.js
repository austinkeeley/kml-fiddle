/*
 * map.js
 */

$(document).ready(function() {
	
	$("form").submit(function() {
  		var fiddle = $(this).serialize();
  		var fiddle_id = $('#fiddle_id').val();

  		$('#update_map_button i').addClass('icon-spin');


  		var method = 'POST';
  		if ($('#fiddle_id').val() === '')
  			method = 'POST';
  		else
  			method = 'PUT';


  		$.ajax({
  			url: $(this).attr('action') + '/' + fiddle_id,
  			type: method,
  			data: fiddle,
  			dataType: "JSON"
  		}).success(function(json) {
  			
  			// If we are saving for the first time, change the id to the saved ID so we
  			// do an update next time.
  			if (json)
  				$('#fiddle_id').val(json.id);
  			
  			// map already declared
  			var url = 'http://' + document.domain + (location.port != 80 ? ':' + location.port : '' ) + '/fiddles/get_raw/' + $('#fiddle_id').val() + '.xml';
  			console.log(url);
        //var url = 'http://pool-173-73-165-139.washdc.fios.verizon.net:3000/fiddles/get_raw/63.xml';
        
        //var url = 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml';
  			add_kml_to_google_map(url, map);



  			$('#update_map_button i').removeClass('icon-spin');
  			
  		});
  		return false;
	});
});

var layer;
function add_kml_to_google_map(url, map) {
	if (typeof layer !== 'undefined')
    layer.setMap(null);

  var layer = new google.maps.KmlLayer({
		url: url
	});
	layer.setMap(map);
}


/*
 * toggles the lat/long tool being displayed
 */
var lat_long_tool_display = false;
var lat, lng,
  mouseMoveListener,
  mouseClickListener;

function toggle_lat_long_tool() {

  var latitude_span = $("#latitude-span");
  var longitude_span = $("#longitude-span");
  var last_click_input = $("#last-click");
  
  if (!lat_long_tool_display) {
    $('#new_fiddle').animate({
      height: "80%"
    }, 500);
    $('#lat-long-container').css('display', 'inline');

    mouseMoveListener = google.maps.event.addListener(map, 'mousemove', function(event) {
      latitude_span.html(event.latLng.lat());
      longitude_span.html(event.latLng.lng());
    });

    mouseClickListener = google.maps.event.addListener(map, 'click', function(event) {
      last_click_input.val(event.latLng.lng() + ',' + event.latLng.lat() + ',0');
    });

  }
  else {
    $('#new_fiddle').animate({
      height: "90%"
    }, 500);
    $('#lat-long-container').css('display', 'none');


    google.maps.event.removeListener(mouseMoveListener);
    google.maps.event.removeListener(mouseClickListener);
  }

  lat_long_tool_display = !lat_long_tool_display;

}

/*
 * Code for generating UUIDs
 */
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}