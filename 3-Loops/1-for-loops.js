// For Loops


// function divider(x){
//     console.log("****************" + x + "*******************")
// }

// divider("For Loops");


// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// // challenge

// divider("Count by 2")

// for (var i = 0; i< 21; i+=2){
//     console.log(i)
// }

// divider("Kenn")

// var name = 'Kenn';

// for ( var i = 0; i < name.length; i++){
//     console.log(name[i])
// }

// // challenge two

// divider("challenge two")



// var myName = "Alecx"

// for (var i = myName.length -1; i >= 0; i--){
//     console.log(myName[i])
// }

let total = 0;

for (var i = 0; i <= 50; i++){
    total += i
}

console.log(total)

// another challenge
// you will be asked this question again
// FizzBuzz

for (var i = 0; i <= 30; i++){

    if (i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18 || i == 21 || i == 24 || i == 27 ){
        console.log("Fizz")
    } else if(i == 5 || i == 10 || i == 15 || i == 20 || i == 25 ){
        console.log("Buzz")
    } else if (i == 30){
        console.log("Fizzbuzz")
    } else {
        console.log("Just a normal number")
    }
}