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
//
