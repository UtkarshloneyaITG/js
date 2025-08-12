// 7. String Character Count
// Use a for-of loop to count the number of vowels in a given string.
console.log('js 7 running')

const str = "intermediate level questions";
let count = 0;
for(let x of str){
  if(x === 'a'||x==='e'||x==="i"||x==='o'||x==="u"){
    console.log(x)
    count++
  }
}
console.log(count)