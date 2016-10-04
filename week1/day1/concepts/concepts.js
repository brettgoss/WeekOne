/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var concepts = joinList(conceptList);
 // a custom function written by you (you must define it too!)

function joinList(list) {
  var newList = "";
  /* running through the array. */
  for (var i = 0; i < list.length; i++) {
    /* if the array position isn't the last one, add to newList and add a comma and space */
    if (i !== (list.length - 1)) {
      newList += list[i] + ", ";
      /* if it IS the last array position, add to newList but don't add a comma and space */
    } else {
      newList += list[i];
    }
  }
  return newList;
};

// Write your code here...

console.log("Today I learned about " + concepts + ".");