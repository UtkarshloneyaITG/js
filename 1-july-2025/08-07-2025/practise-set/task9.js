// 🔶 Question 9: Reverse a String
//  Given a string in a variable, reverse it using a loop and print the result.

let word = 'dafination';
let free = '';
for(let i = word.length-1; i>=0; i--){
  free += word[i];
  }
console.log(free);