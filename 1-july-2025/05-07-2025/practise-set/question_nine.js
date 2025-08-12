// Question 9: Login Authentication
// Ek object banao jisme username aur password ho. Check karo ki dono predefined credentials se match karte hain ya nahi:
// js
// CopyEdit
// const validUsername = "admin";
// const validPassword = "12345";

// Print karo "Login successful" ya "Invalid credentials".

const login_info = {
  validUsername : 'admin',
  validPassword : '12345'
}

let entered_password = '12345';
let entered_username = 'admin';

if(login_info.validUsername === entered_username && login_info.validPassword === entered_password){
  console.log('Login Successful');
}
else {
  console.log('Invalid credentials');
}