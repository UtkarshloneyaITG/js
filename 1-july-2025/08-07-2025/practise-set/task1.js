// 🔶 Question 1: Movie Rating Checker
//  Create a movie object with title and rating (0–10).
//  Use if-else to print:
// "Excellent" if rating ≥ 9


// "Good" if 7–8.9


// "Average" if 5–6.9


// "Poor" if <5

const movie = {
  title : 'Annabelle',
  rating : 8.9
}
let rating = movie.rating;

if(rating>= 9){
  console.log("Excellent");
}
else if (rating <= 8.9 && rating >=7){
  console.log("Good");
}
else if (rating >= 5 && rating <= 6.9) {
  console.log("Average");
}
else {
  console.log('poor');
}