let x=0;
function colorchange() {
  let color = document.getElementsByClassName('colorp')[x];
  if(color.style.backgroundColor === 'red'){
    color.style.backgroundColor = 'green';
    color.style.boxShadow = '0 0 25px green';
  }
  else{
    color.style.backgroundColor = 'red';
    color.style.boxShadow = '0 0 25px red';
  }
}
//cost student = math.floor((math.random()*(max-min-1))+min);