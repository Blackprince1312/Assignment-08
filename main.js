$(document).ready(function(){

	var totalprice = items.reduce(function(a , b){
		if(typeof a === "number"){
			return a + b.price;
		} else {
			return a.price + b.price;
		}
	});
	$( "#answer1").html(totalprice/items.length)
console.log(totalprice/items.length)

});



























