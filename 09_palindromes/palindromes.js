const palindromes = function (word) {
    const newWord =   word.toLowerCase()
                          .replace(/[^a-z0-9]/g,'')
                          
  
   const reverseWord = newWord.split('')
                              .reverse()
                              .join('')
  
     console.log(newWord+' '+reverseWord)                     
  
      if(reverseWord===newWord){
          return true
      } else {
          return false
      }
  
     }
   

// Do not edit below this line
module.exports = palindromes;
