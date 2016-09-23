var loopyLighthouse = function(range, multiples, words) {

  var i = 0;
  var r1 = range[0];
  var r2 = range[1];
  var m1 = multiples[0];
  var m2 = multiples[1];
  var w1 = words[0];
  var w2 = words[1];

  for (i = r1; i <= r2; i++) {
  //for loop that counts from range1 to range2
    if ((i % m1 === 0) && (i % m2 === 0)) {
      console.log(w1 + w2);
  //if i is a multiple of multiple1 && multiple2
    } else if (i % m1 === 0) {
      console.log(w1);
  //if i is just a multiple of multiple1
    } else if (i % m2 === 0) {
      console.log(w2);
  //if i is just a multiple of multiple2
    } else {
      console.log(i);
  //otherwise, just log the number
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);