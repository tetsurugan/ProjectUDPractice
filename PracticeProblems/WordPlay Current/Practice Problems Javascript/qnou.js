const fs = require("fs");

// Read the file content
const filePath = "./sowpods.txt";
const fileContent = fs.readFileSync(filePath, "utf8");

// Split the content into an array of words
const words = fileContent.split("\n");

// Array to store words that contain 'q' but not 'u'
const wordsWithQButNoU = [];

// Loop through the words
for (let i = 0; i < words.length; i++) {
  const word = words[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
  // Check if the word contains 'q' and does not contain 'u'
  if (word.includes("q") && !word.includes("u")) {
    wordsWithQButNoU.push(words[i]); // Add the original word to the results array
  }
}

// Print the words that match the criteria
console.log(wordsWithQButNoU);