var array = ["ground", "control", "to", "major", "tom"];

var input = ["BRETT", "NOT", "LOWER", "CASE"];
var lowerCase = function(str){
  for (var i = 0; i < str.length; i++){
    var result = str[i].toLowerCase();
    console.log(result);
  }
}
var upperCase = function(item){
  for (var i = 0; i < item.length; i++){
    item = item[i].toUpperCase();
  }
    return item;
}


function myMap(array,cb){
  var map = [];
  array.forEach(function(item){
    var transItem = cb(item);
    map.push(transItem);

  })

  console.log(map);

};

//myMap(input,upperCase);

myMap(array, (elm) => { return elm.length });
