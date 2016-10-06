// String
var name = 'Brett';
var es = '';

var typeofName = typeof name;
console.log(typeofName);
//

// Boolean
var tr = true;
var fa = false;

var typeofTr = typeof tr;
console.log(typeof typeofTr);
console.log(typeofTr);
//

// Number
var a = 42;
var t = 1;
var f = 0;

console.log(typeof a);
//

// NaN
var negZ = -0;
var nana = NaN;
var inf = Infinity;
var negInf = -Infinity;

console.log(typeof nana);
console.log(typeof negInf);
console.log(1 / 0);
//

// Null
var n = null;

console.log(typeof n);
//

// Undefined
var u;

console.log(typeof u);
//

//var stuckTogether = a + name;
//console.log(stuckTogether);

// Functions
function myFunc() {
  // does nothing
  // noop
}
console.log(typeof myFunc);
//

// Array
var arr = [];

console.log(typeof arr);
//

// Object
var teacher = {
  name: 'David'
};

var teacher2 = {
  name: 'David'
};

var sameTeacher = teacher == teacher2;
console.log("Same Teacher?", sameTeacher);

var b = 41;
b = b + 1;
var sameNumber = (a === b);
console.log(sameNumber);


console.log(teacher2.name);
teacher2.name = 'Don';
console.log(teacher2.name);

var teacher2point0 = teacher2;
console.log(teacher2 === teacher2point0);


console.log('----------');

var myObj = {
  name: 'Brett'
};
myObj = {
  value: 'true'
};

console.log(myObj.name);
console.log(myObj.value);