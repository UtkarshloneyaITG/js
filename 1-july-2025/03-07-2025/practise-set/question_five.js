//Q-5 | create an array called my-info which have 2 objects 
// each objects hav ecityname, address, roll-number then swap the 
// value of one object with another

let my_info = [
  {
    city_name : 'indore',
    address : '2 rajes nagar',
    roll_number : 302
  },
  {
    city_name : 'bhopal',
    address : '9 vikas nagar',
    roll_number : 307
  }
];
let temp = my_info[0];
 my_info[0] = my_info[1];
 my_info[1] = temp;

 console.log(my_info[1]);