
var mathStuff = {

  adds: function(num1,num2) {
    return (num1) + (num2);
  },
  mults: function(x,y) {
    return multiply(x,y);
  }
}


function multiply(num1,num2) {
  return (num1) * (num2);
}

module.exports = {mathStuff};