var speech = "i am  a good husband.   I love my wife very much";
var wordCount = 0;
for (var i = 0; i < speech.length; i++) {
  var char = speech[i];

  if (char == ' ' && speech[i - 1] != ' ') {
    wordCount++;
  }
}
wordCount++;
console.log("total word=", wordCount);