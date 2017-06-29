// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback - Revised to pass the index
    }
  }
}
// Modify so that it receives the index, and reports where Waldo is ound
function actionWhenFound(index) { // Revised to receive the index
  console.log("Found Waldo at index", index + "!"); // Revised to report the index
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);