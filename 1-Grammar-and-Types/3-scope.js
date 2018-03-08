// let myAge = 23;
// var myBirthYear = 1994;

// console.log(myAge);
// console.log(myBirthYear);

// {
//     let inside = 7
//     console.log(inside);
// }

// console.log("=======");
// console.log(inside);


// scope notes

// global scope - the world
// local scope - a neighborhood


// this is global

const weather = "bad";

function football() {
    // everything in here is local
    var x = 7;
    console.log(x)
}

console.log("invoking a functin to price a local variable")

football();

console.log("Calling x from global results in an error, unless a new x is chosen in global scope.")
console.log("New x!")

x = 10;
console.log(x);


// let x = 7; assigns a variable in a local scope; local only variable assignment; 
// used for security coding; and info you don't want visable in a global scope;
//
 