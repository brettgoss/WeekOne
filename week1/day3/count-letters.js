// function countLetters(string) {
//   var




// }

// pass sting to function


//* break apart string {
//*  for loop to separate sting into char individually
//     //store characters as new key in object
//     if key already exists, just increment value
//     else new key and create value of 1;

// }
// var key = 'l';
// var value = 0;



// return unique characters
// report back instances of letters in string


// tessst

var Userinput = process.argv[2].split(' ').join('');
// var test = 'tesssssssssssssst sentence';
countLetters(Userinput);

function countLetters(input){

  var charCount = {};

  // test = test.split(' ').join('');

  for (var key of input) {

    if (!charCount[key]) {
      charCount[key] = 1;

      //charCount[str] += 1;
    } else {
      charCount[key] += 1;
    }
  }
  console.log(charCount);

}







