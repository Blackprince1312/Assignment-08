$(document).ready(function () {

	$("#answer1").append("The average price is ").append("$").append(avgPrice);

	var list = $('<ul />');



});
var totalPrice = items.reduce(function (a, b) {

	if (typeof a === "number") {
		return a + b.price;
	} else {
		return a.price + b.price;
	}
});

var avgPrice = (totalPrice / items.length).toFixed(2);

priceArr = items.filter(function (btwnObj) {
	if (btwnObj.price > 14 && btwnObj.price < 18) {
		return true;
	} else {
		return false;
	}
});



var newArray = priceArr.map(function (obj) {
	return {
		title: obj.title,

	}
});

newArray.forEach(function (obj) {
	$("#answer2").append(obj.title).append("<p></p>");
});


var gbpArr = items.filter(function (gbpObj) {
	if (gbpObj.currency_code === "GBP") {
		return true;
	} else {
		return false;
	}
});



var array = gbpArr.map(function (obj) {
	return {
		title: obj.title,
		price: obj.price
	}
});

array.forEach(function (obj) {
	$("#answer3").append(obj.title).append(" costs ").append("£").append(obj.price);
});





var newArr = items.filter(function (item) {
	var isWord = false;
	item.materials.forEach(function (material) {
		if (material === "wood") {
			isWord = true;
		}

	});
	return isWord;
});

newArr.forEach(function (obj) {
	$("#answer4").append(obj.title).append(" is made of wood.").append("<p></p>");
})


var moreFilter = items.filter(function (obj) {
	if (obj.materials.length >= 8) {
		return true;
	}
});

var test = moreFilter.map(function (obj) {
	return {
		'title': obj.title,
		'materials': obj.materials,
		'materialLength': obj.materials.length
	};
});

test.forEach(function (obj) {
	$("#answer5").append(obj.title).append(" has ").append(obj.materials.length).append(" materials:").append("<p></p>").append(obj.materials + "<br/>").append("<p></p>")

});


var sellerFilter = items.filter(function (obj) {
	if (obj.who_made === "i_did") {
		return true;
	} else {
		return false;
	}
});

sellerFilter.forEach(function (obj) {
	return sellerFilter.length;
});
$("#answer6").append(sellerFilter.length + " were made by their sellers.");