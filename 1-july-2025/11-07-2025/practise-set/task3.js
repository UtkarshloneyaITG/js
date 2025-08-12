// 3. Count Even and Odd Numbers
// Using a for of loop, count how many even and odd numbers are in a given array.


const numbers = [4, 7, 8, 11, 14, 17, 20];
let odd = 0;
let even = 0;
for(let x of numbers){
  if((x%2) === 0){
    even++
  }
  else{
    odd++
  }
}
console.log('even:', even, 'odd:', odd);