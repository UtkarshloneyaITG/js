//  Q-4 | create an objects called `calssroom` it should have a property '
//  student' that is an array of 3 students objects, Each students object 
// should have: - name, hobbies (an array of 3 hobbies), city print the second
//  hobby of the third student

let calssroom = {
  student : [
     {
      name : 'ray',
      hobby : ['painting','driving','reading books'],
      city : 'indore'
    },
    {
      name : 'kay',
      hobby : ['whaching movies','mobile games','cycling'],
      city : 'ujjain'
    },
     {
      name : 'tyson',
      hobby : ['playing chess','coding','teaching'],
      city : 'bhopal'
    }
  ]
}
let specificInfo = calssroom.student[2].hobby[1];
console.log('hobby is : ',specificInfo);