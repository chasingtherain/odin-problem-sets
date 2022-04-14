const findTheOldest = function(people) {
        let currentDate = new Date()
        let currentYear = currentDate.getYear() + 1900
        let oldestPerson = [];
        let oldest = 0;
        let oldestIndex = 0;
      
        people.forEach(
          person => {
            oldestPerson.push(person.yearOfDeath - person.yearOfBirth)
          } 
        )
        for (i=0; i<people.length;i++){
          if (oldestPerson[i] > oldest){
            oldest = oldestPerson[i];
            oldestIndex = i;
          }
        }
        return people[oldestIndex].name;
}

// Do not edit below this line
module.exports = findTheOldest;
