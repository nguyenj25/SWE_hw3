// Name: James Nguyen
	$(document).ready(function() {
		// Order Form Handling
		$("button").click(function(event) {
			event.preventDefault(); // Prevent default form submission
	
			let notes = $("#Notes").val().toLowerCase();
	
			if (notes.includes("vegan")) {
				alert("Warning: Cheesecakes contain dairy!");
			} else {
				let quantity = $("#quantity").val();
				let topping = $("input[name='topping']:checked").val() || "None";
	
				// Replace the entire form section with confirmation message
				$("#order-form").html(`
					<h2>Thank you! Your order has been placed</h2>
					<p><strong>Topping:</strong> ${topping}</p>
					<p><strong>Quantity:</strong> ${quantity}</p>
					<p><strong>Notes:</strong> ${notes}</p>
				`);
			}
		});
	
		// Dynamic Month Dropdown
		let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
		$("h2:contains('Total Orders Last Month')").html(`
			Orders for <span id="month-dropdown">Jan</span>
		`).css("cursor", "pointer");
	
		$("#month-dropdown").css({
			"text-decoration": "underline",
			"color": "blue"
		});
		
		// Create dropdown menu
		let dropdownMenu = $("<div id='month-menu' class='dropdown-content'></div>").css({
			"display": "none",
			"position": "absolute",
			"background": "white",
			"border": "1px solid black",
			"max-height": "150px",
			"overflow-y": "auto",
			"padding": "5px",
			"z-index": "1000",
			"width": "80px"
		});

		// Create month items
		months.forEach(month => {
			let monthItem = $("<div class='month-item'>" + month + "</div>").css({
				"padding": "5px",
				"cursor": "pointer"
			}).hover(
				function() { $(this).css("background", "lightgray"); },
				function() { $(this).css("background", "white"); }
			).click(function() {
				$("#month-dropdown").text(month);
				dropdownMenu.hide();
			});
	
			dropdownMenu.append(monthItem);
		});
	
		$("body").append(dropdownMenu);
		
		// Show/hide dropdown
		let hideTimeout;
	
		$("#month-dropdown").mouseenter(function() {
			clearTimeout(hideTimeout);
			let pos = $(this).offset();
			dropdownMenu.css({ top: pos.top + 20, left: pos.left }).show();
		});
	
		dropdownMenu.mouseenter(function() {
			clearTimeout(hideTimeout);
		});
	
		$("#month-dropdown, #month-menu").mouseleave(function() {
			hideTimeout = setTimeout(() => dropdownMenu.hide(), 300);
		});
	});

	