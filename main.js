//Finds all prices and averages them
var avg = function(items) {
  var avgPrice = 0,
    average;

  for (var i = 0; i < items.length; i++) {
    avgPrice += items[i].price
  }

  average = avgPrice / items.length
  return average
}

document.getElementById('answer1').innerHTML = avg(items)


//Filters for items that cost 14.00 and 18.00
var priceFilter = items.filter(function(items) {
  if (items.price > 14.00 && items.price < 18.00) {
    return true
  } else {
    return false
  }
})

var between = priceFilter.map(function(items) {
  return {
    title: items.title
  }
})

between.forEach(function(obj) {
  $("#answer2").append("<p>" + obj.title + "</p>");
});

// GBP
var gbp = items.filter(function(items) {
  if (items.currency_code === "GBP") {
    return true
  } else {
    return false
  }
})

var title = gbp.map(function(items) {
  return {
    title: items.title
  }
})

title.forEach(function(obj) {
  $("#answer3").append("<p>" + obj.title + "</p>");
});

//Finds all items that are made of wood
var wood = items.filter(function(items) {
  var isWord = false;
  items.materials.forEach(function(material) {
    if (material === 'wood') {
      isWord = true
    }
  })
  return isWord
})

wood.forEach(function(obj) {
  $("#answer4").append("<p>" + obj.title + "</p>");
})
//Is made of eight or more materials
var eightMat = items.filter(function(items) {
  if (items.materials.length >= 8) {
    return true
  };
})

var filteredItems = eightMat.map(function(items) {
  return {
    'title': items.title,
    'materials': items.materials,
    'materialLength': items.materials.length
  }
})

filteredItems.forEach(function(obj) {
  $("#answer5").append("<p>" + obj.title + "<br> " + obj.materials.length + "<br> " + obj.materials + "</p>");
})

//Items made by there sellers
var seller = items.filter((items) => {
  if (items.who_made === 'i_did') {
    return true
  } else {
    return false
  }
})

seller.forEach(function(items) {
  return seller.length
})
$("#answer6").append(seller.length + " were made by their sellers.");
