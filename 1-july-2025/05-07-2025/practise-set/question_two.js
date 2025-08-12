//Create a product object with keys: name, quantity,
//  and price. Check if the quantity is more than 0:

const productInfo = {
  name : 'Parle-G',
  quantity : 10,
  price : '5 Rs'
}
let quantity = productInfo.quantity;
//conditions
if(quantity > 0){ 
  console.log('product is in stock');
}
else{
  console.log('out of stock');
}