// The second argument/parameter is expected to be a function
// Starting point is the revised version that reports the index at which Waldo's found
// Task is to convert a for loop to use forEach
function findWaldo(arr, found) {
  arr.forEach(function callback(currentValue, index) {
    if (currentValue === "Waldo")
      found(index);
  });
}
// Modified to receive the index and report where Waldo is ound
function actionWhenFound(currentIndex) {
  console.log("Found Waldo at index", currentIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);