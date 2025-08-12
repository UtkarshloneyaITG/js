// 9. Group Users by Role
// Given an array of user objects, use for-of to group users by role in a new object.

console.log('js 9 is running')
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" }
];
let obj1 = {
}
let obj2 = {

}
let a =0;
for(let x of users){
a++
 for(let y of users){
  if(x.role ===  y.role){
    if(x.role === 'admin')
    obj1[a] = x
  }
 if(x.role ===  y.role){
    if(x.role === 'user')
    obj2[a] = x
  }
}
}
console.log(obj1,obj2)