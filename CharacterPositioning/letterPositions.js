//A function that returns all the unique characters (except spaces) that exist in a string
//which is passed into the function.
//It also reports the positions at which occurences of the letter were found.
var inputText = process.argv[2]; //A string; ...argv.slice(2) gives an array
console.log(inputText);

function letterPositions(string) {
//populated to exist for testing
var outputReport = {};
var currentLetter = "";

//Iterate through the string
for (i = 0; i <= string.length - 1; i++) {
    //If the item's a space, move to the next item
    currentLetter = string.charAt(i);
  if (currentLetter === " ") {
    continue; //Next i
  }
  if (outputReport.hasOwnProperty(currentLetter) == false) {
      console.log("Key", currentLetter, "doesn't exist");
      console.log("Must add the key and value");
      outputReport[currentLetter] = [i];
      console.log("outputReport at", i, "is", outputReport);
    //outputReport[currentLetter] = i;    //console.log(Object.keys(outputReport));
      } else {
        console.log("Key", currentLetter, "exists");
        console.log("Must push the current position to the array");
        outputReport[currentLetter].push(i);
    //Object.currentLetter.
    //outputReport[currentLetter].push(i);
    //outputReport[inputText.charAt(i)].push(i);
    //outputReport.push.inputText.charAt(i);
  }
    //    .property[inputText.charAt(i)] = i;
  //The key exists, so increment it
  //outputReport[inputText.charAt(i)] += 1;
}
return outputReport;
letterPositions(string);
}
console.log(letterPositions('lighthouse in the house'));