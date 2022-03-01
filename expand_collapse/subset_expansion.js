'use strict';

$(document).ready(function() {
	$('a').click(function(evt) {
		if ($(this).prev('div').hasClass('hide')) {
			$(this).prev('div').toggleClass('hide');
			$(this).text('Show less');
		}
		else {
			$(this).prev('div').toggleClass('hide');
			$(this).text('Show more');
		}
		evt.preventDefault();
	});
});