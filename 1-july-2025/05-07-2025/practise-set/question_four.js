//  Question 4: Age Category Checker
// Given a person object with name and age, determine if the person is:
// Child (<13), Teenager (13–19), Adult (20–59), or Senior (60+)
//  Use if-else to display the correct age category.

const person ={ // object contaning person info
  name : 'tyson',
  age : 24
}

let person_age = person.age;

//conditions

if(person_age>=60){
  console.log('senior');
}
else if(person_age>=20&&person_age<60){
  console.log('adult');
}
else if(person_age>=13&&person_age<20){
  console.log('teenager');
}
else{
  console.log("child");
}