/*
1 var declares a variable
2 let declares a variable that is block-scoped(more on this later)
3 const declares a block-scoped variable, that is a constant.
*/

var myAge = 23;
let myBirthYear = 1994;

console.log(myAge);
console.log(myBirthYear);

myAge = 24;
myBirthYear = 1993;

console.log(myAge);
console.log(myBirthYear);

