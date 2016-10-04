var loopyLighthouse = function(range, multiples, words) {

  var num = 0;
  var r1 = range[0];
  var r2 = range[1];
  var m1 = multiples[0];
  var m2 = multiples[1];
  var w1 = words[0];
  var w2 = words[1];

  for (num = r1; num <= r2; num++) {
  //for loop that counts from range1 to range2
    if ((num % m1 === 0) && (num % m2 === 0)) {
      console.log(w1 + w2);
  //if num is a multiple of multiple1 && multiple2
    } else if (num % m1 === 0) {
      console.log(w1);
  //if num is just a multiple of multiple1
    } else if (num % m2 === 0) {
      console.log(w2);
  //if num is just a multiple of multiple2
    } else {
      console.log(num);
  //otherwise, just log the number
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);