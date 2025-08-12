// Question 5: Compare Salaries
// Create two person objects with name and salary. Compare the salaries using
// conditional logic and print who earns more, or if both earn equally.

const person_one = {
  name : 'tyson',
  salary : 40000
}
const person_two = {
  name : 'kay',
  salary : 45000
}

if(person_one.salary < person_two.salary){
  console.log(`person two salery (${person_two.salary}) is more than person on salery (${person_one.salary})`);
}
else if (person_one.salary > person_two.salary){
  console.log(`person two salery (${person_two.salary}) is more than person on salery (${person_one.salary})`);
}
else {
  console.log('person one salery and person two salery is same');
}