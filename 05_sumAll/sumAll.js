const sumAll = function (num1, num2) {
  const log = console.log;

  const nums = [num1, num2];

  log(`Argument aray: ${nums}`);
  let numNegative = nums.find(findNegativeNumber);
  

  function findNegativeNumber(value, index, array) {
    return value<0
  
  }
  log(`Negative number? ${numNegative}`)

  let nonInteger = nums.find(findInteger)

  function findInteger(value, index, array) {
    return !Number.isInteger(value)
  }
log(`Integer? ${nonInteger}`)


  if (numNegative || nonInteger ) {
    return "ERROR";
  } else {
    let n = 0;
    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        n = i + n;
      }
      let solution = n;

      return solution;
    } else if (num2 < num1) {
      for (let i = num2; i <= num1; i++) {
        n = i + n;
      }
      let solution = n;

      return solution;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
