const removeFromArray = function (arr, ...removeArgs) {
  let resultArray = arr;

  for (let i = 0; i < removeArgs.length; i++) {
    const itemToRemove = removeArgs[i];
    console.log(
      `arr: ${arr} | Result array: ${resultArray} | Removing: ${itemToRemove}`
    );
    
    
    console.log(`${itemToRemove} is indexed at: ${resultArray.indexOf(removeArgs[i])}`);
    
   for (removeArgs[i] in resultArray) {
   
      let indexOfItem = resultArray.indexOf(itemToRemove);
      console.log(`${itemToRemove} is indexed at: ${indexOfItem}`);
      if (indexOfItem != -1) {
     

      

      
      console.log(`${itemToRemove} is indexed at: ${indexOfItem}`);

     

      let arrEnd = resultArray.slice(indexOfItem + 1);
      console.log(`Array end: ${arrEnd}`);

      let arrStart = resultArray.slice(0, indexOfItem);
      console.log(`Array start ${arrStart}`);

      let newArray = arrStart.concat(arrEnd);
      console.log(`New array: ${newArray}`);

      resultArray = newArray;
      console.log(`Result array: ${resultArray}`);

     }
    }
  }

    
    let finalArray = resultArray;
  
    return finalArray;
  }
;

// Do not edit below this line
module.exports = removeFromArray;
8