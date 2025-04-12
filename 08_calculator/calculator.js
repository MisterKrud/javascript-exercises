const log = console.log;

const add = function(a, b) {
  return a+b;
}

const subtract = function (a,b) {
  return a-b;
}

const sum = function (numArray){
  return numArray.reduce((total, item)=>  total+item,0);
  }



const multiply = function (numArray) {
  return numArray.reduce((total, item) => total*item,1)
}


const power = function (a, b) {
  return Math.pow(a,b)
}

const factorial = function (num) {
  let solution =1

  for (let i=num; i>=1; i--) {
  
    solution *= i
  }
  return solution
}


/*
const add = function (num1, num2) {
  const addSolution = num1 + num2;
  return addSolution;
};

const subtract = function (num1, num2) {
  const subtractSolution = num1 - num2;
  return subtractSolution;
};

const sum = function (numArray) {
  let n = 0;
  for (let i = 0; i < numArray.length; i++) {
    n += numArray[i];
  }

  return n;
};

const multiply = function (numArray) {
  let num = 1;
  for (let i = 0; i < numArray.length; i++) {
    num = num * numArray[i];
  }
  return num;
};

const power = function (num1, num2) {
  const powSolution = Math.pow(num1, num2);
  return powSolution

};

const factorial = function (num) {
  if(num === 0 || num ===1) {
    return 1
  } else {

  for (let i=num-1; i>=1; i--) {
  
    num *= i
  }
  return num
}

};*/
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
