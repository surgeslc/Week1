var countdownGenerator = function (x) {
  /* your code here */
  var seconds = x;
  return function() {
    if (seconds > 0) {
      console.log("T-minus", seconds + "...");
      seconds -= 1;
      return seconds;
    }
    if (seconds === 0) {
      console.log("Blast Off!");
      seconds -= 1;
      return seconds;
    }
    if (seconds < 0) {
      console.log("Rockets already gone, bub!");
    }
  }
}
var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

/*INSTRUCTIONS
Implement a function countdownGenerator() that takes in a number x
and returns a function that counts down when it is called
(see starter code below).*/