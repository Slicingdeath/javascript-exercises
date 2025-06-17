const findTheOldest = function(people) {
    let ages = people.map((person) => {
        let age = ((person.yearOfDeath || 2025) - person.yearOfBirth);
        return {
            name: person.name,
            age: age
        }
    });
    age_list = ages.map((person) => person.age);
    highest_age = Math.max(...age_list);
    for (let person of ages) {
        if (person.age == highest_age) {
            return person;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
