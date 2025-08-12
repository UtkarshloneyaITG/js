//  Student Grading System

const subject_marks = {
  maths : 80,
  english : 94,
  science : 76,
}
//average calculation
let average_marks = (subject_marks.maths + subject_marks.english + subject_marks.science)/3
//conditions 
if(average_marks>=90){
  console.log('congratulation you got A+');
}
else if (average_marks>=80&&average_marks<90){
  console.log('congratulation you got A');
}
else if (average_marks>=70&&average_marks<80){
  console.log('good you got B');
}
else if (average_marks>=60&&average_marks<70){
  console.log('You got C');
}
else {
  console.log('fail');
}



