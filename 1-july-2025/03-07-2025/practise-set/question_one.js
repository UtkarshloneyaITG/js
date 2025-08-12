//Q-1 | create 3 objects. each object should have these properties: name, age, salary, education Then claclulare and print:
  // 1. the average age of all 3 people 2. the total salary of all 3 people
  // 
  let person_one_info = {
    name: 'ego',
    age: 19,
    salary: 6000,
    education: '12th pass'
  }
  let person_two_info = {
    name: 'hola',
    age: 54,
    salary: 60000,
    education: '10th pass'
  }
  let person_three_info = {
    name: 'sayonara',
    age: 20,
    salary: 3000,
    education: '12th pass'
  }
  let averageAge = (person_one_info.age + person_two_info.age + person_three_info.age)/3;
  let totalSalaryOfAllThreePersons = person_one_info.salary + person_two_info.salary + person_three_info.salary;
  console.log(`average age of three employes is ${averageAge}`);
  console.log(`Total salary of three person is ${totalSalaryOfAllThreePersons}`)
