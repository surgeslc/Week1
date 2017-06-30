function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var index = 0;

  return function() {
    /* your code here */
    var loadedDice = (list[index]);
    index += 1;
    return loadedDice;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

/*INSTRUCTIONS
Create a function called makeLoadedDie() which returns a function
that when called, seems to generate random numbers between 1 and 6,
but in fact returns numbers in a row from a hardcoded list.*/