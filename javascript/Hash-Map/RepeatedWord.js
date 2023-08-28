"use strict";

const HashMap = require("./HashMap");

function repeatedWord(str) {
  function cleanStr(str) {
    return str.toLowerCase().replace(/[,.;:!?]/g, "");
  }

  const cleanString = cleanStr(str);
  const wordsArr = cleanString.split(" ");

  const wordMap = new HashMap(wordsArr.lenght);

  for (const word of wordsArr) {
    if (wordMap.has(word)) {
      return word;
    }
    wordMap.add(word, true);
  }
  return null;
}

// Test assertions
console.log(repeatedWord("Once upon a time, there was a little prince.")); // Output: 'a'
console.log(repeatedWord("In the middle of difficulty lies opportunity.")); // Output: null
console.log(repeatedWord("To be or not to be, that is the question.")); // Output: 'to'

// Edge cases
console.log(repeatedWord("")); // Output: null
console.log(repeatedWord("No repeated words here.")); // Output: null
