// ✅ Question 5: Count Digits in a Number
// Given a number (e.g., 398472), count how many digits it has using a while loop.
//  ❗ Do not use string methods.
//  Print the digit count.
console.log("js 5 loaded")
let num = 123456789;
let i=0;
let count = 0
while(num >= 1){
  num = num/10 
   i++  
}
console.log(i)