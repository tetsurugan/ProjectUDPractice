const fs = require("fs");

// Read the file content
const filePath = "./sowpods.txt";
const fileContent = fs.readFileSync(filePath, "utf8");

// Split the content into an array of words
const words = fileContent.split("\n");

// Array to store words that contain 'x', 'y', and 'z'
const wordsWithXYZ = [];

// Loop through the words
for (let i = 0; i < words.length; i++) {
  const word = words[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
  // Check if the word contains 'x', 'y', and 'z'
  if (word.includes("x") && word.includes("y") && word.includes("z")) {
    wordsWithXYZ.push(words[i]); // Add the original word to the results array
  }
}

// Print the words that match the criteria
console.log(wordsWithXYZ);
