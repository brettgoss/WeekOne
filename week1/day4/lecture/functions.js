// functions can be assigned a variable

var sayHello = function(name) {
  return "Hello " + name;

}

// console.log(sayHello("Brett"));

function excited(punctuation, name, greeterFunction) {
  console.log(greeterFunction(name) + punctuation);
}

// excited("!!!", sayHello("brett"));

var sayHola = function(name) {
  return "Hola " + name;

}
excited("!", "Brett", sayHola);
