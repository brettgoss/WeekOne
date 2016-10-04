var myArg = process.argv.slice(2);
diceRoll(myArg);


function diceRoll(numDice) {

  for (var i = 0; i < numDice; i++) {

    var diceMath = Math.floor((Math.random() * 6) + 1);
    var result = diceMath;
   console.log(result);

  }
}
