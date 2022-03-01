"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;
var timerRunning = false;

var displayCurrentTime = function() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $('hours').innerHTML = padSingleDigit(hours);
    $('minutes').innerHTML = padSingleDigit(now.getMinutes());
    $('seconds').innerHTML = padSingleDigit(now.getSeconds());
    $('ampm').innerHTML = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

var padSingleDigitMS = function(num) {
	if (num < 10 || num == 0) { return "00" + num; }
	else if (num < 100) { return "0" + num; }
	else { return num; }
}

var tickStopwatch = function() {    
    // increment milliseconds by 10 milliseconds
	elapsedMilliseconds = elapsedMilliseconds + 10;
    
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
	if (elapsedMilliseconds == 1000) {
		elapsedMilliseconds = 0;
		elapsedSeconds = elapsedSeconds + 1;
	}
    
    // if seconds total 60, increment minutes by one and reset seconds to zero
	if (elapsedSeconds == 60) {
		elapsedSeconds = 0;
		elapsedMinutes = elapsedMinutes + 1;
	}
    
    //display new stopwatch time
	$('s_ms').innerHTML = padSingleDigitMS(elapsedMilliseconds);
	$('s_seconds').innerHTML = padSingleDigit(elapsedSeconds);
	$('s_minutes').innerHTML = padSingleDigit(elapsedMinutes);
    
};

// event handler functions
var startStopwatch = function(evt) {
    // prevent default action of link
	evt.preventDefault();
    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
    // variable so next two functions can stop timer.
	tickStopwatch();
	if (!timerRunning) {
		stopwatchTimer = setInterval(tickStopwatch, 10);
		timerRunning = true;
	}
};

var stopStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
	clearInterval(stopwatchTimer);
	timerRunning = false;
};

var resetStopwatch = function(evt) {
    // prevent default action of link
	evt.preventDefault();
    // stop timer
	clearInterval(stopwatchTimer);
	timerRunning = false;
    // reset elapsed variables and clear stopwatch display
	elapsedMilliseconds = 0;
	elapsedSeconds = 0;
	elapsedMinutes = 0;
	$('s_ms').innerHTML = padSingleDigitMS(elapsedMilliseconds);
	$('s_seconds').innerHTML = padSingleDigit(elapsedSeconds);
	$('s_minutes').innerHTML = padSingleDigit(elapsedMinutes);
	
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers
	$('start').onclick = startStopwatch;
	$('stop').onclick = stopStopwatch;
	$('reset').onclick = resetStopwatch;
};