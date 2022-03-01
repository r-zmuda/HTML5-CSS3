$(document).ready(function() {
	
	var slider = $("#image_list");                     // slider = ul element
	var leftProperty, newleftProperty;
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		
		var imageURL = $(this).attr("href");
		$("#image").animate({
			marginLeft: "-205px",
			opacity: "0"
		}, 1000, function() {
			$("#image").attr("src", imageURL);
			$("#image").animate({
				marginLeft: "105px",
				opacity: "1"
		}, 1000)
		});
		
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// the click event handler for the right button						
	$("#right_button").click(function() { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; }
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click(function() {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		}
		else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click	
	
}); // end ready