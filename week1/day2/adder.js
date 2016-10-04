var myArg = process.argv.slice(2);
var total = 0;
var number = 0;
//console.log(myArg);


for (var i = 0; i < myArg.length; i++) {
  console.log(i);
  debugger;
  var number = Number(myArg[i]);
  if (isNaN(number) === false) {
    total += number;
  } else {}
}
console.log(total)