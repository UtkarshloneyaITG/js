// 2. Find Common Elements
// Using a for-of loop, find and print common elements between two arrays.

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 3, 6, 7];

for(let x of arr1){
  for(let y of arr2){
    if(x === y){
      console.log(x,y)
    }
  }
}