// 🔶 Question 6: Travel Budget Planner
//  Create an object with destination, days, and dailyBudget.
//  Calculate and print total estimated expense:
//  days × dailyBudget

const trip = {
  destination : 'kedarnath',
  days : 15,
  dailybugget : 1000
}
let dailyExpence = trip.days*trip.dailybugget
console.log(dailyExpence);