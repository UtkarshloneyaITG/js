// 11. Return Object from Function
// Create a function createStudentProfile(name, age, grade) that returns an object with these properties.

// createStudentProfile("Rohan", 15, "A") ➞ { name: "Rohan", age: 15, grade: "A" }

function Csp(name, age, grade){
  let obj = {
   name : name,
   age : age,
  grade : grade
  }
  return obj;
}
let studentProfile = Csp('rohan',16,'A')
console.log(studentProfile);