// // weather = 80;

// // if (weather <= 70){
// //     console.log("Wear a jacket")
// // }else{
// //     console.log("You're good!")
// // };

// // function divider(x){
// //     console.log("*************" + x + "*************")
// // };

// // divider("if else");

// // var myName = "ALECX";
// // var name = myName.toLowerCase();

// // if (name == "alecx"){
// //     function jsUcFirst(Name){
// //         return string.charAt(0).toUpperCase + string.slice(1);
// //     }
// //     var firstLetter = name.charAt(0);
// //     var upperCaseFirstLetter = name.charAt(0).toUpperCase();
// //     var stringWithoutFirstLetter = name.slice(1);
// //     console.log("Hi, " + upperCaseFirstLetter + stringWithoutFirstLetter);
// // }else{
// //     console.log("Hello! Who are you?");
// // };

// // divider("else if");

// // var age = 30

// // if (age < 17 ){
// //     console.log("You're too young to do anything!")
// // } else if (age >= 18 && age <=21 ) {
// //     console.log("You can vote!")
// // } else if(age >= 21 && age <25){
// //     console.log("You can drink!");
// // } else if(age >= 25 ) {
// //     console.log("You can rent a car!")
// // };


// // x = 27

// // var ternAge = (x >= 25) ? "You can rent a car" : (x >= 21) ? "You can get draanks!" : (x >= 18) ? "You can vote!" : "You're too young for any fun";
// // console.log(ternAge);

// var isTheBridgeOut = true;
// var isTheWaterDeep = true;
// var isSomethingInTheWater = true;
// var itsAShark = true;
// var todayWeather = "Sunny";
// var wrongPlace = true;

// if (isTheBridgeOut && todayWeather){
//     console.log("Well at least it's nice out!")
// }

// if (isTheBridgeOut){
//     console.log("Uh-oh! The bridge is out!")
// } else {
//     console.log("What a nice looking bridge!")
// };
 
// if (isTheWaterDeep) {
//     console.log("Well, it's gonna be a wet one.")
// } else {
//     console.log("Well this is gonna be easy!")
// };

// if (isSomethingInTheWater || itsAShark){
//     console.log("SHARK!!!")
// }else{
//     console.log("This water is so clear!")
// };

// if (isTheBridgeOut && wrongPlace){
//     console.log("All that work, for NOTHING!!")
// }else{
//     console.log("We're supposed to head West from here.")
// }


// function divider(x){
//     console.log("***********" + x + "************")
// };

// divider("Fix the Code");


// var bankAccount = 8000;
// var debt = 4200;
// var difference = bankAccount - debt;

// console.log("I have $" + bankAccount + " in my bank account, and I am $" + debt + " in debt.")

// if (bankAccount - debt > 700) {
//         console.log("I have some extra money. I should pay off my debt. I'll have $" + difference + " leftover.");    
//     } else {
//         console.log("It probably isn't a good time to pay off my debt.")
// };


console.log("Check type of Data for a variable!")



var x = 0;


switch (typeof x){     // starting an action witht the {}
    case 'number':     // curly braces and brackets, even when empty, still mean object and array
        console.log("Numbers are cool");
        break;
    case 'string':
        console.log("String cheese.")
        break;
    case 'boolean':
        console.log("Truthiness.")
        break;
    default:
        console.log("No idea")
    };


