/*
 * map.js
 */

$(document).ready(function() {
	
	$("form").submit(function() {
  		var fiddle = $(this).serialize();
  		var fiddle_id = $('#fiddle_id').val();

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
  			
  			if (json)
  				$('#fiddle_id').val(json.id);
  			
  			
  			
  		});
  		return false;
	});
});


/*
 * Saves a fiddle to the database and returns the ID
 */
function new_fiddle(textarea) {
	var http_request = get_ajax_obj();
	http_request.onreadystatechange = function() {
		alert("Done!");
	}
}

function update_fiddle(id, textarea) {

}


function add_kml_to_google_map(url, map) {
	var layer = new google.maps.KmlLayer({
		url: url
	});
	layer.setMap(map);
}