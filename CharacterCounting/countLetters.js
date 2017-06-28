//A function that returns all the unique characters (except spaces) that exist in a string
//which is passed into the function.
//It also reports how many instances of each letter were found.

var inputText = process.argv[2]; //A string; ...argv.slice(2) gives an array

function countLetters(string) {

var outputReport = {
};

//Iterate through the string
for (i = 0; i <= inputText.length - 1; i++) {
    //If the item's a space, move to the next item
  if (inputText.charAt(i) === " ") {
    continue; //Loop without doing anything
  }
  //Current character isn't a space
  //If the key doesn't exist, create it, set it to 1, and loop back
  if (outputReport[inputText.charAt(i)] == undefined) {
    outputReport[inputText.charAt(i)] = 1;
    continue;
  }
  //The key exists, so increment it
  outputReport[inputText.charAt(i)] += 1;
  }
  console.log(outputReport);
}
countLetters(inputText);