const fs = require('fs');

// Read the content of the text file
const fileContent = fs.readFileSync('sowpods.txt', 'utf8');

// Split the content into an array of strings, separated by newline characters
const wordsArray = fileContent.split('\n').filter(word => word.trim() !== '');

module.exports.wordsArray = wordsArray;