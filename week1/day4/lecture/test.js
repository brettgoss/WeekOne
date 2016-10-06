



 var add = function() {
    console.log("add stuff");
}


var newFuncOne = function() {
  add();
  console.log("funcOne");
}


var newFuncTwo = function() {
  add();
  console.log("poop");
}



newFuncOne();
newFuncTwo();

