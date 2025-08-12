//Q-3 | Create 3 students objects with these roperties: name , marks1, marks2, marks3 - find 
  //  the average marks of each students by calcluting their totla marks

  let student_one = {
    name : 'ray',
    marks1 : 79,
    marks2 : 70,
    marks3: 81
  }
  let student_two = {
    name : 'kay',
    marks1 : 46,
    marks2 : 90,
    marks3: 34
  }
  let student_three = {
    name : 'tyson',
    marks1 : 65,
    marks2 : 98,
    marks3: 74
  }
  let first = (student_one.marks1 + student_one.marks2 + student_one.marks3)/3;
  let second =(student_two.marks1 + student_two.marks2 + student_two.marks3)/3;
  let third = (student_three.marks1 + student_three.marks2 + student_three.marks3)/3;

  let arr_of_average = [first,second,third];
  console.log(`first student average : ${arr_of_average[0]}.
              \nSecond student average : ${arr_of_average[1]}.
              \nThird student average is : ${arr_of_average[2]}.`);
