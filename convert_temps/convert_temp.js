"use strict";
var $ = function(id) { return document.getElementById(id); };

var convertTemp = function() {
	if(isNaN($("degrees_entered").value)) {
		alert("Invalid entry. Must be a number.");
		clearTextBoxes();
		$("degrees_entered").focus();
	}
	if($("to_celsius").checked) {
		var degrees_entered = parseFloat($("degrees_entered").value);
		console.log(degrees_entered);
		degrees_entered = (degrees_entered - 32) * 5/9;
		$("degrees_computed").value = parseFloat(degrees_entered);
	}
	if($("to_fahrenheit").checked) {
		var degrees_entered = parseFloat($("degrees_entered").value);
		console.log(degrees_entered);
		degrees_entered = (degrees_entered * 9/5) + 32;
		$("degrees_computed").value = parseFloat(degrees_entered);
	}
};

var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var toCelsius = function() {
	$("degree_label_1").innerHTML = "Enter F degrees:";
	$("degree_label_2").innerHTML = "Degrees Celsius:";
	clearTextBoxes();
	$("degrees_entered").focus();
};

var toFahrenheit = function() {
	$("degree_label_1").innerHTML = "Enter C degrees:";
	$("degree_label_2").innerHTML = "Degrees Fahrenheit:";
	clearTextBoxes();
	$("degrees_entered").focus();
};

window.onload = function() {
	$("degrees_entered").onclick = clearTextBoxes;
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};