const {wordsArray} = require("../../FileRead.JS")
//What are all of the words containing UU?

// const sampleArray = ['Water', 'Word', 'Continuum', 'Muumuu']
const findAllWordsContainingUU = (array) => {
    const allWordsContainingUu = []

    for (let index = 0; index < array.length; index++){
        
        const word = array[index]
        
        const doesWordHaveUU = hasUU(word)
        if (doesWordHaveUU) {
            allWordsContainingUu.push(word)
        }
    }
    return allWordsContainingUu
}

function hasUU(wordToCheck) {
    const lowercaseWord = wordToCheck.toLowerCase()
    return lowercaseWord.includes("uu")    
}

const result = findAllWordsContainingUU(wordsArray)
console.log(result)