/**
 * Rolls a number of dice.
 * @author Brett Goss
 */
var myArg = process.argv.slice(2);

function diceRoll(numDice) {
  var message = [];
  for (var i = 0; i < numDice; i++) {

    var diceMath = Math.floor((Math.random() * 6) + 1);
    message.push(diceMath);
  }
  console.log("Rolled " + numDice + " dice: " + message.join(", "));
}
diceRoll(myArg);
