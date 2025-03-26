const palindromes = function (word) {
    let lowerCase = word.toLowerCase()
    console.log(`word: ${word}`)
    let lettersOnly = lowerCase.replaceAll(/[^a-z0-9]/g, '')
    console.log(`lettersOnly: ${lettersOnly}`)
    let forwardWord = lettersOnly.split('').join('');

    let backwardWord = lettersOnly.split('').reverse().join('');

    console.log(`forwardWord: ${forwardWord} | backwardWord: ${backwardWord}`)
   
   if (forwardWord != backwardWord) {
       return false
   } else {
       return true
   }
   
   
   
   };
   

// Do not edit below this line
module.exports = palindromes;
