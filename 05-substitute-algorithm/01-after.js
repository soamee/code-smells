function foundPerson(people) {
  let candidates = ['Don', 'John', 'Kent'];

  // my own solution
  // return people.find((p) => candidates.includes(p)) || '';

  for (let person of people) {
    if (candidates.includes(person)) {
      return person;
    }
  }
  return '';
}

console.log(foundPerson(['Matej', 'John', 'Luka', 'Don']));
