const fibonacci = function(int) {
    let num = parseInt(int);
 //if(num===0) {
   // return 0
 //} else 
 if (num<0) {
    return 'OOPS'
 } else {

    let arr =[0, 1]
    for (let n=2; n<=num; n++) {
          let  newNumber = arr[n-1]+arr[n-2];
            arr.push(newNumber);
        }
return arr[num]
    }}



// Do not edit below this line
module.exports = fibonacci;
