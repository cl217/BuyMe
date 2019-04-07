/* JavaScript specific to create_auction.jsp */

/* after getting attributes for Clothing table, switch to type form and post Clothing data */
$('#newProductForm').on('submit', function(e){
	e.preventDefault();
	this.style.display = "none";
	var head = document.getElementById("formHead");
	// show form for specific product type
	switch($("#type").val()){
	
	case "shirts":
		document.getElementById("shirtForm").style.display = "block";
		head.innerHTML = "Shirt Details";
		break;
	case "pants":
		document.getElementById("pantsForm").style.display = "block";
		head.innerHTML = "Pants Details";
		break;
	case "jackets":
		head.innerHTML = "Jacket Details";
		document.getElementById("jacketForm").style.display = "block";
		
	}
	$.ajax({
		url: "/BuyMe/AuctionManagementServlet",
		method: "POST",
		// send action=c for create new clothing tuple
		data: $(this).serialize() + "&action=c",
		
		success: function(){
			console.log("success");
		}
	})
});

/* on submit of any Clothing type form, show final auction form and post Clothing Type data */
$('.typeForm').on('submit', function(e){
	e.preventDefault();
	this.style.display = "none";
	document.getElementById('auctionForm').style.display = "block";
	document.getElementById('formHead').innerHTML = "Additional Details";
	
	$.ajax({
		url: "/BuyMe/AuctionManagementServlet",
		method: "POST",
		// send action=t for adding fields to related type of clothing tuple created in newProductForm
		data: $(this).serialize() + "&action=t",
		
		success: function(){
			// do stuff
		}
	})
})

/* on submit of final auction form, do something */
$('#auctionForm').on('submit', function(e){
	e.preventDefault();
	$.ajax({
		url: "/BuyMe/AuctionManagementServlet",
		method: "POST",
		// send action=a for creating auction tuple associated with product and type
		data: $(this).serialize() + "&action=a",
		
		success: function(){
			// send to servlet with for redirect
			window.location.replace("AuctionManagementServlet?location=view");
			
		}
	})
});