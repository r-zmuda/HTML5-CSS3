'use strict';

$(document).ready(function() {
	$('a').each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr('href');
	});
	
	$('a').click(function(evt) {
		var imageURL = $(this).attr('href');
		$('#image').attr('src', imageURL);
		var caption = $(this).attr('title');
		$('#caption').text(caption);
		evt.preventDefault();
	});
	
	$('a').first().focus();
});