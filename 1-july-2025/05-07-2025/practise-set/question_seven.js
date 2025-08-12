// Question 7: Bill Splitter with Service Charge
// Create a bill object with totalAmount and numberOfPeople. If the bill is more than 500:
// Add a 10% service charge
//  Then divide and print how much each person should pay.

const bill = {
  totalAmount : 500,
  numberOfPeople : 5
}
let serviceCharge = bill.totalAmount+((10/100)*bill.totalAmount);
//console.log(serviceCharge)
let divide = serviceCharge/bill.numberOfPeople;
if(bill.totalAmount>=500){
  console.log(`every person need to pay ${divide}rs service tax inculded`);
}
else{
   console.log(`every person need to pay ${ bill.totalAmount / bill.numberOfPeople}rs`);
}