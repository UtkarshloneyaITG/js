let namelist = [
  'jaya Prajapat'
  ,'Deepika pandaya'
  ,'Siddi Senger'
  ,'Utkarsh Loniya'
  ,'khushi garoda'
  ,'Manish Kumar'
  ,'Rohan Verma'
  ,'Abha Bhagat'
  ,'Balwan singh Rajput'
  ,'Roshni mandloi'
  ,'Aman Kumar'
  ,'Varsha Padiya'
  ,'Honey Goswami'
  ,'Sneha Mishra'
  ,'Naina Soni'
  ,'Shivang Ranawat'
  ,'Parth Sharma'
  ,'Raghav Vishwakarma'
  ,'Kuldeep Badodiya'
  ,'Aryan Jaiswal'
  ,'Harshit Choudhary'
  ,'Kanha Jhangrala'
  ,'Uday Solanki'
  ,'Priyanshi Mishra'
  ,'Krishna pal thakur'
   ];
let min = 0;
let max = 24;
const index = Math.floor((Math.random()*(max-min))+min);
let template = `The name of the student who selected is : ${namelist[index]}`
document.getElementById('new').innerText = template;
console.log(template);