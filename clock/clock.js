"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	$('hours').innerHTML = padSingleDigit(parseInt(hours));
	$('minutes').innerHTML = padSingleDigit(parseInt(minutes));
	$('seconds').innerHTML = padSingleDigit(parseInt(seconds));
	if (hours > 12) { $('ampm').innerHTML = 'PM';}
	else { $('ampm').innerHTML = 'AM';}
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
	displayCurrentTime();
	setInterval(displayCurrentTime, 1000);
};