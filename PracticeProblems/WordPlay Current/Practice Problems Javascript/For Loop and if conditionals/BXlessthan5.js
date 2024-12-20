const fs = require("fs");

// Read the file content
const filePath = "./sowpods.txt";
const fileContent = fs.readFileSync(filePath, "utf8");

// Split the content into an array of words
const words = fileContent.split("\n");

// Array to store words that meet the criteria
const results = [];

// Loop through each word in the SOWPODS list
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  // Check if the word contains "B" and "X" and is less than 5 letters long
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    results.push(word); // Add the word to the results array
  }
}

// Print the results
console.log(results);