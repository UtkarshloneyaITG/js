//  Question 6: Triangle Type Identifier
// Create an object with three sides of a triangle: a, b, and c. Determine:
// Equilateral: All sides equal


// Isosceles: Any two sides equal


// Scalene: All sides different
//  Use if-else to classify the triangle.

const triangle = {
  a : 31, //in cm
  b : 30, //in cm
  c : 31 //in cm
}

if (triangle.a === triangle.b && triangle.b=== triangle.c){
  console.log("it's an equilateral triangle");
}
else if (triangle.a === triangle.b && triangle.b != triangle.c || triangle.b === triangle.c && triangle.c != triangle.a || triangle.a === triangle.c && triangle.b != triangle.c){
  console.log("it's an isosceles triangle ");
}
else {
  console.log("it's an scalene triangle");
}