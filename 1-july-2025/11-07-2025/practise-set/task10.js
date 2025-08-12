// 10 :Function with Default Parameters
// Write a function greetUser that accepts a name and language, and returns a greeting. If no language is provided, default to English.

// greetUser("Ankit", "hindi") ➞ "Namaste, Ankit"
// greetUser("Ankit") ➞ "Hello, Ankit"

function greeting(name, language){
  let h = language != 'hindi' && language != "Hindi" ? 'hello ' + name : 'namaste ' + name;
  return h;
}

let greater = greeting('ankit','Hindi')
console.log(greater);