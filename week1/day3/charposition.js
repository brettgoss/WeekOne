var userInput = process.argv.splice(2).join('');

countLetters(userInput);

function countLetters(input){

  var charCount = {

  };
  //var index = 0;
  var stringPos = 0;
  for (var key of userInput) {



    if (!charCount[key]) {
      charCount[key] = (newObj = {});
      var occ = stringPos;
        newObj.instances = 1;
        //newObj.indexPos = index;
        newObj.inst = newObj.occ;
    } else {
      newObj.occurances += 1;
    }

stringPos++;

  }
  //for (key in charCount) {
  //   var value = charCount[key];
  //   console.log(value);
  // }
  //console.log(newObj);
  console.log(charCount);
}







