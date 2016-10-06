var userInput = process.argv.splice(2).join('');

countLetters(userInput);

function countLetters(input){

  var charCount = {};

  for (var key of userInput) {

    if (!charCount[key]) {
      charCount[key] = 1;

    } else {
      charCount[key] += 1;
    }

  }
  console.log(charCount);
}







