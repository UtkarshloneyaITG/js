// 🔶 Question 5: Password Strength Checker
//  Create a user object with username and password.
//  Check password strength:
// Less than 6 characters: "Weak"


// 6–10: "Medium"


// More than 10: "Strong"

const user = {
  username : 'mohit',
  password : 'hlo123#45yysss'
}
let password = user.password;

if(password.length > 10){
  console.log('strong password')
}
else if(password.length >= 6 && password.length < 10){
  console.log('medium')
}
else {
  console.log('weak')
}