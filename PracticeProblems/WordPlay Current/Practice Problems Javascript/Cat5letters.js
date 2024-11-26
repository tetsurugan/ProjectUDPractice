const fs = require("fs");

// Read the file content
const filePath = "./sowpods.txt";
const fileContent = fs.readFileSync(filePath, "utf8");

// Split the content into an array of words
const words = fileContent.split("\n");

// Array to store words that meet the criteria
const fiveLetterCatWords = [];

// Loop through the words
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  // Check if the word contains "CAT" and is exactly 5 letters long
  if (word.includes("CAT") && word.length === 5) {
    fiveLetterCatWords.push(word); // Add the word to the results array
  }
}

// Print the words that match the criteria
console.log(fiveLetterCatWords);