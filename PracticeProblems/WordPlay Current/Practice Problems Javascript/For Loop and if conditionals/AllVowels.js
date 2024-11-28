const fs = require("fs");

// Read the file content
const filePath = "./sowpods.txt";
const fileContent = fs.readFileSync(filePath, "utf8");

// Split the content into an array of words
const words = fileContent.split("\n");

// Array to store words that meet the criteria
const results = [];

// Loop through each word in the SOWPODS list that has all vowels
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.includes("A") && word.includes("E") && word.includes("I") && word.includes("O") && word.includes("U")) {
    results.push(word);
  }
}
console.log(results);