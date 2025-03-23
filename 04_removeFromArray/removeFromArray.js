const removeFromArray = function (arr, ...removeArgs) {
    
    
    
    for (let removeArg of removeArgs) {
   

  let resultArray = arr
    
           
     
      let indexOfItem = resultArray.indexOf(removeArg);

     

      let arrEnd = resultArray.slice(indexOfItem + 1);
      let arrStart = resultArray.slice(0, indexOfItem);

      

      let newArray = arrStart.concat(arrEnd);

      
     resultArray = newArray
      
      return resultArray
    }

}
// Do not edit below this line
module.exports = removeFromArray;
