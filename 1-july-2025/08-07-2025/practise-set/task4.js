// 🔶 Question 4: Character Counter
//  Given a string stored in a variable, count the number of vowels in it using a loop.
//  Print total vowels.

let word = 'meaningful'
let count = 0;
for(let a =0; a<10; a++){
  if(word[a] == 'a'|| word[a] == 'e' || word[a]== 'i' || word[a] == 'o' || word[a] == 'u'){
    count++
  }
}
console.log(count)