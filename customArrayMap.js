var words = ["ground", "control", "to", "major", "tom"];
var lengths = [];

function map(arr) {
  arr.forEach(function callback(currentValue, index) {
    lengths.push(currentValue.length);
    words = lengths;
    return words
  })
}
map(words);
console.log(words);