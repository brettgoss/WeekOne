var myArg = process.argv.slice(2);
var number = 0;
//console.log(myArg);

function sum(numbers) {
  var total = 0;

  for (var i = 0; i < myArg.length; i++) {
   console.log(i);
    debugger;
    var number = Number(myArg[i]);
    if (isNaN(number) === false) {
      total += number;
    } else {}
  }
  console.log(number);
}
sum(1,2,3,4,5,6);