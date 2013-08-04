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
  			//var url = 'http://www.kmlfiddle.com/fiddles/raw_kml/' + $('#fiddle_id').val() + '.xml';
  			var url = 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml';
  			add_kml_to_google_map(url, map);



  			$('#update_map_button i').removeClass('icon-spin');
  			
  		});
  		return false;
	});
});

function add_kml_to_google_map(url, map) {
	var layer = new google.maps.KmlLayer({
		url: url
	});
	layer.setMap(map);
}