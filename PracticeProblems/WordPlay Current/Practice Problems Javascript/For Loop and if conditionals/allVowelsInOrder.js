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
  let vowelIndex = 0; // Index to track the position of vowels in order
  const vowels = ["A", "E", "I", "O", "U"];
  let isOrdered = true;

  // Check each character in the word
  for (const char of word) {
    if (char === vowels[vowelIndex]) {
      vowelIndex++; // Move to the next vowel
      if (vowelIndex === vowels.length) break; // Stop if all vowels are found
    } else if (vowels.includes(char) && char !== vowels[vowelIndex]) {
      isOrdered = false; // If a vowel appears out of order, mark it invalid
      break;
    }
  }

  if (isOrdered && vowelIndex === vowels.length) {
    results.push(word);
  }
}

// Print the results
console.log(results);