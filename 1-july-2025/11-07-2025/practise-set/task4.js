// 4. Iterate Object and Convert to Array
// Use a for-in loop to convert this object into an array of key-value strings like: "name: Rohan".

const person = {
  name: "Rohan",
  role: "Developer",
  level: "Mid"
};
let arr=[];
let count = 0;
for(let x in person){

  arr[count] = x +' : '+ person[x]
  count++
}
console.log(arr)