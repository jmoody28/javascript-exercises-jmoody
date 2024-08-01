const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();
  const peeps = array.map((person) => {
    const age = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : currentYear - person.yearOfBirth;
    return { ...person, age };
  });
  const people = peeps.reduce((person, currentPerson) => {
    if (person.age > currentPerson.age) {
      return person;
    } else {
      return currentPerson;
    }
  }, peeps[0]);
  return people;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
