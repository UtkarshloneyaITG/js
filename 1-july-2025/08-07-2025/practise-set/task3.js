// 🔶 Question 3: Odd or Even Counter
//  Create an array of numbers.
//  Use a loop to count how many are even and how many are odd.
//  Print both counts.

let arr = [1,2,5,7,9,10,8,54,46,88];
let odd = 0;
let even = 0;
for(let i = 0; i<10; i++){
  if(arr[i]%2=== 0){
    even++
  }
  else{
    odd++
  }
}
console.log(`total even no. ${even} and total odd no. ${odd}`)