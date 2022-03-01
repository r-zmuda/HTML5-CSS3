$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#arrival_date").focus();
	
	$("#reservation_form").submit(
		function(event) {
			var valid = true;
			
			//1. all text boxes must be filled in
			//validate arrival date
			var arrival_date = $("#arrival_date").val();
			if (arrival_date == "") {
				$("#arrival_date").next().text("* This field is required.");
				valid = false;
			}
			else {
				$("#arrival_date").next().text("");
			}
			
			//validate nights (must be numeric)
			var nights = $("#nights").val();
			if (nights == "") {
				$("#nights").next().text("* This field is required.");
				valid = false;
			}
			else if (isNaN(nights)) {
				$("#nights").next().text("* Must be numeric.");
				valid = false;
			}
			else {
				$("#nights").next().text("");
			}
			
			//validate name
			var name = $("#name").val();
			if (name == "") {
				$("#name").next().text("* This field is required.");
				valid = false;
			}
			else {
				$("#name").next().text("");
			}
			
			//validate phone
			var phone = $("#phone").val();
			if (phone == "") {
				$("#phone").next().text("* This field is required.");
				valid = false;
			}
			else {
				$("#phone").next().text("");
			}
			
			//validate email
			var email = $("#email").val();
			if (email == "") {
				$("#email").next().text("* This field is required.");
				valid = false;
			}
			else if (!emailPattern.test(email)) {
				$("#email").next().text("* Must be a valid email address.");
				valid = false;
			}
			else {
				$("#email").next().text("");
			}
			
			if (valid == false) { event.preventDefault(); }
		}
	);
}); // end ready