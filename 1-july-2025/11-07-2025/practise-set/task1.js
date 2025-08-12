// 1. Loop through Nested Object
// Use a for-in loop to iterate over a nested object and print all keys and values, including those inside the nested object.
const user = {
  name: "Ankit",
  age: 25,
  address: {
    city: "Amsterdam",
    zip: 12345
  }
};

for(let x in user){
  if(typeof user[x]==='object'){
    for(let y in user[x]){
      console.log(y,user[x][y])
    }
  }
  else{
    console.log(x,user[x]);
    
  }
}