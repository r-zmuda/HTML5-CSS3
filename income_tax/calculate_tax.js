//"use strict";
var $ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {
    $("calculate").onclick = processEntry;
	$("income").onclick = clearIncome;
	$("income").focus();
}

processEntry = function() {
	
	var income = parseInt($("income").value);
	var tax = 0.0;
	
	//Validate Income
	if (isNaN(income)) {
		alert("Income must be numeric.");
	}
	else if (income < 0) {
		alert("Income must be positive.");
	}
	
	//Get tax
	tax = calculateTax(income);
	$("tax").value = "$" + tax.toFixed(2);
	$("income").focus();
	
}

clearIncome = function() {
	$("income").value = "";
	$("tax").value = "";
	$("income").focus();
}

//Function that returns tax
calculateTax = function(income_entry) {
	var income_data = income_entry;
	var tax_data = 0.0;
	
	//Tax brackets
	if (income_data < 9275) {
		tax_data = 0 + (((income_data - 0) / 100) * 10.0);
	}
	else if (income_data > 9275 && income_data < 37650) {
		tax_data = 927.50 + (((income_data - 9275) / 100) * 15.0);
	}
	else if (income_data > 37650 && income_data < 91150) {
		tax_data = 5183.75 + (((income_data - 37650) / 100) * 25.0);
	}
	else if (income_data > 91150 && income_data < 190150) {
		tax_data = 18558.75 + (((income_data - 91150) / 100) * 28.0);
	}
	else if (income_data > 190150 && income_data < 413350) {
		tax_data = 46278.75 + (((income_data - 190150) / 100) * 33.0);
	}
	else if (income_data > 413350 && income_data < 415050) {
		tax_data = 119934.75 + (((income_data - 413350) / 100) * 35.0);
	}
	else {
		tax_data = 120529.75 + (((income_data - 415050) / 100) * 39.6);
	}
	
	return tax_data;
}