'use strict';

$(document).ready(function() {
	var total = 0.0;
	$('p#total').text('Total: $' + total.toFixed(2));
		
	$('a').each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).children('img').attr('id');
	});
	
	$('a').hover(function() {
		var imageURL = $(this).children('img').attr('src');
		var infoURL = $(this).children('img').attr('id');
		$(this).children('img').attr('src', infoURL);
		$('a').mouseout(function() {
			$(this).children('img').attr('src', imageURL);
		});
	});
	
	$('#place_order').click(function() {
		if (total == 0.0) {
			alert('You must buy something!');
		}
		else {
			$(location).attr('href', 'checkout.html');
		}
	});
	
	$('#clear_order').click(function() {
		$('#order').empty();
		total = 0.0;
		$('p#total').text('Total: $' + total.toFixed(2));
	});
	
	$('a').click(function(evt) {
		var item = $(this).children('img').attr('alt');
		if (item == 'espresso') {
			var o = new Option('$1.95 - Espresso');
			$('#order').append(o);
			total += 1.95;
			$('p#total').text('Total: $' + total.toFixed(2));
		}
		if (item == 'latte') {
			var o = new Option('$2.95 - Latte');
			$('#order').append(o);
			total += 2.95;
			$('p#total').text('Total: $' + total.toFixed(2));
		}
		if (item == 'cappuccino') {
			var o = new Option('$3.45 - Cappuccino');
			$('#order').append(o);
			total += 3.45;
			$('p#total').text('Total: $' + total.toFixed(2));
		}
		if (item == 'coffee') {
			var o = new Option('$1.75 - Coffee');
			$('#order').append(o);
			total += 1.75;
			$('p#total').text('Total: $' + total.toFixed(2));
		}
		if (item == 'biscotti') {
			var o = new Option('$1.95 - Biscotti');
			$('#order').append(o);
			total += 1.95;
			$('p#total').text('Total: $' + total.toFixed(2));
		}
		if (item == 'scone') {
			var o = new Option('$2.95 - Scone');
			$('#order').append(o);
			total += 2.95;
			$('p#total').text('Total: $' + total.toFixed(2));
		}
		evt.preventDefault();
	});
});