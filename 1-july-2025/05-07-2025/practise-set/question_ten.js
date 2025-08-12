// 🔶 Question 10: Electricity Bill Calculator
// Ek object banao jisme name aur unitsConsumed ho. Bill calculate karo:
// Pehle 100 units ₹5 per unit


// 101 se 300 units ₹7 per unit


// 300 se upar ₹10 per unit
//  Name aur total bill amount print karo.

const bill_version_two = {
  name : 'max',
  unitsConsumed : 205
}

let per_unit;
let unitsConsumed = bill_version_two.unitsConsumed;
if(unitsConsumed<=100){
  per_unit = 5;
}
else if(unitsConsumed>100&&unitsConsumed<=300){
  per_unit = 7;
}
else {
  per_unit = 10
}
console.log(`your bill is ${per_unit*unitsConsumed} you'r unit is ${unitsConsumed}`);