
  const findTheOldest = function(people) {
    const oldestPerson = people.sort((a, b) => {
    const currentYear = (new Date()).getFullYear(); 
    
    if (!a.yearOfDeath){
a.yearOfDeath = currentYear
    } 
    if (!b.yearOfDeath){
        b.yearOfDeath = currentYear
    }
           
    const person1 = a.yearOfDeath - a.yearOfBirth; 


       
   
    const person2 = b.yearOfDeath - b.yearOfBirth;

    return person1 > person2 ? -1 : 1;
    

    });
    return oldestPerson[0]
    };

    

// Do not edit below this line
module.exports = findTheOldest;
