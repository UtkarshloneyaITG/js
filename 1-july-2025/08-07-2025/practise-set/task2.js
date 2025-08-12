// 🔶 Question 2: Temperature Alert System
//  Create an object with city and temperature.
//  Use conditions:
// Above 40: "Heatwave alert"


// Below 5: "Cold wave alert"


// Else: "Normal temperature"

const info ={
  city : 'indore',
  temperature : 42
}
let temperature = info.temperature;
if(temperature>40){
  console.log('heat wave alert');
}
else if(temperature<=5){
  console.log('cold wave alert');
}
