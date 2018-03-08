// // for in loops

// for (var i /*variable section*/ in studentName /*object section*/) {
//     console.log(i) /*statement*/
//   }
  
//   //Write a for in loop that capitalizes the first letter of studentName
  
//   var studentName = 'paul';
//   var capSN = '';
//   for (var n in studentName) {
//     if (n == 0) {
//           capSN = studentName[n].toUpperCase();
//       } else {
//           capSN += studentName[n];
//       }
//   }

// console.log(capSN)

// pulls out items in keyed collections

// var student = {
//     name: 'alecx',
//     awesome: true,
//     degree: "Javascript",
//     week: 1
// };


// var studentName = "alecx"

// var capSN = '';

// for (var n in studentName){
//     if (n == 0){
//         capSN = studentName[n].toUpperCase()
//     } else {
//         capSN += studentName[n].toLowerCase();
//     }
// }

// console.log(capSN);


// for in loops

// here we go


// var alecxMoritz = {
//     name:   'alecx',
//     age:    23,
//     nerd:   true,
// }

// var n;

// for (var n in alecxMoritz){
//     console.log(n);
// }

var person = {fname:"Alecx", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
    text = person[x];
    console.log(text);
}

var user = {
    userName: 'techno_zelda',
    password: 'whatever',
    age: 23,
}

var userInfo = "";

for (x in user){
    userInfo = user[x];
    console.log(userInfo)
}


var theGang = {
    one: 'Alecx',
    two: 'Sarah',
    three: 'Michelle',
    four: 'Tay'
};

var people = "";

for (x in theGang){
    people = theGang[x];
    console.log(people);
}

