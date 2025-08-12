// 🔶 Question 8: Leap Year Checker
// Ek object banao jisme year ho. Check karo ki woh leap year hai ya nahi:
// Year 4 se divisible hona chahiye


// Agar 100 se divisible ho toh 400 se bhi divisible hona chahiye
//  Print karo leap year hai ya nahi.

const leapyear = {
  year : 2018
}
let leapyearChecked =  leapyear.year;

if(leapyearChecked % 4 === 0){
  console.log('its an leap year');
}
else{
   console.log('its not an leap year');
};