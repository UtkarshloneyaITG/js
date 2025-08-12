// 🔶 Question 7: BMI Calculator
//  Create a person object with name, weight (kg), and height (m).
//  Use formula: BMI = weight / (height × height)
//  Use if-else to print:
// "Underweight" < 18.5


// "Normal" 18.5–24.9


// "Overweight" 25–29.9


// "Obese" ≥ 30

const person = {
  name : 'tyson',
  weight_in_kg : 45,
  height_in_meters : 2
}

let BMI = person.weight_in_kg / (person.height_in_meters**2);

if(BMI >= 30 ){
  console.log("Obese");
}
else if (BMI >= 25 && BMI <=29.9){
  console.log("Overweight");
}
else if (BMI >= 24.9 && BMI <= 18.5){
   console.log("Normal");
}
else {
  console.log("Underweight");
  
}