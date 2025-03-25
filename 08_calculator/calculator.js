const log = console.log

const add = function(num1, num2) {
	const addSolution = (num1 + num2)
  return addSolution
};

const subtract = function(num1, num2) {
	//if (num1>num2){
  const subtractSolution = (num1 - num2)
  return subtractSolution
//} else  {
  //const subtractSolution = (num2-num1)
  //return subtractSolution
//}
};

const sum = function(...nums) {

const numberArray = nums
const sumSolution = (sum(numberArray))
return sumSolution
	
};

const multiply = function(...nums) {
let num = 1
for (let i = 0; i<numberArray.length; i++) {
  num = num*nums[i]
}
};

const power = function() {
	
};

const factorial = function() {
	
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
