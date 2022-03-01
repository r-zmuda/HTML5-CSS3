var $ = function (id) {
	
    return document.getElementById(id);
	
}

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("clear").onclick = clearEntries;
	$("subtotal").onclick = clearSubtotal;
	$("tax_rate").onclick = clearTaxRate;
	$("subtotal").focus();
}

//Calculates Sales Tax and Total
processEntries = function() {
	
	var subtotal = parseFloat($("subtotal").value);
	var tax_rate = parseFloat($("tax_rate").value);
	
	//Validate entries
	if (isNaN(subtotal) || isNaN(tax_rate)) {
		alert("Subtotal and Tax Rate must be numeric.");
	}
	else if (subtotal < 0 || subtotal > 10000) {
		alert("Subtotal must be 0-10000.");
	}
	else if (tax_rate < 0 || tax_rate > 12) {
		alert("Tax Rate must be 0-12.");
	}
	else {
	}
	
	var sales_tax = ((subtotal / 100) * tax_rate);
	var total = subtotal + sales_tax;
	$("sales_tax").value = "$" + sales_tax.toFixed(2);
	$("total").value = "$" + total.toFixed(2);
	
}

clearEntries = function() {
	$("subtotal").value = "";
	$("tax_rate").value = "";
	$("sales_tax").value = "";
	$("total").value = "";
	$("subtotal").focus();
}

clearSubtotal = function() {
	$("subtotal").value = "";
	$("sales_tax").value = "";
	$("total").value = "";
}

clearTaxRate = function() {
	$("tax_rate").value = "";
	$("sales_tax").value = "";
	$("total").value = "";
}