const removeFromArray = function (arr, ...removeArgs) {
    
    let resultArray = arr

//for (let i=0; i<removeArgs.length; i++) {

  /*  console.log(`------------------loop------------------`)


console.log(`arr: ${arr}`)
console.log(`Result array: ${resultArray}`)
console.log(`Removal of ${removeArgs[i]}` )
*/
   removeArgs.forEach(deleteItem)
   
   function deleteItem(removeArg) {

    let itemToRemove = removeArg
 
  let indexOfItem = resultArray.indexOf(itemToRemove);
//console.log(`Indexed at: ${indexOfItem}`)
 

  let arrEnd = resultArray.slice(indexOfItem + 1);
  //console.log(`Array end: ${arrEnd}`)

  let arrStart = resultArray.slice(0, indexOfItem);
  //console.log(`Array start ${arrStart}`)

  

  let newArray = arrStart.concat(arrEnd);
  //console.log(`New arra: ${newArray}`)


  
 resultArray = newArray
 console.log(`Result array: ${resultArray}`)
  
 return resultArray

}  
let finalArray = resultArray;

return finalArray
}

// Do not edit below this line
module.exports = removeFromArray;
