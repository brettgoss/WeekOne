var array = ["ground", "control", "to", "major", "tom"];


function myMap(array,cb){
  var map = [];
  array.forEach(function(item){
    var transItem = cb(item);
    map.push(transItem);

  })

  console.log(map);

};

myMap(array, (elm) => { return elm.length });
