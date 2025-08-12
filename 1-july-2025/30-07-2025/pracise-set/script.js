let container = document.getElementById('first-div');
let logins = document.getElementById('login_page');
let signUp = document.getElementById('sign_up_page');
let imgchange = document.getElementById('imagechage');
let link = document.getElementById('linktag');
let labelcolor = document.getElementsByClassName('color')
let loginButton = document.getElementById('login-button')
let signUpButton = document.getElementById('sign-up-button')
function login() {
  logins.style.display = 'block';
  signUp.style.display = 'none';
  document.getElementById('logse').innerText = 'Login'
  container.style.background = 'rgb(1, 183, 255)'
  container.classList.add('hero')
  imgchange.style.height = '300px'
  // container.removeAttribute('class')
  // container.innerHTML = `<h1> hello world</h1>`
   imgchange.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-43llHBQzebQRoXZmysTWT0mGL3f9Kpcf-A&s')
  //  console.log(link.hasAttribute('href'))
 container.style.borderColor = 'darkcyan'
 signUpButton.style.display = 'block'
loginButton.style.display = 'none';
}
function sign_up() {
  logins.style.display = 'none';
  signUp.style.display = 'block';
   container.classList.remove('hero')
  document.getElementById('logse').innerText = 'Sign Up'
  container.style.background = 'green'
  container.style.borderColor = 'lightgreen'
  imgchange.style.height = '150px'
  loginButton.style.display = 'block';
  signUpButton.style.display = 'none'
  imgchange.setAttribute('src', 'https://www.shutterstock.com/shutterstock/videos/17775361/thumb/1.jpg')
   for(let x = 0;; x++){
    if(labelcolor[x].classList.contains('color')){
      console.log('works') 
       labelcolor[x].style.color = 'gray'
    }
    else{
      break;
    }
  }
}
