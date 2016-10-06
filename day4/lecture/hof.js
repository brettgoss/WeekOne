// var list = ["Apples", "Feta Cheese", "Avocado", "Milk", "Tomatoes", "Hummus"];

function myMap(list, callback) {
  var listCopy = [];
  list.forEach(function(item){
    // 1. apply callback to get transformation
    var transformedItem = callback(item);
    // 2. push the transformed value into the copy of the list
    listCopy.push(transformedItem);
  });
  // return the copy of the list
  return listCopy;
}

var names = ["bob", "anna", "don", "david"];

var upcaseNames = myMap(names, function(item){
  return item + "!";
})

console.log("upcaseNames ", upcaseNames);


























// var itemWithA = list.find(function(item){
//   return item.startsWith("A");
// });

// // list.forEach(function(item) {
// //   if(item.startsWith("F")) {
// //     itemWithA += " " + item;
// //     return;
// //   }
// // });


// console.log(itemWithA);