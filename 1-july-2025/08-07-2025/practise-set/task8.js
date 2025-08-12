// 🔶 Question 8: Multiple of 3 or 5
//  Create a number variable.
//  Use if-else to check:
// If divisible by 3 → print "Fizz"


// If divisible by 5 → print "Buzz"


// If divisible by both → print "FizzBuzz"

let number = 15;

if(number%3 === 0&&number%5 === 0){
  console.log('FizzBuzz');
}
else if(number%3 === 0){
  console.log('fizz');
  
}
else if(number%5 === 0){
  console.log('fuzz');
}
