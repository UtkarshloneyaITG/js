// Question 3: Discount Calculator
// Create an object with a productName and price. Apply:

const product_info ={
  product_name : 'T.V',
  price : 10000 
}

let price = product_info.price;//

let twoenty_percentage = (20/100)*price;//twenty percentage calculate
let ten_percentage = (10/100)*price;//ten percentage calculate

//conditions 
if(price >=10000){
  console.log(price - twoenty_percentage, 'you got 20% discount');
}
else if (price <=10000 && price>=5000){
  console.log(price - ten_percentage, 'you got 10% discount');
}
else {
  console.log('your item is below 5000 so, no discount')
}