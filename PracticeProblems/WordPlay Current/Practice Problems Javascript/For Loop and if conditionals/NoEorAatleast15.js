const fs = require("fs");

// Read the SOWPODS file
const filePath = "./sowpods.txt";
const fileContent = fs.readFileSync(filePath, "utf8");

// Split the content into an array of words
const words = fileContent.split("\n");

// Array to store words that meet the criteria
const results = [];

// Loop through each word in the SOWPODS list
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  // Check if the word has no "E" or "A" and is at least 15 letters long
  if (!word.includes("E") && !word.includes("A") && word.length >= 15) {
    results.push(word); // Add the word to the results array
  }
}

// Print the results
console.log(results);