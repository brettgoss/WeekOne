function findWaldo(arr, found) {
  var count = 0;
  arr.forEach(function(i) {
    if (i === "Waldo") {
      found(count);
    }
    count += 1;
  });
}

function actionWhenFound(index) {
  console.log("Found him at " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
