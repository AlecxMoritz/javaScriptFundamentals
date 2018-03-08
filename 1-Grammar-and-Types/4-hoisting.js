// // var x = 3
// // let y = 4
// // const z = 5

// // {
// //     var a = 1
// //     let b = 2
// // }

// // console.log(a);
// // // console.log(b); results in error

// // console.log("==============================");

// // /* scope leak example

// // {
// //     var a = 1
// // }


// // console.log(a);

// // to stop this use let instead of var


// // */


// // Hoisting
// // JS puts the vars and funcs at the top of the code, it stores the vars and funcs before it runs them
// //



// console.log(x);


// var x = 5;

// =================================== let needs to be used at the top, as they are 'short term memory' variables, 
// x = 5;
// y = 10;

// console.log(x + y);

// let y;
// let x;

// this code will give us 15, not zero, because the new value for x and y is being assigned at the end. 
// the correct code should look like

let x = 5;
let y = 10;

console.log(x + y);

y = 10;
x = 3;

console.log(x + y)

console.log("=======")

console.log(first)
var second = function Second() {   // = stopping point
    return 'Did not get hoisted!'
}
var first = function First() {
    return "Just got hoisted!"
}

console.log(second)