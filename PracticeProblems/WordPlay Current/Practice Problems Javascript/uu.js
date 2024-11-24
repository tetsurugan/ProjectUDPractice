// Importing the `fs` module to work with the file system
const fs = require("fs");

// Define the file path
const filePath = "./sowpods.txt";

// Read the file content as a string
const fileContent = fs.readFileSync(filePath, "utf8");

// Makes an array in a variable called `words`
const words = fileContent.split("\n");

// Initialize an empty array to store words containing "uu"
const uuWords = [];

// Loop through each word in the list
for (let word of words) {
  // Check if the word includes "uu"
  if (word.toLowerCase().includes("uu")) {
    // Add the word to the `uuWords` array
    uuWords.push(word);
  }
}

// Output the results
console.log("Words containing 'uu':", uuWords);