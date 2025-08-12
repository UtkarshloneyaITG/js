// ✅ Question 3: Find the First String in an Array
// You are given an array with mixed data types.
//  Use a while loop to find and print the first element that is a string.
//  Stop the loop once the first string is found.
console.log('js connected')
let arr = [undefined,23,true,null,'ask',26374n]
let i = 0;
 while(typeof arr[i] != 'string'){
   i++
 }
console.log(arr[i])